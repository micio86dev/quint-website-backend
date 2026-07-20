migrate((app) => {
  const col = app.findCollectionByNameOrId('products');

  // Detailed, plain-language descriptions so each product page explains
  // clearly what the tool does, how it works and its key capabilities.
  const descriptions = {
    beai: {
      it: `<p>BEAI è la piattaforma di Quint dedicata alle Risorse Umane: automatizza e accelera la selezione del personale conducendo colloqui strutturati tramite <strong>avatar AI conversazionali</strong>.</p>
<h2>Cosa fa</h2>
<p>Ogni candidato sostiene un colloquio con un avatar AI disponibile 24 ore su 24 e in più lingue, ricevendo la stessa esperienza equa e senza attese. Le risposte vengono valutate da un sistema di <strong>scoring standardizzato</strong> che misura competenze tecniche, soft skill e coerenza su una scala oggettiva, eliminando il bias del singolo valutatore. L'<strong>analisi comportamentale</strong> integrata osserva tono, linguaggio e pattern di risposta per fornire segnali aggiuntivi al team HR.</p>
<h3>Funzionalità principali</h3>
<ul>
<li>Colloqui automatizzati con avatar AI, 24/7 e multilingua</li>
<li>Scoring standardizzato con punteggi confrontabili tra candidati</li>
<li>Analisi comportamentale e dei pattern di risposta</li>
<li>Pipeline di selezione con ranking automatico dei profili</li>
<li>Report oggettivi e tracciabili per ogni colloquio</li>
<li>Integrazione con i flussi HR e gli ATS esistenti</li>
</ul>
<p>Il risultato è un processo HR più rapido, equo e misurabile: i recruiter dedicano il tempo solo ai profili più promettenti, riducendo il time-to-hire e migliorando la qualità delle decisioni.</p>`,
      en: `<p>BEAI is Quint's platform for Human Resources: it automates and accelerates hiring by running structured interviews through <strong>conversational AI avatars</strong>.</p>
<h2>What it does</h2>
<p>Every candidate takes an interview with an AI avatar available 24/7 and in multiple languages, getting the same fair, wait-free experience. Answers are evaluated by a <strong>standardized scoring</strong> system that measures technical skills, soft skills and consistency on an objective scale, removing individual reviewer bias. Built-in <strong>behavioral analysis</strong> reads tone, language and response patterns to give the HR team extra signal.</p>
<h3>Key capabilities</h3>
<ul>
<li>Automated interviews with AI avatars, 24/7 and multilingual</li>
<li>Standardized scoring with comparable results across candidates</li>
<li>Behavioral and response-pattern analysis</li>
<li>Selection pipeline with automatic candidate ranking</li>
<li>Objective, auditable reports for every interview</li>
<li>Integration with existing HR flows and ATS</li>
</ul>
<p>The outcome is a faster, fairer and measurable HR process: recruiters spend time only on the most promising profiles, cutting time-to-hire and improving decision quality.</p>`,
    },
    'rapid-diagnostics': {
      it: `<p>Diagnostica rapida raccoglie i test point-of-care progettati per ridurre al minimo il tempo tra il prelievo del campione e una decisione clinica.</p>
<h2>Cosa fa</h2>
<p>Gli strumenti eseguono analisi immediate direttamente al letto del paziente o in reparto, restituendo risultati affidabili in pochi minuti senza dover inviare il campione a un laboratorio centrale. Ogni test è calibrato per garantire ripetibilità e una lettura chiara anche da parte di personale non specializzato.</p>
<h3>Funzionalità principali</h3>
<ul>
<li>Risultati in pochi minuti, direttamente sul punto di cura</li>
<li>Protocolli guidati per ridurre gli errori operatore</li>
<li>Tracciabilità completa del campione e del risultato</li>
<li>Connettività con i sistemi informativi ospedalieri</li>
</ul>
<p>Il beneficio è una diagnosi più tempestiva, che accorcia i tempi di attesa e supporta decisioni cliniche immediate.</p>`,
      en: `<p>Rapid Diagnostics groups the point-of-care tests designed to minimize the time between sample collection and a clinical decision.</p>
<h2>What it does</h2>
<p>The instruments run immediate analyses right at the bedside or in the ward, returning reliable results in minutes without sending the sample to a central lab. Each test is calibrated for repeatability and a clear readout, even for non-specialist staff.</p>
<h3>Key capabilities</h3>
<ul>
<li>Results in minutes, directly at the point of care</li>
<li>Guided protocols that reduce operator error</li>
<li>Full sample-to-result traceability</li>
<li>Connectivity with hospital information systems</li>
</ul>
<p>The benefit is more timely diagnosis that shortens waiting times and supports immediate clinical decisions.</p>`,
    },
    'molecular-diagnostics': {
      it: `<p>Diagnostica molecolare comprende i sistemi per l'analisi degli acidi nucleici (DNA/RNA), pensati per identificare patogeni e marcatori genetici con elevata specificità.</p>
<h2>Cosa fa</h2>
<p>Le piattaforme automatizzano estrazione, amplificazione e rilevazione in un flusso chiuso, riducendo la manipolazione manuale e il rischio di contaminazione. I protocolli validati assicurano risultati ripetibili tra operatori e sedi diverse.</p>
<h3>Funzionalità principali</h3>
<ul>
<li>Flusso automatizzato dall'estrazione al referto</li>
<li>Alta sensibilità e specificità sui target molecolari</li>
<li>Pannelli configurabili per patologie diverse</li>
<li>Controlli interni di qualità su ogni corsa</li>
</ul>
<p>Il risultato è maggiore confidenza diagnostica e ripetibilità nel tempo.</p>`,
      en: `<p>Molecular Diagnostics covers the systems for nucleic acid (DNA/RNA) analysis, built to identify pathogens and genetic markers with high specificity.</p>
<h2>What it does</h2>
<p>The platforms automate extraction, amplification and detection in a closed workflow, reducing manual handling and contamination risk. Validated protocols ensure repeatable results across operators and sites.</p>
<h3>Key capabilities</h3>
<ul>
<li>Automated flow from extraction to report</li>
<li>High sensitivity and specificity on molecular targets</li>
<li>Configurable panels for different conditions</li>
<li>Internal quality controls on every run</li>
</ul>
<p>The outcome is greater diagnostic confidence and repeatability over time.</p>`,
    },
    'clinical-analyzers': {
      it: `<p>Analizzatori clinici sono i sistemi automatizzati per l'analisi di routine di sangue, siero e altri fluidi biologici nel laboratorio moderno.</p>
<h2>Cosa fa</h2>
<p>Gestiscono grandi volumi di campioni con caricamento continuo, calibrazione automatica e gestione intelligente delle priorità (urgenze). L'automazione riduce l'intervento manuale e mantiene la continuità operativa anche nei picchi di lavoro.</p>
<h3>Funzionalità principali</h3>
<ul>
<li>Elevata produttività con caricamento continuo dei campioni</li>
<li>Calibrazione e controlli qualità automatizzati</li>
<li>Gestione delle urgenze senza interrompere il flusso</li>
<li>Tracciabilità completa e integrazione con il LIS</li>
</ul>
<p>Il beneficio è continuità operativa, tracciabilità e riduzione del carico manuale.</p>`,
      en: `<p>Clinical Analyzers are the automated systems for routine analysis of blood, serum and other biological fluids in the modern lab.</p>
<h2>What it does</h2>
<p>They handle high sample volumes with continuous loading, automatic calibration and smart priority (STAT) handling. Automation reduces manual intervention and keeps operations running even at peak load.</p>
<h3>Key capabilities</h3>
<ul>
<li>High throughput with continuous sample loading</li>
<li>Automated calibration and quality controls</li>
<li>STAT handling without interrupting the flow</li>
<li>Full traceability and LIS integration</li>
</ul>
<p>The benefit is operational continuity, traceability and less manual workload.</p>`,
    },
    'process-monitoring': {
      it: `<p>Monitoraggio di processo raccoglie gli strumenti per misurare in continuo i parametri critici di un processo produttivo o di laboratorio.</p>
<h2>Cosa fa</h2>
<p>Sensori e software acquisiscono dati in tempo reale (temperatura, pH, pressione, portata) e li confrontano con soglie di controllo, segnalando le deviazioni prima che diventino critiche.</p>
<h3>Funzionalità principali</h3>
<ul>
<li>Acquisizione continua dei parametri di processo</li>
<li>Allarmi automatici al superamento delle soglie</li>
<li>Storicizzazione dei dati per analisi e audit</li>
<li>Dashboard chiare per il controllo in tempo reale</li>
</ul>
<p>Il risultato è la capacità di anticipare le deviazioni e mantenere il processo sotto controllo.</p>`,
      en: `<p>Process Monitoring groups the tools that continuously measure the critical parameters of a production or lab process.</p>
<h2>What it does</h2>
<p>Sensors and software capture real-time data (temperature, pH, pressure, flow) and compare it against control limits, flagging deviations before they become critical.</p>
<h3>Key capabilities</h3>
<ul>
<li>Continuous acquisition of process parameters</li>
<li>Automatic alarms when thresholds are exceeded</li>
<li>Data historization for analysis and audit</li>
<li>Clear dashboards for real-time control</li>
</ul>
<p>The outcome is the ability to anticipate deviations and keep the process under control.</p>`,
    },
    'quality-control': {
      it: `<p>Controllo qualità comprende gli strumenti per verificare che prodotti e processi rispettino standard solidi e documentabili.</p>
<h2>Cosa fa</h2>
<p>Definisce protocolli di test, registra i risultati e li confronta con specifiche e normative, rendendo la conformità una parte integrata del flusso di lavoro anziché un controllo finale.</p>
<h3>Funzionalità principali</h3>
<ul>
<li>Protocolli di test standardizzati e ripetibili</li>
<li>Registrazione e firma dei risultati per l'audit</li>
<li>Confronto automatico con specifiche e limiti</li>
<li>Report di conformità pronti per gli enti regolatori</li>
</ul>
<p>Il beneficio è una conformità continua e verificabile, integrata nel processo.</p>`,
      en: `<p>Quality Control covers the tools that verify products and processes meet solid, documentable standards.</p>
<h2>What it does</h2>
<p>It defines test protocols, records results and compares them to specifications and regulations, making compliance an integrated part of the workflow rather than a final gate.</p>
<h3>Key capabilities</h3>
<ul>
<li>Standardized, repeatable test protocols</li>
<li>Result recording and sign-off for audit</li>
<li>Automatic comparison against specs and limits</li>
<li>Compliance reports ready for regulators</li>
</ul>
<p>The benefit is continuous, verifiable compliance built into the process.</p>`,
    },
    'cell-analysis': {
      it: `<p>Analisi cellulare raccoglie gli strumenti per osservare, contare e caratterizzare le cellule e i processi biologici complessi.</p>
<h2>Cosa fa</h2>
<p>Combina rilevazione ottica e software di analisi per quantificare popolazioni cellulari, vitalità e marcatori, trasformando osservazioni complesse in dati leggibili e confrontabili.</p>
<h3>Funzionalità principali</h3>
<ul>
<li>Conteggio e caratterizzazione automatizzati delle cellule</li>
<li>Misura di vitalità e marcatori specifici</li>
<li>Analisi riproducibili tra esperimenti diversi</li>
<li>Esportazione dei dati per ulteriori elaborazioni</li>
</ul>
<p>Il risultato è rendere i dati cellulari più leggibili e le decisioni più solide.</p>`,
      en: `<p>Cell Analysis groups the tools to observe, count and characterize cells and complex biological processes.</p>
<h2>What it does</h2>
<p>It combines optical detection and analysis software to quantify cell populations, viability and markers, turning complex observations into readable, comparable data.</p>
<h3>Key capabilities</h3>
<ul>
<li>Automated cell counting and characterization</li>
<li>Viability and specific-marker measurement</li>
<li>Reproducible analysis across experiments</li>
<li>Data export for further processing</li>
</ul>
<p>The outcome is more readable cellular data and more solid decisions.</p>`,
    },
    'sample-preparation': {
      it: `<p>Preparazione campioni comprende gli strumenti che garantiscono un punto di partenza coerente per ogni analisi a valle.</p>
<h2>Cosa fa</h2>
<p>Automatizza le fasi di aliquotazione, diluizione, estrazione e normalizzazione, riducendo la variabilità introdotta dalla manipolazione manuale e proteggendo la qualità dell'intero flusso di lavoro.</p>
<h3>Funzionalità principali</h3>
<ul>
<li>Preparazione automatizzata e ripetibile dei campioni</li>
<li>Riduzione della variabilità e del rischio di errore</li>
<li>Tracciabilità di ogni passaggio</li>
<li>Compatibilità con i flussi analitici a valle</li>
</ul>
<p>Il beneficio è proteggere la qualità del dato fin dal primo passaggio.</p>`,
      en: `<p>Sample Preparation covers the tools that ensure a consistent starting point for every downstream analysis.</p>
<h2>What it does</h2>
<p>It automates aliquoting, dilution, extraction and normalization, reducing the variability of manual handling and protecting the quality of the whole workflow.</p>
<h3>Key capabilities</h3>
<ul>
<li>Automated, repeatable sample preparation</li>
<li>Reduced variability and error risk</li>
<li>Traceability of every step</li>
<li>Compatibility with downstream analytical flows</li>
</ul>
<p>The benefit is protecting data quality from the very first step.</p>`,
    },
    'research-imaging': {
      it: `<p>Imaging per la ricerca raccoglie i sistemi di acquisizione e analisi delle immagini che aiutano a vedere oltre il singolo dato numerico.</p>
<h2>Cosa fa</h2>
<p>Cattura immagini ad alta risoluzione di campioni e processi e le elabora con software dedicato per estrarre misure quantitative, collegando l'osservazione visiva alla decisione.</p>
<h3>Funzionalità principali</h3>
<ul>
<li>Acquisizione di immagini ad alta risoluzione</li>
<li>Analisi quantitativa automatizzata delle immagini</li>
<li>Confronto e sovrapposizione tra acquisizioni</li>
<li>Archiviazione strutturata per la riproducibilità</li>
</ul>
<p>Il risultato è collegare osservazione e decisione con dati visivi solidi.</p>`,
      en: `<p>Research Imaging groups the image acquisition and analysis systems that help you see beyond a single number.</p>
<h2>What it does</h2>
<p>It captures high-resolution images of samples and processes and processes them with dedicated software to extract quantitative measurements, linking visual observation to decisions.</p>
<h3>Key capabilities</h3>
<ul>
<li>High-resolution image acquisition</li>
<li>Automated quantitative image analysis</li>
<li>Comparison and overlay across acquisitions</li>
<li>Structured archiving for reproducibility</li>
</ul>
<p>The outcome is connecting observation and decision with solid visual data.</p>`,
    },
  };

  for (const locale of ['it', 'en']) {
    for (const slug of Object.keys(descriptions)) {
      try {
        const rec = app.findFirstRecordByFilter(
          col.id,
          `locale='${locale}' && slug='${slug}'`
        );
        rec.set('description', descriptions[slug][locale]);
        app.save(rec);
      } catch (_) {}
    }
  }
}, (app) => {
  const col = app.findCollectionByNameOrId('products');
  for (const locale of ['it', 'en']) {
    try {
      const recs = app.findRecordsByFilter(col.id, `locale='${locale}'`, '', 100);
      for (const rec of recs) {
        rec.set('description', '');
        app.save(rec);
      }
    } catch (_) {}
  }
});
