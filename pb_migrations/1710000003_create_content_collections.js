migrate((app) => {
  // 1. site_text — flat key-value for all UI copy
  app.save(new Collection({
    type: 'base', name: 'site_text',
    listRule: '', viewRule: '',
    createRule: null, updateRule: null, deleteRule: null,
    fields: [
      { type: 'select', name: 'locale', required: true, maxSelect: 1, values: ['it', 'en'] },
      { type: 'text',   name: 'key',    required: true, max: 200 },
      { type: 'text',   name: 'value',  max: 10000 }
    ],
    indexes: ['CREATE UNIQUE INDEX idx_site_text_locale_key ON site_text (locale, key)']
  }));

  // 2. products
  app.save(new Collection({
    type: 'base', name: 'products',
    listRule: '', viewRule: '',
    createRule: null, updateRule: null, deleteRule: null,
    fields: [
      { type: 'text',   name: 'slug',       required: true, max: 100 },
      { type: 'select', name: 'family',      required: true, maxSelect: 1, values: ['diagnostics', 'research', 'quality'] },
      { type: 'select', name: 'locale',      required: true, maxSelect: 1, values: ['it', 'en'] },
      { type: 'text',   name: 'title',       required: true, max: 200 },
      { type: 'text',   name: 'summary',     required: true, max: 500 },
      { type: 'text',   name: 'benefit',     required: true, max: 500 },
      { type: 'file',   name: 'image',       maxSelect: 1, maxSize: 5242880 },
      { type: 'number', name: 'sort_order' }
    ],
    indexes: ['CREATE UNIQUE INDEX idx_products_slug_locale ON products (slug, locale)']
  }));

  // 3. faqs
  app.save(new Collection({
    type: 'base', name: 'faqs',
    listRule: '', viewRule: '',
    createRule: null, updateRule: null, deleteRule: null,
    fields: [
      { type: 'select', name: 'locale',     required: true, maxSelect: 1, values: ['it', 'en'] },
      { type: 'text',   name: 'question',   required: true, max: 500 },
      { type: 'text',   name: 'answer',     required: true, max: 5000 },
      { type: 'number', name: 'sort_order' }
    ]
  }));

  // 4. capabilities
  app.save(new Collection({
    type: 'base', name: 'capabilities',
    listRule: '', viewRule: '',
    createRule: null, updateRule: null, deleteRule: null,
    fields: [
      { type: 'select', name: 'locale',       required: true, maxSelect: 1, values: ['it', 'en'] },
      { type: 'text',   name: 'number_label', required: true, max: 10 },
      { type: 'text',   name: 'title',        required: true, max: 200 },
      { type: 'text',   name: 'body',         required: true, max: 500 },
      { type: 'number', name: 'sort_order' }
    ]
  }));

  // 5. statistics
  app.save(new Collection({
    type: 'base', name: 'statistics',
    listRule: '', viewRule: '',
    createRule: null, updateRule: null, deleteRule: null,
    fields: [
      { type: 'select', name: 'locale',     required: true, maxSelect: 1, values: ['it', 'en'] },
      { type: 'text',   name: 'value',      required: true, max: 50 },
      { type: 'text',   name: 'label',      required: true, max: 200 },
      { type: 'number', name: 'sort_order' }
    ]
  }));

  // 6. platform_signals
  app.save(new Collection({
    type: 'base', name: 'platform_signals',
    listRule: '', viewRule: '',
    createRule: null, updateRule: null, deleteRule: null,
    fields: [
      { type: 'select', name: 'locale',     required: true, maxSelect: 1, values: ['it', 'en'] },
      { type: 'text',   name: 'label',      required: true, max: 100 },
      { type: 'text',   name: 'value',      required: true, max: 50 },
      { type: 'number', name: 'sort_order' }
    ]
  }));
}, (app) => {
  for (const name of ['platform_signals', 'statistics', 'capabilities', 'faqs', 'products', 'site_text']) {
    try { app.delete(app.findCollectionByNameOrId(name)); } catch (_) {}
  }
});
