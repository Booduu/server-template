const express = require('express');
const router = express.Router();
const { getAllChapters, createChapter } = require('../controllers/chapter.controller');

router.get('/', getAllChapters);

router.post('/', createChapter)



module.exports = router;