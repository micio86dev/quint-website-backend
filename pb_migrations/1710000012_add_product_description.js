migrate((app) => {
  // Add a rich-text `description` field so each product can justify a
  // dedicated detail page with a clear explanation of what the tool does.
  const col = app.findCollectionByNameOrId('products');
  col.fields.add(new Field({
    type: 'editor',
    name: 'description',
    required: false,
  }));
  app.save(col);
}, (app) => {
  const col = app.findCollectionByNameOrId('products');
  const field = col.fields.getByName('description');
  if (field) {
    col.fields.removeById(field.id);
    app.save(col);
  }
});
