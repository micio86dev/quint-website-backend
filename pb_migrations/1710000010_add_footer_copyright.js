migrate((app) => {
  const col = app.findCollectionByNameOrId('site_text');
  const values = {
    it: 'Tutti i diritti riservati.',
    en: 'All rights reserved.',
  };
  for (const locale of ['it', 'en']) {
    app.save(new Record(col, { locale, key: 'footer.copyright', value: values[locale] }));
  }
}, (app) => {
  const col = app.findCollectionByNameOrId('site_text');
  for (const locale of ['it', 'en']) {
    try {
      const rec = app.findFirstRecordByFilter(col.id, `locale='${locale}' && key='footer.copyright'`);
      app.delete(rec);
    } catch (_) {}
  }
});
