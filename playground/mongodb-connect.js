const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todo').insertOne({
    //     text: 'Something to do',
    //     completed: false,
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert into todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('Users').insertOne({
        name: 'Mish',
        age: 25,
        location: 'Kumasi'

    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
});