migrate((app) => {
  const col = app.findCollectionByNameOrId('site_text');

  const records = [
    // IT
    { locale: 'it', key: 'nav.menuOpen',  value: 'Apri menu' },
    { locale: 'it', key: 'nav.menuClose', value: 'Chiudi menu' },
    { locale: 'it', key: 'nav.privacy',   value: 'Privacy Policy' },
    { locale: 'it', key: 'nav.cookie',    value: 'Cookie Policy' },
    { locale: 'it', key: 'nav.terms',     value: 'Termini di utilizzo' },
    { locale: 'it', key: 'nav.legalLabel', value: 'Note legali' },
    // EN
    { locale: 'en', key: 'nav.menuOpen',  value: 'Open menu' },
    { locale: 'en', key: 'nav.menuClose', value: 'Close menu' },
    { locale: 'en', key: 'nav.privacy',   value: 'Privacy Policy' },
    { locale: 'en', key: 'nav.cookie',    value: 'Cookie Policy' },
    { locale: 'en', key: 'nav.terms',     value: 'Terms of Use' },
    { locale: 'en', key: 'nav.legalLabel', value: 'Legal' },
  ];

  for (const data of records) {
    const rec = new Record(col, data);
    app.save(rec);
  }
}, (app) => {
  const col = app.findCollectionByNameOrId('site_text');
  const keys = ['nav.menuOpen', 'nav.menuClose', 'nav.privacy', 'nav.cookie', 'nav.terms', 'nav.legalLabel'];
  for (const locale of ['it', 'en']) {
    for (const key of keys) {
      try {
        const rec = app.findFirstRecordByFilter(col.id, `locale='${locale}' && key='${key}'`);
        app.delete(rec);
      } catch (_) {}
    }
  }
});
