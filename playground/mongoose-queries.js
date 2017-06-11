const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '593d04646de16d0cdd37f0a9';

if (!ObjectId.isValid(id)) {
    console.log('Id no valid.');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.find({
    _id: '593a23aecc0447a2ceca7aea'
}).then((users) => {
    console.log('Users', users);
},(e) => {
    console.log(e);
});

User.findById('593a23aecc0447a2ceca7aea').then((user) => {
    if(!user) {
        return console.log('Id not found');
    }

    console.log('User By Id', user);
}).catch((e) => console.log(e))