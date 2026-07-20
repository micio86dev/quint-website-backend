migrate((app) => {
  const col = app.findCollectionByNameOrId('site_text');
  const url = 'https://www.iubenda.com/privacy-policy/87151370/cookie-policy';
  for (const locale of ['it', 'en']) {
    app.save(new Record(col, { locale, key: 'cookie.policyUrl', value: url }));
  }
}, (app) => {
  const col = app.findCollectionByNameOrId('site_text');
  for (const locale of ['it', 'en']) {
    try {
      const rec = app.findFirstRecordByFilter(col.id, `locale='${locale}' && key='cookie.policyUrl'`);
      app.delete(rec);
    } catch (_) {}
  }
});
