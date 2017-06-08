//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var user = {name: 'jay', age: 37};
// var {name} = user;
//
// console.log(name);

var obj = new ObjectID();
console.log(obj);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
      return  console.log('Unable to connect to MongoDB server');
    }
    console.log('Connet to MongoDB server');

    // db.collection('Todos').insertOne({
    //     test: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'jay',
    //     age: 37,
    //     location: 'korea'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
    // });

    db.close();
});