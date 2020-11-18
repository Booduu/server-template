const User = require('../database/models/user.model');

exports.allFiles = () => {
    return User.find().exec();
}

exports.oneFile = (userId) => {
    return User.findById({_id: userId}).exec();
}

exports.postFile = (filename) => {
    const newUser = new User({
        avatar: filename
    });
    return newUser.save();
}