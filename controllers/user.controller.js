const {allFiles, oneFile, postFile} = require('../queries/user.queries');

exports.getAllFiles = async (req, res, next) => {
    try {
        const allUsers = await allFiles();
        res.json(allUsers);
    } catch(e) {
        next(e);
    }
}

exports.getOneFile = async (req, res, next) => {
    try {
        const userId = req.params;
        const users = await oneFile(userId);;
        const user =  users && users.length ? users[0] : null;
        res.json(user);
    } catch(e) {
        next(e);
    }
}

exports.uploadFile = async (req, res, next) => {
    console.log('req.files.filename', req.files[0].filename);
    try {
        const savedUser = await postFile(req.files[0].filename);
    } catch(e) {
        next(e);
    }     
}