const express = require('express');
const router = express.Router();
const { listOfChapters, createChapter, oneChapter } = require('../controllers/chapter.controller');

router.get('/', listOfChapters);
router.get('/:chapterId', oneChapter)
router.post('/', createChapter)



module.exports = router;