const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const text = (value, limit) => String(value ?? '').trim().slice(0, limit);

export function normalizeContact(input) {
  return { name: text(input.name, 160), email: text(input.email, 254).toLowerCase(), company: text(input.company, 160), message: text(input.message, 2000), locale: text(input.locale, 2) };
}

export function validateContact(input) {
  if (text(input.website, 200)) return { ok: false, fields: ['website'] };
  const data = normalizeContact(input);
  const fields = [];
  if (data.name.length < 2) fields.push('name');
  if (!emailPattern.test(data.email)) fields.push('email');
  if (data.message.length < 12) fields.push('message');
  if (!['it', 'en'].includes(data.locale)) fields.push('locale');
  return fields.length ? { ok: false, fields } : { ok: true, data };
}
