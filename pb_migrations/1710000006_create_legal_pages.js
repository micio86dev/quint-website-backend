migrate((app) => {
  const collection = new Collection({
    name: 'legal_pages',
    type: 'base',
    listRule: '',
    viewRule: '',
    createRule: null,
    updateRule: null,
    deleteRule: null,
    fields: [
      {
        name: 'page_key',
        type: 'text',
        required: true,
        max: 50,
      },
      {
        name: 'locale',
        type: 'select',
        required: true,
        values: ['it', 'en'],
        maxSelect: 1,
      },
      {
        name: 'title',
        type: 'text',
        required: true,
        max: 200,
      },
      {
        name: 'content',
        type: 'editor',
        required: false,
      },
      {
        name: 'last_updated',
        type: 'text',
        required: false,
        max: 50,
      },
    ],
    indexes: [
      'CREATE UNIQUE INDEX idx_legal_pages_key_locale ON legal_pages (page_key, locale)',
    ],
  });

  app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId('legal_pages');
  app.delete(collection);
});
