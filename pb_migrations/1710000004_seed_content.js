migrate((app) => {
  // ---------------------------------------------------------------------------
  // site_text
  // ---------------------------------------------------------------------------
  const stCol = app.findCollectionByNameOrId('site_text');

  const siteTextRecords = [
    // IT
    { locale: 'it', key: 'languageName', value: 'English' },
    { locale: 'it', key: 'brandStatement', value: 'Quint trasforma la complessità scientifica in decisioni affidabili.' },
    { locale: 'it', key: 'nav.home', value: 'Home' },
    { locale: 'it', key: 'nav.products', value: 'Prodotti' },
    { locale: 'it', key: 'nav.contact', value: 'Contatti' },
    { locale: 'it', key: 'nav.brandHome', value: 'Pagina iniziale Quint' },
    { locale: 'it', key: 'nav.primaryLabel', value: 'Navigazione principale' },
    { locale: 'it', key: 'skipLink', value: 'Vai al contenuto' },
    { locale: 'it', key: 'cta', value: 'Parla con Quint' },
    { locale: 'it', key: 'secondaryCta', value: 'Scopri le soluzioni' },
    { locale: 'it', key: 'learnMore', value: 'Scopri di più' },
    { locale: 'it', key: 'hero.eyebrow', value: 'Soluzioni scientifiche affidabili' },
    { locale: 'it', key: 'hero.title', value: 'Tecnologie che rendono affidabili le decisioni' },
    { locale: 'it', key: 'hero.body', value: 'Portiamo diagnostica, ricerca e controllo qualità più vicini alle persone che devono decidere.' },
    { locale: 'it', key: 'trusted', value: 'Dalla prima valutazione al supporto post-vendita.' },
    { locale: 'it', key: 'footer', value: 'Tecnologie scientifiche per decisioni migliori.' },
    { locale: 'it', key: 'home.hero.eyebrow', value: 'Piattaforma scientifica Quint' },
    { locale: 'it', key: 'home.hero.title', value: 'Dati scientifici più chiari. Decisioni più sicure.' },
    { locale: 'it', key: 'home.hero.body', value: 'Un ecosistema di tecnologie per rendere diagnostica, ricerca e qualità più connesse, tracciabili e pronte all\'azione.' },
    { locale: 'it', key: 'home.hero.platformLabel', value: 'Piattaforma Quint' },
    { locale: 'it', key: 'home.hero.platformTitle', value: 'Intelligenza dei flussi di lavoro' },
    { locale: 'it', key: 'home.hero.platformDescription', value: 'Una vista operativa pensata per i team scientifici.' },
    { locale: 'it', key: 'home.hero.platformStatus', value: 'Operatività sotto controllo' },
    { locale: 'it', key: 'home.hero.assurance', value: 'Progettata per team che non possono lasciare spazio all\'incertezza.' },
    { locale: 'it', key: 'home.product.eyebrow', value: 'Soluzioni Quint' },
    { locale: 'it', key: 'home.product.title', value: 'Una piattaforma che accompagna ogni passaggio critico.' },
    { locale: 'it', key: 'home.product.body', value: 'Scopri tecnologie progettate per la continuità operativa e la qualità del dato.' },
    { locale: 'it', key: 'home.product.allProducts', value: 'Esplora tutte le soluzioni' },
    { locale: 'it', key: 'home.capabilities.eyebrow', value: 'Dall\'evidenza all\'azione' },
    { locale: 'it', key: 'home.capabilities.title', value: 'La complessità resta nel sistema. Il controllo torna al team.' },
    { locale: 'it', key: 'home.capabilities.body', value: 'Quint unisce strumenti e flussi di lavoro per rendere ogni decisione più leggibile, verificabile e tempestiva.' },
    { locale: 'it', key: 'home.faqHeading.eyebrow', value: 'Quint, in breve' },
    { locale: 'it', key: 'home.faqHeading.title', value: 'Le domande più frequenti' },
    { locale: 'it', key: 'home.finalCta.eyebrow', value: 'Il prossimo segnale conta' },
    { locale: 'it', key: 'home.finalCta.title', value: 'Costruiamo un flusso di lavoro più sicuro.' },
    { locale: 'it', key: 'home.finalCta.body', value: 'Parliamo del tuo contesto scientifico e delle decisioni che vuoi rendere più solide.' },
    { locale: 'it', key: 'home.finalCta.action', value: 'Parla con Quint' },
    { locale: 'it', key: 'home.finalCta.bgColor', value: '#771AAF' },
    { locale: 'it', key: 'home.finalCta.textColor', value: '#FFFFFF' },
    { locale: 'it', key: 'products.pageTitle', value: 'Tecnologia con una direzione chiara' },
    { locale: 'it', key: 'products.pageIntro', value: 'Esplora le soluzioni Quint per diagnostica, ricerca e qualità.' },
    { locale: 'it', key: 'families.diagnostics.title', value: 'Diagnostica' },
    { locale: 'it', key: 'families.diagnostics.description', value: 'Strumenti e test per risultati rapidi, tracciabili e utili.' },
    { locale: 'it', key: 'families.research.title', value: 'Ricerca' },
    { locale: 'it', key: 'families.research.description', value: 'Tecnologie che accelerano la scoperta senza sacrificare la qualità.' },
    { locale: 'it', key: 'families.quality.title', value: 'Qualità' },
    { locale: 'it', key: 'families.quality.description', value: 'Controllo dei processi per standard sostenibili e ripetibili.' },
    { locale: 'it', key: 'contact.title', value: 'Parliamo del tuo progetto' },
    { locale: 'it', key: 'contact.intro', value: 'Raccontaci l\'obiettivo: il team Quint ti risponderà con il percorso più adatto.' },
    { locale: 'it', key: 'contact.firstName', value: 'Nome' },
    { locale: 'it', key: 'contact.lastName', value: 'Cognome' },
    { locale: 'it', key: 'contact.firstNamePlaceholder', value: 'es. Mario' },
    { locale: 'it', key: 'contact.lastNamePlaceholder', value: 'es. Rossi' },
    { locale: 'it', key: 'contact.email', value: 'Email di lavoro' },
    { locale: 'it', key: 'contact.emailPlaceholder', value: 'mario@azienda.it' },
    { locale: 'it', key: 'contact.company', value: 'Azienda' },
    { locale: 'it', key: 'contact.companyPlaceholder', value: 'Nome azienda' },
    { locale: 'it', key: 'contact.message', value: 'Messaggio' },
    { locale: 'it', key: 'contact.messagePlaceholder', value: 'Descrivi il tuo progetto o la sfida che stai affrontando...' },
    { locale: 'it', key: 'contact.messageCounter', value: '/ 2000 caratteri' },
    { locale: 'it', key: 'contact.send', value: 'Invia richiesta' },
    { locale: 'it', key: 'contact.success', value: 'Grazie. La tua richiesta è stata inviata.' },
    { locale: 'it', key: 'contact.failure', value: 'Non è stato possibile inviare la richiesta. Riprova più tardi.' },
    { locale: 'it', key: 'contact.errorFirstName', value: 'Inserisci il tuo nome.' },
    { locale: 'it', key: 'contact.errorLastName', value: 'Inserisci il tuo cognome.' },
    { locale: 'it', key: 'contact.errorEmail', value: 'Inserisci un\'email valida.' },
    { locale: 'it', key: 'contact.errorMessage', value: 'Il messaggio deve contenere almeno 12 caratteri.' },
    // EN
    { locale: 'en', key: 'languageName', value: 'Italiano' },
    { locale: 'en', key: 'brandStatement', value: 'Quint turns scientific complexity into reliable decisions.' },
    { locale: 'en', key: 'nav.home', value: 'Home' },
    { locale: 'en', key: 'nav.products', value: 'Products' },
    { locale: 'en', key: 'nav.contact', value: 'Contact' },
    { locale: 'en', key: 'nav.brandHome', value: 'Quint home page' },
    { locale: 'en', key: 'nav.primaryLabel', value: 'Primary navigation' },
    { locale: 'en', key: 'skipLink', value: 'Skip to content' },
    { locale: 'en', key: 'cta', value: 'Talk to Quint' },
    { locale: 'en', key: 'secondaryCta', value: 'Explore solutions' },
    { locale: 'en', key: 'learnMore', value: 'Learn more' },
    { locale: 'en', key: 'hero.eyebrow', value: 'Reliable scientific solutions' },
    { locale: 'en', key: 'hero.title', value: 'Technology that makes decisions dependable' },
    { locale: 'en', key: 'hero.body', value: 'We bring diagnostics, research and quality control closer to the people who need to decide.' },
    { locale: 'en', key: 'trusted', value: 'From first evaluation to after-sales support.' },
    { locale: 'en', key: 'footer', value: 'Scientific technology for better decisions.' },
    { locale: 'en', key: 'home.hero.eyebrow', value: 'Quint scientific platform' },
    { locale: 'en', key: 'home.hero.title', value: 'Clearer scientific data. Safer decisions.' },
    { locale: 'en', key: 'home.hero.body', value: 'An ecosystem of technologies that makes diagnostics, research and quality more connected, traceable and ready for action.' },
    { locale: 'en', key: 'home.hero.platformLabel', value: 'Quint platform' },
    { locale: 'en', key: 'home.hero.platformTitle', value: 'Workflow intelligence' },
    { locale: 'en', key: 'home.hero.platformDescription', value: 'An operational view built for scientific teams.' },
    { locale: 'en', key: 'home.hero.platformStatus', value: 'Operations in control' },
    { locale: 'en', key: 'home.hero.assurance', value: 'Designed for teams that cannot leave room for uncertainty.' },
    { locale: 'en', key: 'home.product.eyebrow', value: 'Quint solutions' },
    { locale: 'en', key: 'home.product.title', value: 'One platform for every critical step.' },
    { locale: 'en', key: 'home.product.body', value: 'Explore technologies built for operational continuity and data quality.' },
    { locale: 'en', key: 'home.product.allProducts', value: 'Explore all solutions' },
    { locale: 'en', key: 'home.capabilities.eyebrow', value: 'From evidence to action' },
    { locale: 'en', key: 'home.capabilities.title', value: 'Complexity stays in the system. Control returns to the team.' },
    { locale: 'en', key: 'home.capabilities.body', value: 'Quint combines instruments and workflows to make every decision easier to understand, verify and act on.' },
    { locale: 'en', key: 'home.faqHeading.eyebrow', value: 'Quint, at a glance' },
    { locale: 'en', key: 'home.faqHeading.title', value: 'Frequently asked questions' },
    { locale: 'en', key: 'home.finalCta.eyebrow', value: 'The next signal matters' },
    { locale: 'en', key: 'home.finalCta.title', value: 'Build a safer workflow.' },
    { locale: 'en', key: 'home.finalCta.body', value: 'Tell us about your scientific context and the decisions you want to make more dependable.' },
    { locale: 'en', key: 'home.finalCta.action', value: 'Talk to Quint' },
    { locale: 'en', key: 'home.finalCta.bgColor', value: '#771AAF' },
    { locale: 'en', key: 'home.finalCta.textColor', value: '#FFFFFF' },
    { locale: 'en', key: 'products.pageTitle', value: 'Technology with a clear direction' },
    { locale: 'en', key: 'products.pageIntro', value: 'Explore Quint solutions for diagnostics, research and quality.' },
    { locale: 'en', key: 'families.diagnostics.title', value: 'Diagnostics' },
    { locale: 'en', key: 'families.diagnostics.description', value: 'Instruments and tests for fast, traceable and useful results.' },
    { locale: 'en', key: 'families.research.title', value: 'Research' },
    { locale: 'en', key: 'families.research.description', value: 'Technology that accelerates discovery without sacrificing quality.' },
    { locale: 'en', key: 'families.quality.title', value: 'Quality' },
    { locale: 'en', key: 'families.quality.description', value: 'Process control for sustainable, repeatable standards.' },
    { locale: 'en', key: 'contact.title', value: 'Let\'s discuss your project' },
    { locale: 'en', key: 'contact.intro', value: 'Tell us your goal and the Quint team will respond with the right path.' },
    { locale: 'en', key: 'contact.firstName', value: 'First name' },
    { locale: 'en', key: 'contact.lastName', value: 'Last name' },
    { locale: 'en', key: 'contact.firstNamePlaceholder', value: 'e.g. Mario' },
    { locale: 'en', key: 'contact.lastNamePlaceholder', value: 'e.g. Smith' },
    { locale: 'en', key: 'contact.email', value: 'Work email' },
    { locale: 'en', key: 'contact.emailPlaceholder', value: 'mario@company.com' },
    { locale: 'en', key: 'contact.company', value: 'Company' },
    { locale: 'en', key: 'contact.companyPlaceholder', value: 'Company name' },
    { locale: 'en', key: 'contact.message', value: 'Message' },
    { locale: 'en', key: 'contact.messagePlaceholder', value: 'Describe your project or the challenge you\'re facing...' },
    { locale: 'en', key: 'contact.messageCounter', value: '/ 2000 characters' },
    { locale: 'en', key: 'contact.send', value: 'Send request' },
    { locale: 'en', key: 'contact.success', value: 'Thank you. Your request has been sent.' },
    { locale: 'en', key: 'contact.failure', value: 'We could not send your request. Please try again later.' },
    { locale: 'en', key: 'contact.errorFirstName', value: 'Please enter your first name.' },
    { locale: 'en', key: 'contact.errorLastName', value: 'Please enter your last name.' },
    { locale: 'en', key: 'contact.errorEmail', value: 'Please enter a valid email address.' },
    { locale: 'en', key: 'contact.errorMessage', value: 'Your message must contain at least 12 characters.' },
  ];

  for (const data of siteTextRecords) {
    app.save(new Record(stCol, data));
  }

  // ---------------------------------------------------------------------------
  // products
  // ---------------------------------------------------------------------------
  const prCol = app.findCollectionByNameOrId('products');

  const productRecords = [
    // IT
    { slug: 'rapid-diagnostics', family: 'diagnostics', locale: 'it', title: 'Diagnostica rapida', summary: 'Test rapidi per decisioni tempestive.', benefit: 'Riduce il tempo tra campione e decisione.', sort_order: 1 },
    { slug: 'molecular-diagnostics', family: 'diagnostics', locale: 'it', title: 'Diagnostica molecolare', summary: 'Flussi di lavoro affidabili per analisi molecolari.', benefit: 'Aumenta confidenza e ripetibilità.', sort_order: 2 },
    { slug: 'clinical-analyzers', family: 'diagnostics', locale: 'it', title: 'Analizzatori clinici', summary: 'Automazione progettata per il laboratorio moderno.', benefit: 'Supporta continuità operativa e tracciabilità.', sort_order: 3 },
    { slug: 'cell-analysis', family: 'research', locale: 'it', title: 'Analisi cellulare', summary: 'Strumenti per osservare processi biologici complessi.', benefit: 'Rende i dati cellulari più leggibili.', sort_order: 4 },
    { slug: 'sample-preparation', family: 'research', locale: 'it', title: 'Preparazione campioni', summary: 'Preparazione coerente fin dal primo passaggio.', benefit: 'Protegge la qualità dell\'intero flusso di lavoro.', sort_order: 5 },
    { slug: 'research-imaging', family: 'research', locale: 'it', title: 'Imaging per la ricerca', summary: 'Immagini che aiutano a vedere oltre il dato.', benefit: 'Collega osservazione e decisione.', sort_order: 6 },
    { slug: 'process-monitoring', family: 'quality', locale: 'it', title: 'Monitoraggio di processo', summary: 'Misurazioni chiare per processi controllati.', benefit: 'Anticipa le deviazioni critiche.', sort_order: 7 },
    { slug: 'quality-control', family: 'quality', locale: 'it', title: 'Controllo qualità', summary: 'Strumenti per standard solidi e verificabili.', benefit: 'Rende la conformità parte del processo.', sort_order: 8 },
    // EN
    { slug: 'rapid-diagnostics', family: 'diagnostics', locale: 'en', title: 'Rapid diagnostics', summary: 'Fast tests for timely decisions.', benefit: 'Reduces the time between sample and decision.', sort_order: 1 },
    { slug: 'molecular-diagnostics', family: 'diagnostics', locale: 'en', title: 'Molecular diagnostics', summary: 'Reliable workflows for molecular analysis.', benefit: 'Builds confidence and repeatability.', sort_order: 2 },
    { slug: 'clinical-analyzers', family: 'diagnostics', locale: 'en', title: 'Clinical analyzers', summary: 'Automation designed for the modern laboratory.', benefit: 'Supports operational continuity and traceability.', sort_order: 3 },
    { slug: 'cell-analysis', family: 'research', locale: 'en', title: 'Cell analysis', summary: 'Tools for observing complex biological processes.', benefit: 'Makes cellular data easier to understand.', sort_order: 4 },
    { slug: 'sample-preparation', family: 'research', locale: 'en', title: 'Sample preparation', summary: 'Consistent preparation from the very first step.', benefit: 'Protects quality across the workflow.', sort_order: 5 },
    { slug: 'research-imaging', family: 'research', locale: 'en', title: 'Research imaging', summary: 'Images that help teams see beyond the data.', benefit: 'Connects observation and decision.', sort_order: 6 },
    { slug: 'process-monitoring', family: 'quality', locale: 'en', title: 'Process monitoring', summary: 'Clear measurements for controlled processes.', benefit: 'Anticipates critical deviations.', sort_order: 7 },
    { slug: 'quality-control', family: 'quality', locale: 'en', title: 'Quality control', summary: 'Tools for robust, verifiable standards.', benefit: 'Makes compliance part of the process.', sort_order: 8 },
  ];

  for (const data of productRecords) {
    app.save(new Record(prCol, data));
  }

  // ---------------------------------------------------------------------------
  // faqs
  // ---------------------------------------------------------------------------
  const faqCol = app.findCollectionByNameOrId('faqs');

  const faqRecords = [
    { locale: 'it', question: 'Per quali team è pensata Quint?', answer: 'Per laboratori e organizzazioni che lavorano tra diagnostica, ricerca e qualità e vogliono un processo più chiaro e affidabile.', sort_order: 1 },
    { locale: 'it', question: 'Quint può adattarsi al nostro flusso di lavoro?', answer: 'Ogni soluzione parte dal contesto operativo del team, per rendere l\'adozione concreta senza aggiungere complessità inutile.', sort_order: 2 },
    { locale: 'it', question: 'Come iniziamo a valutare una soluzione?', answer: 'Condividi il tuo obiettivo con il team Quint: identificheremo insieme il percorso e le tecnologie più adatte.', sort_order: 3 },
    { locale: 'en', question: 'Who is Quint built for?', answer: 'For laboratories and organisations working across diagnostics, research and quality that need a clearer, more reliable process.', sort_order: 1 },
    { locale: 'en', question: 'Can Quint adapt to our workflow?', answer: 'Every solution starts with the team\'s operational context, so adoption is practical without adding unnecessary complexity.', sort_order: 2 },
    { locale: 'en', question: 'How do we begin evaluating a solution?', answer: 'Share your goal with the Quint team and we will identify the right path and technologies together.', sort_order: 3 },
  ];

  for (const data of faqRecords) {
    app.save(new Record(faqCol, data));
  }

  // ---------------------------------------------------------------------------
  // capabilities
  // ---------------------------------------------------------------------------
  const capCol = app.findCollectionByNameOrId('capabilities');

  const capabilityRecords = [
    { locale: 'it', number_label: '01', title: 'Flussi di lavoro connessi', body: 'Collega le fasi operative senza interrompere il contesto.', sort_order: 1 },
    { locale: 'it', number_label: '02', title: 'Segnali prioritari', body: 'Porta le informazioni rilevanti davanti alle persone giuste.', sort_order: 2 },
    { locale: 'it', number_label: '03', title: 'Qualità verificabile', body: 'Trasforma standard e tracciabilità in una pratica quotidiana.', sort_order: 3 },
    { locale: 'en', number_label: '01', title: 'Connected workflows', body: 'Link operational phases without losing the context around them.', sort_order: 1 },
    { locale: 'en', number_label: '02', title: 'Prioritised signals', body: 'Bring the information that matters to the people who need it.', sort_order: 2 },
    { locale: 'en', number_label: '03', title: 'Verifiable quality', body: 'Turn standards and traceability into a daily operating practice.', sort_order: 3 },
  ];

  for (const data of capabilityRecords) {
    app.save(new Record(capCol, data));
  }

  // ---------------------------------------------------------------------------
  // statistics
  // ---------------------------------------------------------------------------
  const statCol = app.findCollectionByNameOrId('statistics');

  const statisticsRecords = [
    { locale: 'it', value: '3', label: 'aree scientifiche connesse', sort_order: 1 },
    { locale: 'it', value: '8', label: 'soluzioni nel catalogo Quint', sort_order: 2 },
    { locale: 'it', value: '1', label: 'visione operativa condivisa', sort_order: 3 },
    { locale: 'en', value: '3', label: 'connected scientific areas', sort_order: 1 },
    { locale: 'en', value: '8', label: 'solutions in the Quint catalogue', sort_order: 2 },
    { locale: 'en', value: '1', label: 'shared operational view', sort_order: 3 },
  ];

  for (const data of statisticsRecords) {
    app.save(new Record(statCol, data));
  }

  // ---------------------------------------------------------------------------
  // platform_signals
  // ---------------------------------------------------------------------------
  const psCol = app.findCollectionByNameOrId('platform_signals');

  const platformSignalRecords = [
    { locale: 'it', label: 'Campioni', value: '128', sort_order: 1 },
    { locale: 'it', label: 'Flussi', value: '24', sort_order: 2 },
    { locale: 'it', label: 'Qualità', value: '99,8%', sort_order: 3 },
    { locale: 'en', label: 'Samples', value: '128', sort_order: 1 },
    { locale: 'en', label: 'Workflows', value: '24', sort_order: 2 },
    { locale: 'en', label: 'Quality', value: '99.8%', sort_order: 3 },
  ];

  for (const data of platformSignalRecords) {
    app.save(new Record(psCol, data));
  }
}, (app) => {
  const collections = ['platform_signals', 'statistics', 'capabilities', 'faqs', 'products', 'site_text'];
  for (const name of collections) {
    const col = app.findCollectionByNameOrId(name);
    const records = app.findAllRecords(name);
    for (const record of records) {
      app.delete(record);
    }
  }
});
