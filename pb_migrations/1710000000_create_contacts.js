migrate((app) => {
  const collection = new Collection({
    type: 'base', name: 'contacts',
    listRule: '@request.auth.id != ""', viewRule: '@request.auth.id != ""',
    createRule: null, updateRule: '@request.auth.id != ""', deleteRule: '@request.auth.id != ""',
    fields: [
      { type: 'text', name: 'name', required: true, min: 2, max: 160 },
      { type: 'email', name: 'email', required: true },
      { type: 'text', name: 'company', max: 160 },
      { type: 'text', name: 'message', required: true, min: 12, max: 2000 },
      { type: 'select', name: 'locale', required: true, maxSelect: 1, values: ['it', 'en'] },
      { type: 'text', name: 'source', required: true, max: 40 }
    ]
  });
  app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId('contacts');
  app.delete(collection);
});
