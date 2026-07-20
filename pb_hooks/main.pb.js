// Ensure a superadmin exists on every boot, using env vars (headless-friendly:
// avoids the PocketBase installer-token flow on Railway). Idempotent + safe.
onBootstrap((e) => {
  e.next();
  try {
    const email = $os.getenv('PB_ADMIN_EMAIL');
    const password = $os.getenv('PB_ADMIN_PASSWORD');
    if (!email || !password) return;
    try {
      e.app.findAuthRecordByEmail('_superusers', email);
      return; // already exists
    } catch (_) {
      // not found → create it
    }
    const col = e.app.findCollectionByNameOrId('_superusers');
    const rec = new Record(col);
    rec.set('email', email);
    rec.setPassword(password);
    e.app.save(rec);
    console.log('[quint] superadmin ensured for ' + email);
  } catch (err) {
    console.log('[quint] superadmin bootstrap error: ' + err);
  }
});

routerAdd('GET', '/api/quint/health', (e) => e.json(200, { status: 'ok' }));
routerAdd('POST', '/api/quint/contact', (e) => {
  const clean = (value, max) => String(value || '').trim().slice(0, max);
  const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const body = e.requestInfo().body || {};
  const name = clean(body.name, 160);
  const email = clean(body.email, 254).toLowerCase();
  const company = clean(body.company, 160);
  const message = clean(body.message, 2000);
  const locale = clean(body.locale, 2);
  const honeypot = clean(body.website, 200);
  if (honeypot || name.length < 2 || !validEmail(email) || message.length < 12 || !['it', 'en'].includes(locale)) {
    return e.json(400, { message: 'Invalid contact request.' });
  }
  const record = new Record(e.app.findCollectionByNameOrId('contacts'));
  record.set('name', name); record.set('email', email); record.set('company', company);
  record.set('message', message); record.set('locale', locale); record.set('source', 'website');
  e.app.save(record);
  return e.json(201, { accepted: true });
}, $apis.bodyLimit(4096));
