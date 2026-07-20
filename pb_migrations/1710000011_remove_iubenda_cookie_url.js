migrate((app) => {
  // Cookie policy is now served by the internal /legal/cookie page.
  // Remove the external Iubenda URL for a single source of truth.
  const col = app.findCollectionByNameOrId('site_text');
  for (const locale of ['it', 'en']) {
    try {
      const rec = app.findFirstRecordByFilter(col.id, `locale='${locale}' && key='cookie.policyUrl'`);
      app.delete(rec);
    } catch (_) {}
  }
}, (app) => {
  // Down: restore the Iubenda URL
  const col = app.findCollectionByNameOrId('site_text');
  const url = 'https://www.iubenda.com/privacy-policy/87151370/cookie-policy';
  for (const locale of ['it', 'en']) {
    app.save(new Record(col, { locale, key: 'cookie.policyUrl', value: url }));
  }
});
