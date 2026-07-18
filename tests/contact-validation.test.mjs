import assert from 'node:assert/strict';
import test from 'node:test';
import { normalizeContact, validateContact } from '../src/contact-validation.mjs';

const request = { name: ' Ada Lovelace ', email: ' ADA@EXAMPLE.COM ', company: '  Quint  ', message: ' I would like a diagnostic consultation. ', locale: 'en', website: '' };
test('normalizes a valid contact request', () => assert.deepEqual(normalizeContact(request), { name: 'Ada Lovelace', email: 'ada@example.com', company: 'Quint', message: 'I would like a diagnostic consultation.', locale: 'en' }));
test('accepts a valid business request', () => assert.deepEqual(validateContact(request), { ok: true, data: normalizeContact(request) }));
test('rejects malformed requests without echoing sensitive content', () => {
  const result = validateContact({ ...request, name: 'A', email: 'bad', message: 'short' });
  assert.equal(result.ok, false); assert.deepEqual(result.fields, ['name', 'email', 'message']);
});
test('rejects bots and unknown locales', () => {
  assert.deepEqual(validateContact({ ...request, website: 'spam' }), { ok: false, fields: ['website'] });
  assert.equal(validateContact({ ...request, locale: 'de' }).ok, false);
});
