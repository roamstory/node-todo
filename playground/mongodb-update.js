const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID('593a0d4eb53d8658ddfe9c6c')}, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate(
    //     {_id: new ObjectID('59392e349b4db90772769e1d')},
    //     {$set: {age: 38}},
    //     {returnOriginal: false}
    // ).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID('59392e349b4db90772769e1d')},
        {$inc: {age: 1}},
        {returnOriginal: false}
    ).then((result) => {
        console.log(result);
    });


    // db.close();

});