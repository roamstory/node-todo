const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const {ObjectId} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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

app.delete('/todos/:id', (req, res) => {
    // get the id
    var id = req.params.id;

    // validate the id -> not valid? return 404
    if(!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    // remove todo by id.
    Todo.findByIdAndRemove(id).then((todo) => {
        // success
        // if no doc, send 404
        if(!todo) {
            return res.status(404).send();
        }
        // if do, send doc back with 200
        res.status(200).send(todo);
    }).catch((e) => {
        res.status(400).send();
    })

});

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectId.isValid(id)) {
        return res.status(404).sedn();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    })
})

app.listen(port, () => {
    console.log(`Started up at prot ${port}`);
});


module.exports = {app};




