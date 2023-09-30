use('DATABASE_NAME');

// 1. Create a new collection
db.createCollection('mycollection');
// 2 Removes a collection from the database.
db.mycollection.drop();
// 3.Inserts a single document into a collection.
db.mycollection.insertOne({
  key1: 'value1',
  key2: 'value2',
});
// 4.Delete/remove a single document from the collection.
db.mycollection.deleteOne({
  key1: 'value1',
});
