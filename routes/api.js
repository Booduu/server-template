const express = require('express');
const router = express.Router();

const chapters = require('./chapters');
const file = require('./file');

router.use('/chapters', chapters);
router.use('/file', file);

module.exports = router;