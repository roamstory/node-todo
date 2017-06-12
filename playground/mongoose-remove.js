const {ObjectID} = require('mongodb');

const {mongoose} =require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });


//Todo.findOneAndRemove
Todo.findOneAndRemove({_id:'593e4690322c9ad7695fc76c'}).then((todo) => {

});

//Todo.findByIdAndRemove
Todo.findByIdAndRemove('593e4690322c9ad7695fc76c').then((todo) => {
    console.log(todo);
});