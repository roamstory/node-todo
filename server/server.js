const express = require('express');
const bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
   var todo = new Todo({
       text: req.body.text,
   });

   todo.save().then((docs) => {
       res.send(docs);
   }, (err) => {
       res.status(400).send('Unale to save todo');
       console.log('Unale to save todo');
   })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    })
});

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    //Valid id using isValid
      // 404 - send back empty send
    if (!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    // findById
    Todo.findById(id).then((todo) => {
        // if no todo - send back 404 with empty body
        if (!todo) {
           return res.status(404).send();
        }
        //success
        // if todo - send it back
        res.send({todo});

    }).catch((e) => {
        //error
        // 400 - 'and send empty body back;
        res.status(400).send();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = {app};




