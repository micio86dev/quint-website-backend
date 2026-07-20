migrate((app) => {
  const col = app.findCollectionByNameOrId('legal_pages');

  const records = [
    // -------------------------------------------------------------------------
    // Privacy Policy — IT
    // -------------------------------------------------------------------------
    {
      page_key: 'privacy',
      locale: 'it',
      title: 'Informativa sulla Privacy',
      last_updated: '25 settembre 2025',
      content: `<p>Ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (GDPR), Quint S.r.l. fornisce le seguenti informazioni sul trattamento dei dati personali degli utenti del sito web.</p>

<h2>1. Titolare del trattamento</h2>
<p><strong>Quint S.r.l.</strong><br>Piazza Città di Lombardia 1, 20124 Milano (MI), Italia<br>Email: <a href="mailto:welcome@quint.org">welcome@quint.org</a></p>

<h2>2. Tipologie di dati raccolti</h2>
<h3>Dati di navigazione</h3>
<p>I sistemi informatici del sito raccolgono automaticamente alcuni dati tecnici: indirizzi IP, tipo di browser, sistema operativo, pagine visitate, orario di accesso. Questi dati non sono associati a utenti identificati e vengono utilizzati esclusivamente per finalità statistiche anonime e di sicurezza.</p>
<h3>Dati forniti volontariamente</h3>
<p>Tramite il modulo di contatto raccogliamo: nome, cognome, indirizzo email aziendale, nome dell'azienda, messaggio. La fornitura è facoltativa ma necessaria per rispondere alla tua richiesta.</p>

<h2>3. Finalità e base giuridica del trattamento</h2>
<table>
<thead><tr><th>Finalità</th><th>Base giuridica (art. 6 GDPR)</th></tr></thead>
<tbody>
<tr><td>Rispondere alle richieste di contatto</td><td>Misure precontrattuali (art. 6(1)(b))</td></tr>
<tr><td>Sicurezza e funzionamento del sito</td><td>Legittimo interesse (art. 6(1)(f))</td></tr>
</tbody>
</table>

<h2>4. Conservazione dei dati</h2>
<p>I dati del modulo di contatto sono conservati per il tempo necessario a gestire la richiesta e, successivamente, per gli eventuali obblighi di legge (max. 10 anni per adempimenti fiscali e contabili). I dati di navigazione sono eliminati entro 30 giorni.</p>

<h2>5. Destinatari dei dati</h2>
<p>I dati non sono ceduti a terzi a fini commerciali. Possono accedervi, nei limiti delle rispettive mansioni, i dipendenti e collaboratori autorizzati di Quint S.r.l. Il sito non utilizza servizi di analytics di terze parti.</p>

<h2>6. Trasferimento internazionale</h2>
<p>I dati non vengono trasferiti al di fuori dello Spazio Economico Europeo (SEE).</p>

<h2>7. Diritti dell'interessato</h2>
<p>Hai il diritto di:</p>
<ul>
<li><strong>Accesso</strong> ai tuoi dati personali (art. 15 GDPR)</li>
<li><strong>Rettifica</strong> di dati inesatti (art. 16 GDPR)</li>
<li><strong>Cancellazione</strong> ("diritto all'oblio", art. 17 GDPR)</li>
<li><strong>Limitazione</strong> del trattamento (art. 18 GDPR)</li>
<li><strong>Portabilità</strong> dei dati (art. 20 GDPR)</li>
<li><strong>Opposizione</strong> al trattamento (art. 21 GDPR)</li>
</ul>
<p>Puoi esercitare questi diritti scrivendo a <a href="mailto:welcome@quint.org">welcome@quint.org</a>. Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali: <a href="https://www.garanteprivacy.it" rel="noopener">www.garanteprivacy.it</a>.</p>`,
    },

    // -------------------------------------------------------------------------
    // Privacy Policy — EN
    // -------------------------------------------------------------------------
    {
      page_key: 'privacy',
      locale: 'en',
      title: 'Privacy Policy',
      last_updated: '25 September 2025',
      content: `<p>Pursuant to Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR), Quint S.r.l. provides the following information on the processing of personal data of website users.</p>

<h2>1. Data Controller</h2>
<p><strong>Quint S.r.l.</strong><br>Piazza Città di Lombardia 1, 20124 Milan (MI), Italy<br>Email: <a href="mailto:welcome@quint.org">welcome@quint.org</a></p>

<h2>2. Types of data collected</h2>
<h3>Navigation data</h3>
<p>Our servers automatically collect certain technical data: IP addresses, browser type, operating system, pages visited, access time. This data is not linked to identified users and is used solely for anonymous statistical and security purposes.</p>
<h3>Data provided voluntarily</h3>
<p>Through the contact form we collect: first name, last name, work email address, company name, message. Providing this information is optional but necessary to respond to your request.</p>

<h2>3. Purposes and legal basis for processing</h2>
<table>
<thead><tr><th>Purpose</th><th>Legal basis (Art. 6 GDPR)</th></tr></thead>
<tbody>
<tr><td>Responding to contact requests</td><td>Pre-contractual measures (Art. 6(1)(b))</td></tr>
<tr><td>Website security and operation</td><td>Legitimate interest (Art. 6(1)(f))</td></tr>
</tbody>
</table>

<h2>4. Data retention</h2>
<p>Contact form data is retained for as long as needed to handle your request and subsequently for any statutory obligations (max. 10 years for tax and accounting purposes). Navigation data is deleted within 30 days.</p>

<h2>5. Recipients of data</h2>
<p>Data is not sold or shared with third parties for commercial purposes. Authorised employees and collaborators of Quint S.r.l. may access it within the scope of their duties. The website does not use third-party analytics services.</p>

<h2>6. International transfers</h2>
<p>Data is not transferred outside the European Economic Area (EEA).</p>

<h2>7. Data subject rights</h2>
<p>You have the right to:</p>
<ul>
<li><strong>Access</strong> your personal data (Art. 15 GDPR)</li>
<li><strong>Rectification</strong> of inaccurate data (Art. 16 GDPR)</li>
<li><strong>Erasure</strong> ("right to be forgotten", Art. 17 GDPR)</li>
<li><strong>Restriction</strong> of processing (Art. 18 GDPR)</li>
<li><strong>Portability</strong> of your data (Art. 20 GDPR)</li>
<li><strong>Objection</strong> to processing (Art. 21 GDPR)</li>
</ul>
<p>You may exercise these rights by writing to <a href="mailto:welcome@quint.org">welcome@quint.org</a>. You also have the right to lodge a complaint with the Italian Data Protection Authority: <a href="https://www.garanteprivacy.it" rel="noopener">www.garanteprivacy.it</a>.</p>`,
    },

    // -------------------------------------------------------------------------
    // Cookie Policy — IT
    // -------------------------------------------------------------------------
    {
      page_key: 'cookie',
      locale: 'it',
      title: 'Cookie Policy',
      last_updated: '25 settembre 2025',
      content: `<p>Il presente sito web utilizza cookie e tecnologie di tracciamento analoghe in conformità con il Regolamento (UE) 2016/679 (GDPR) e il D.Lgs. 196/2003.</p>

<h2>Cosa sono i cookie</h2>
<p>I cookie sono piccoli file di testo memorizzati sul dispositivo dell'utente quando si visita un sito web. Permettono al sito di ricordare le preferenze e migliorare l'esperienza di navigazione.</p>

<h2>Cookie tecnici (necessari)</h2>
<p>Questo sito utilizza esclusivamente cookie tecnici strettamente necessari al funzionamento. Ai sensi dell'art. 122, comma 1, del D.Lgs. 196/2003, tali cookie non richiedono il consenso dell'utente.</p>
<table>
<thead><tr><th>Tipo</th><th>Scopo</th><th>Durata</th></tr></thead>
<tbody>
<tr><td>Cookie di sessione HTTP</td><td>Funzionamento tecnico del server</td><td>Sessione (eliminati alla chiusura del browser)</td></tr>
</tbody>
</table>

<h2>Cookie di profilazione e di terze parti</h2>
<p>Questo sito <strong>non utilizza</strong> cookie di profilazione, cookie pubblicitari o strumenti di analytics di terze parti (es. Google Analytics).</p>

<h2>Come gestire o disabilitare i cookie</h2>
<p>Puoi gestire, bloccare o eliminare i cookie tramite le impostazioni del tuo browser:</p>
<ul>
<li><a href="https://support.google.com/chrome/answer/95647" rel="noopener noreferrer" target="_blank">Google Chrome</a></li>
<li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox" rel="noopener noreferrer" target="_blank">Mozilla Firefox</a></li>
<li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" rel="noopener noreferrer" target="_blank">Apple Safari</a></li>
<li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" rel="noopener noreferrer" target="_blank">Microsoft Edge</a></li>
</ul>
<p>La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento di alcune funzionalità del sito.</p>

<h2>Titolare del trattamento</h2>
<p><strong>Quint S.r.l.</strong>, Piazza Città di Lombardia 1, 20124 Milano (MI)<br>Email: <a href="mailto:welcome@quint.org">welcome@quint.org</a></p>

<p>Per maggiori informazioni sul trattamento dei dati, consulta la nostra <a href="../privacy">Informativa sulla Privacy</a>.</p>`,
    },

    // -------------------------------------------------------------------------
    // Cookie Policy — EN
    // -------------------------------------------------------------------------
    {
      page_key: 'cookie',
      locale: 'en',
      title: 'Cookie Policy',
      last_updated: '25 September 2025',
      content: `<p>This website uses cookies and similar tracking technologies in accordance with Regulation (EU) 2016/679 (GDPR).</p>

<h2>What are cookies</h2>
<p>Cookies are small text files stored on your device when you visit a website. They allow the site to remember your preferences and improve your browsing experience.</p>

<h2>Technical cookies (necessary)</h2>
<p>This website uses only strictly necessary technical cookies. These do not require your consent.</p>
<table>
<thead><tr><th>Type</th><th>Purpose</th><th>Duration</th></tr></thead>
<tbody>
<tr><td>HTTP session cookie</td><td>Server technical operation</td><td>Session (deleted when browser is closed)</td></tr>
</tbody>
</table>

<h2>Profiling and third-party cookies</h2>
<p>This website does <strong>not use</strong> profiling cookies, advertising cookies or third-party analytics tools (e.g. Google Analytics).</p>

<h2>How to manage or disable cookies</h2>
<p>You can manage, block or delete cookies through your browser settings:</p>
<ul>
<li><a href="https://support.google.com/chrome/answer/95647" rel="noopener noreferrer" target="_blank">Google Chrome</a></li>
<li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" rel="noopener noreferrer" target="_blank">Mozilla Firefox</a></li>
<li><a href="https://support.apple.com/guide/safari/sfri11471/mac" rel="noopener noreferrer" target="_blank">Apple Safari</a></li>
<li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" rel="noopener noreferrer" target="_blank">Microsoft Edge</a></li>
</ul>

<h2>Data controller</h2>
<p><strong>Quint S.r.l.</strong>, Piazza Città di Lombardia 1, 20124 Milan (MI), Italy<br>Email: <a href="mailto:welcome@quint.org">welcome@quint.org</a></p>

<p>For more information on data processing, see our <a href="../privacy">Privacy Policy</a>.</p>`,
    },

    // -------------------------------------------------------------------------
    // Terms of Use — IT
    // -------------------------------------------------------------------------
    {
      page_key: 'terms',
      locale: 'it',
      title: 'Termini di Utilizzo',
      last_updated: '25 settembre 2025',
      content: `<p>Accedendo e utilizzando questo sito web dichiari di aver letto, compreso e accettato i presenti Termini di Utilizzo.</p>

<h2>1. Proprietà intellettuale</h2>
<p>Tutti i contenuti del sito (testi, grafica, loghi, immagini, software) sono di proprietà esclusiva di Quint S.r.l. e sono protetti dalla normativa italiana ed europea sul diritto d'autore (L. 633/1941 e Direttiva 2001/29/CE). È vietata qualsiasi riproduzione, distribuzione o modifica senza previa autorizzazione scritta.</p>

<h2>2. Uso consentito</h2>
<p>Il sito è destinato a finalità informative e commerciali lecite. È vietato:</p>
<ul>
<li>Violare la sicurezza del sito o tentare accessi non autorizzati</li>
<li>Utilizzare sistemi automatizzati (bot, scraper) non autorizzati</li>
<li>Trasmettere contenuti illeciti, dannosi o lesivi di diritti di terzi</li>
<li>Utilizzare i contenuti del sito per addestrare modelli di intelligenza artificiale senza autorizzazione</li>
</ul>

<h2>3. Disclaimer e limitazione di responsabilità</h2>
<p>Quint S.r.l. si impegna a mantenere le informazioni del sito accurate e aggiornate, ma non fornisce garanzie sulla completezza o accuratezza dei contenuti. Non è responsabile per danni diretti, indiretti o consequenziali derivanti dall'uso del sito o dall'impossibilità di accedervi.</p>

<h2>4. Link a siti di terze parti</h2>
<p>Il sito può contenere link a siti web esterni. Quint S.r.l. non ha controllo su tali siti e declina ogni responsabilità per i loro contenuti, politiche sulla privacy o pratiche.</p>

<h2>5. Legge applicabile e foro competente</h2>
<p>I presenti Termini sono regolati dal diritto italiano. Per qualsiasi controversia relativa all'uso del sito è competente in via esclusiva il Foro di Milano.</p>

<h2>6. Modifiche ai Termini</h2>
<p>Quint S.r.l. si riserva il diritto di modificare i presenti Termini in qualsiasi momento. Le modifiche sono efficaci dalla data di pubblicazione sul sito. Si raccomanda di consultare periodicamente questa pagina.</p>

<h2>7. Contatti</h2>
<p>Per qualsiasi domanda relativa ai presenti Termini: <a href="mailto:welcome@quint.org">welcome@quint.org</a></p>`,
    },

    // -------------------------------------------------------------------------
    // Terms of Use — EN
    // -------------------------------------------------------------------------
    {
      page_key: 'terms',
      locale: 'en',
      title: 'Terms of Use',
      last_updated: '25 September 2025',
      content: `<p>By accessing and using this website you confirm that you have read, understood and accepted these Terms of Use.</p>

<h2>1. Intellectual property</h2>
<p>All content on this site (text, graphics, logos, images, software) is the exclusive property of Quint S.r.l. and is protected by Italian and European copyright law. Any reproduction, distribution or modification without prior written authorisation is prohibited.</p>

<h2>2. Permitted use</h2>
<p>This website is intended for lawful informational and commercial purposes. The following are prohibited:</p>
<ul>
<li>Violating website security or attempting unauthorised access</li>
<li>Using unauthorised automated systems (bots, scrapers)</li>
<li>Transmitting unlawful, harmful or third-party-rights-infringing content</li>
<li>Using website content to train artificial intelligence models without authorisation</li>
</ul>

<h2>3. Disclaimer and limitation of liability</h2>
<p>Quint S.r.l. endeavours to keep the information on this website accurate and up to date, but provides no guarantees as to the completeness or accuracy of the content. Quint S.r.l. is not liable for direct, indirect or consequential damages arising from the use of or inability to access this website.</p>

<h2>4. Third-party links</h2>
<p>This website may contain links to external websites. Quint S.r.l. has no control over such websites and accepts no responsibility for their content, privacy policies or practices.</p>

<h2>5. Governing law and jurisdiction</h2>
<p>These Terms are governed by Italian law. The Court of Milan shall have exclusive jurisdiction over any dispute relating to the use of this website.</p>

<h2>6. Changes to these Terms</h2>
<p>Quint S.r.l. reserves the right to modify these Terms at any time. Changes are effective from the date of publication on the website. We recommend checking this page periodically.</p>

<h2>7. Contact</h2>
<p>For any questions regarding these Terms: <a href="mailto:welcome@quint.org">welcome@quint.org</a></p>`,
    },
  ];

  for (const data of records) {
    app.save(new Record(col, data));
  }
}, (app) => {
  const col = app.findCollectionByNameOrId('legal_pages');
  const records = app.findAllRecords('legal_pages');
  for (const r of records) {
    app.delete(r);
  }
});
