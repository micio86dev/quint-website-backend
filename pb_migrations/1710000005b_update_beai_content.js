migrate((app) => {
  // ---------------------------------------------------------------------------
  // Helper: update a site_text record value by locale + key
  // ---------------------------------------------------------------------------
  function updateSiteText(locale, key, value) {
    try {
      const record = app.findFirstRecordByFilter(
        'site_text',
        `locale = '${locale}' && key = '${key}'`
      );
      record.set('value', value);
      app.save(record);
    } catch (e) {
      // Record may not exist — skip silently
    }
  }

  // ---------------------------------------------------------------------------
  // IT hero + product + finalCta updates
  // ---------------------------------------------------------------------------
  updateSiteText('it', 'home.hero.eyebrow', 'BEAI — La Piattaforma HR Intelligente');
  updateSiteText('it', 'home.hero.title', 'Colloqui AI. Decisioni più giuste.');
  updateSiteText('it', 'home.hero.body', 'BEAI automatizza la selezione del personale con avatar AI, scoring standardizzato e analisi comportamentale. Un processo HR più rapido, equo e misurabile.');
  updateSiteText('it', 'home.hero.platformLabel', 'BEAI');
  updateSiteText('it', 'home.hero.platformTitle', 'Intelligence dei Colloqui');
  updateSiteText('it', 'home.hero.platformDescription', 'Vista in tempo reale sull\'intera pipeline di selezione.');
  updateSiteText('it', 'home.hero.platformStatus', 'Pipeline attiva');
  updateSiteText('it', 'home.hero.assurance', 'Progettata per team HR che non vogliono perdere il candidato giusto.');
  updateSiteText('it', 'home.product.eyebrow', 'Il prodotto di punta');
  updateSiteText('it', 'home.product.title', 'BEAI: selezione più intelligente, decisioni più sicure.');
  updateSiteText('it', 'home.product.body', 'Avatar AI, scoring automatizzato e analisi comportamentale in un unico sistema — per trasformare ogni colloquio in un dato misurabile.');
  updateSiteText('it', 'home.finalCta.eyebrow', 'Il candidato giusto è lì fuori');
  updateSiteText('it', 'home.finalCta.title', 'Cambia il modo in cui selezioni.');
  updateSiteText('it', 'home.finalCta.body', 'Parla con il team Quint: ti mostreremo come BEAI può rendere il tuo processo HR più veloce e più affidabile.');
  updateSiteText('it', 'home.finalCta.action', 'Parla con Quint');

  // ---------------------------------------------------------------------------
  // EN hero + product + finalCta updates
  // ---------------------------------------------------------------------------
  updateSiteText('en', 'home.hero.eyebrow', 'BEAI — Intelligent HR Platform');
  updateSiteText('en', 'home.hero.title', 'AI Interviews. Better decisions.');
  updateSiteText('en', 'home.hero.body', 'BEAI automates candidate screening with AI avatars, standardised scoring and behavioural analysis — for an HR process that\'s faster, fairer and measurable.');
  updateSiteText('en', 'home.hero.platformLabel', 'BEAI');
  updateSiteText('en', 'home.hero.platformTitle', 'Interview Intelligence');
  updateSiteText('en', 'home.hero.platformDescription', 'Real-time view of your entire selection pipeline.');
  updateSiteText('en', 'home.hero.platformStatus', 'Live pipeline');
  updateSiteText('en', 'home.hero.assurance', 'Designed for HR teams who cannot afford to miss the right candidate.');
  updateSiteText('en', 'home.product.eyebrow', 'Flagship product');
  updateSiteText('en', 'home.product.title', 'BEAI: smarter screening, more confident decisions.');
  updateSiteText('en', 'home.product.body', 'AI avatars, automated scoring and behavioural analysis in one system — turning every interview into a measurable data point.');
  updateSiteText('en', 'home.finalCta.eyebrow', 'The right candidate is out there');
  updateSiteText('en', 'home.finalCta.title', 'Change how you hire.');
  updateSiteText('en', 'home.finalCta.body', 'Talk to the Quint team: we\'ll show you how BEAI can make your HR process faster and more reliable.');
  updateSiteText('en', 'home.finalCta.action', 'Talk to Quint');

  // ---------------------------------------------------------------------------
  // platform_signals: delete all and re-insert BEAI values
  // ---------------------------------------------------------------------------
  const sigCol = app.findCollectionByNameOrId('platform_signals');
  const existingSignals = app.findAllRecords('platform_signals');
  for (const r of existingSignals) {
    app.delete(r);
  }

  const newSignals = [
    { locale: 'it', label: 'Colloqui', value: '1.247', sort_order: 1 },
    { locale: 'it', label: 'Candidati', value: '847', sort_order: 2 },
    { locale: 'it', label: 'Match', value: '94%', sort_order: 3 },
    { locale: 'en', label: 'Interviews', value: '1,247', sort_order: 1 },
    { locale: 'en', label: 'Candidates', value: '847', sort_order: 2 },
    { locale: 'en', label: 'Match', value: '94%', sort_order: 3 },
  ];
  for (const data of newSignals) {
    app.save(new Record(sigCol, data));
  }

  // ---------------------------------------------------------------------------
  // statistics: delete all and re-insert BEAI values
  // ---------------------------------------------------------------------------
  const existingStats = app.findAllRecords('statistics');
  for (const r of existingStats) {
    app.delete(r);
  }
  const statCol = app.findCollectionByNameOrId('statistics');
  const newStats = [
    { locale: 'it', value: '94%', label: 'tasso di match candidato-ruolo', sort_order: 1 },
    { locale: 'it', value: '3×', label: 'più veloce del processo tradizionale', sort_order: 2 },
    { locale: 'it', value: '100%', label: 'colloqui standardizzati e misurabili', sort_order: 3 },
    { locale: 'en', value: '94%', label: 'candidate-to-role match rate', sort_order: 1 },
    { locale: 'en', value: '3×', label: 'faster than the traditional process', sort_order: 2 },
    { locale: 'en', value: '100%', label: 'standardised and measurable interviews', sort_order: 3 },
  ];
  for (const data of newStats) {
    app.save(new Record(statCol, data));
  }

  // ---------------------------------------------------------------------------
  // Add BEAI as a product
  // ---------------------------------------------------------------------------
  const prodCol = app.findCollectionByNameOrId('products');
  // IT
  app.save(new Record(prodCol, {
    slug: 'beai',
    family: 'research',
    locale: 'it',
    title: 'BEAI',
    summary: 'Selezione del personale con avatar AI e scoring standardizzato.',
    benefit: 'Riduce il time-to-hire e migliora la qualità delle decisioni HR.',
    sort_order: 0,
  }));
  // EN
  app.save(new Record(prodCol, {
    slug: 'beai',
    family: 'research',
    locale: 'en',
    title: 'BEAI',
    summary: 'Candidate screening with AI avatars and standardised scoring.',
    benefit: 'Reduces time-to-hire and improves the quality of HR decisions.',
    sort_order: 0,
  }));
}, (app) => {
  throw new Error('Migration 1710000005 is irreversible. Down migration is not supported.');
});
