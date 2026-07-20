migrate((app) => {
  const col = app.findCollectionByNameOrId('site_text');
  const records = [
    { locale: 'it', key: 'cookie.barText', value: 'Utilizziamo solo cookie tecnici necessari al funzionamento del sito. Leggi la nostra' },
    { locale: 'it', key: 'cookie.barLink', value: 'Cookie Policy' },
    { locale: 'it', key: 'cookie.barAccept', value: 'Ho capito' },
    { locale: 'it', key: 'cookie.barLabel', value: 'Informativa cookie' },
    { locale: 'en', key: 'cookie.barText', value: 'We use only technical cookies required for the website to function. Read our' },
    { locale: 'en', key: 'cookie.barLink', value: 'Cookie Policy' },
    { locale: 'en', key: 'cookie.barAccept', value: 'Got it' },
    { locale: 'en', key: 'cookie.barLabel', value: 'Cookie notice' },
  ];
  for (const data of records) {
    app.save(new Record(col, data));
  }
}, (app) => {
  const col = app.findCollectionByNameOrId('site_text');
  const keys = ['cookie.barText', 'cookie.barLink', 'cookie.barAccept', 'cookie.barLabel'];
  for (const locale of ['it', 'en']) {
    for (const key of keys) {
      try {
        const rec = app.findFirstRecordByFilter(col.id, `locale='${locale}' && key='${key}'`);
        app.delete(rec);
      } catch (_) {}
    }
  }
});
