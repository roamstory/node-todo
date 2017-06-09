var mongoose = require('mongoose');

// mongoose User모델 생성
var User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = {User};