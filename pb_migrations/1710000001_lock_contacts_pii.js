migrate((app) => {
  const collection = app.findCollectionByNameOrId('contacts');
  collection.listRule = null;
  collection.viewRule = null;
  collection.createRule = null;
  collection.updateRule = null;
  collection.deleteRule = null;
  app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId('contacts');
  collection.listRule = null;
  collection.viewRule = null;
  collection.createRule = null;
  collection.updateRule = null;
  collection.deleteRule = null;
  app.save(collection);
});
