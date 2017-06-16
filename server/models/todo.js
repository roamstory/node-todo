var mongoose = require('mongoose');

// mongoose Todo모델 생성
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required : true,
        minlength: 2,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Date,
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module.exports = {Todo};