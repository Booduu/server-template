const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getAllFiles, getOneFile, uploadFile } = require('../controllers/user.controller');
const User = require('../database/models/user.model');


const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join('./uploads'))
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname)
        }
    }),
    limits: {
        fileSize: 200000
    }
});


router.post('/',  upload.array('avatar', 1), uploadFile);

router.get('/image/:image', getOneFile);

router.get('/images', getAllFiles);

module.exports = router;











// const upload = multer(
//     { 
//         dest: path.join('./uploads'),
//         limits: {
//             fileSize: 200000
//         },
//         // fileFilter: (req, file, cb) => {
//         //     console.log(file);
//         //     console.log(req);
//         //     cb(null, true);
//         // }
//     })


// router.post('/',  upload.single('avatar'), (req, res, next) => {
//     console.log('ppppp', req.file);
    
//     // res.end();
// })