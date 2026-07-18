import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const backendRoot = new URL('..', import.meta.url);

test('applies a forward migration that locks all contacts record APIs', async () => {
  const migration = await readFile(new URL('./pb_migrations/1710000001_lock_contacts_pii.js', backendRoot), 'utf8');

  for (const rule of ['listRule', 'viewRule', 'createRule', 'updateRule', 'deleteRule']) {
    assert.equal([...migration.matchAll(new RegExp(`collection\\.${rule} = null;`, 'g'))].length, 2);
  }
});

test('applies a guest rate limit to public contact submissions', async () => {
  const migration = await readFile(new URL('./pb_migrations/1710000002_rate_limit_contact.js', backendRoot), 'utf8');

  assert.match(migration, /settings\.rateLimits\.enabled = true;/);
  assert.match(migration, /label: 'POST \/api\/quint\/contact'/);
  assert.match(migration, /audience: '@guest'/);
  assert.match(migration, /duration: 60/);
  assert.match(migration, /maxRequests: 5/);
});

test('blocks rollback of the global rate-limit migration explicitly', async () => {
  const migration = await readFile(new URL('./pb_migrations/1710000002_rate_limit_contact.js', backendRoot), 'utf8');

  assert.match(migration, /\}, \(\) => \{\n  throw new Error\('Contact rate-limit migration is irreversible\.'\);\n\}\);/);
});

test('keeps the contact rate-limit rule idempotent', async () => {
  const migration = await readFile(new URL('./pb_migrations/1710000002_rate_limit_contact.js', backendRoot), 'utf8');

  assert.match(migration, /settings\.rateLimits\.rules = settings\.rateLimits\.rules\.filter\(\(rule\) => rule\.label !== 'POST \/api\/quint\/contact' \|\| rule\.audience !== '@guest'\);/);
});

test('limits the public contact route request body to its form payload budget', async () => {
  const hook = await readFile(new URL('./pb_hooks/main.pb.js', backendRoot), 'utf8');

  assert.match(hook, /routerAdd\('POST', '\/api\/quint\/contact',[\s\S]*?\$apis\.bodyLimit\(4096\)\);/);
});

test('keeps contact validation helpers inside the PocketBase route callback', async () => {
  const hook = await readFile(new URL('./pb_hooks/main.pb.js', backendRoot), 'utf8');
  const route = hook.slice(hook.indexOf("routerAdd('POST', '/api/quint/contact'"));

  assert.match(route, /const clean = \(value, max\) => String\(value \|\| ''\)\.trim\(\)\.slice\(0, max\);/);
  assert.match(route, /const validEmail = \(value\) => \/\^\[\^\\s@\]\+@\[\^\\s@\]\+\\\.\[\^\\s@\]\+\$\//);
});

test('keeps fresh contacts migration free of an index on a non-existent created column', async () => {
  const migration = await readFile(new URL('./pb_migrations/1710000000_create_contacts.js', backendRoot), 'utf8');

  assert.doesNotMatch(migration, /idx_contacts_created/);
});
