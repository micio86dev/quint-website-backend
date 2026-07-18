migrate((app) => {
  const settings = app.settings();
  settings.rateLimits.enabled = true;
  settings.rateLimits.rules = settings.rateLimits.rules.filter((rule) => rule.label !== 'POST /api/quint/contact' || rule.audience !== '@guest');
  settings.rateLimits.rules.unshift({
    label: 'POST /api/quint/contact',
    audience: '@guest',
    duration: 60,
    maxRequests: 5
  });
  app.save(settings);
}, () => {
  throw new Error('Contact rate-limit migration is irreversible.');
});
