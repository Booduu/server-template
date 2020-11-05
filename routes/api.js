const express = require('express');
const router = express.Router();

const chapters = require('./chapters');

router.use('/chapters', chapters);

module.exports = router;