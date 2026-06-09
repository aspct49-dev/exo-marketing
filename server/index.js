import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, '..', 'dist');

const PORT = process.env.PORT || 3001;
const WEBHOOK = process.env.DISCORD_WEBHOOK_URL;

if (!WEBHOOK) {
  console.error('FATAL: DISCORD_WEBHOOK_URL is not set. Refusing to start.');
  process.exit(1);
}

const app = express();

// We sit behind nginx, so trust the first proxy hop for correct client IPs.
app.set('trust proxy', 1);

// Reject oversized bodies outright.
app.use('/api', express.json({ limit: '12kb' }));

// --- Simple in-memory rate limiter (per IP) ---------------------------------
// 5 submissions per 10 minutes. Plenty for a real human, useless for a spammer.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map(); // ip -> number[] (timestamps)

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

// Periodically purge stale entries so the map can't grow unbounded.
setInterval(() => {
  const now = Date.now();
  for (const [ip, ts] of hits) {
    const recent = ts.filter((t) => now - t < WINDOW_MS);
    if (recent.length === 0) hits.delete(ip);
    else hits.set(ip, recent);
  }
}, WINDOW_MS).unref();

// --- Helpers ----------------------------------------------------------------
const str = (v, max) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

// --- Contact endpoint -------------------------------------------------------
app.post('/api/contact', async (req, res) => {
  if (rateLimited(req.ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const name = str(req.body?.name, 256);
  const contact = str(req.body?.contact, 256);
  const company = str(req.body?.company, 256); // broker referral
  const message = str(req.body?.message, 1024);

  if (!name || !contact || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const payload = {
    username: 'ExoMarketing',
    // No content field -> @everyone / @here in user input can never ping.
    allowed_mentions: { parse: [] },
    embeds: [{
      title: '🎯 New Inquiry from ExoMarketing Website',
      color: 0x5865f2,
      fields: [
        { name: '👤 Name', value: name || '—', inline: true },
        { name: '💬 Contact', value: contact || '—', inline: true },
        { name: '🤝 Broker Referral', value: company || '—', inline: false },
        { name: '📝 Message', value: message || '—', inline: false },
      ],
      footer: { text: 'ExoMarketing Contact Form' },
      timestamp: new Date().toISOString(),
    }],
  };

  try {
    const r = await fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!r.ok) throw new Error(`Discord webhook failed: ${r.status}`);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Webhook forward failed:', err.message);
    return res.status(502).json({ error: 'Failed to send. Please try again.' });
  }
});

// --- Static site + SPA fallback ---------------------------------------------
app.use(express.static(DIST_DIR));
app.get('*', (_req, res) => {
  res.sendFile(path.join(DIST_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`ExoMarketing server listening on http://localhost:${PORT}`);
});
