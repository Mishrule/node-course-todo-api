const express = require('express');
const bodyParser = require('body-parser');



var {
    mongoose
} = require('./db/mongoose');

var {
    Todo
} = require('./models/todo');

var {
    User
} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.listen(3000, () => {
    console.log('Started on Port 3000');
});

module.exports = {
    app
};
// var newUser = new User({
//     email: 'Mishrule1@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log('Save todo', doc)
// }, (e) => {
//     console.log('Unable to Save file', e);
// });

// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Save todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//     text: '    Feed the Me    ',
//     completed: false,

// });

// otherTodo.save().then((doc) => {
//     console.log('Save todo', doc)
// }, (e) => {
//     console.log('Unable to save todo');
// })