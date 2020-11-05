const express = require('express');
const router = express.Router();
const { chaptersList, createChapter } = require('../controllers/chapter.controller');

router.get('/', chaptersList);

router.post('/', createChapter)



module.exports = router;