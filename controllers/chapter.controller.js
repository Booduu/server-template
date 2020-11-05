const Chapters = require('../database/models/chapters.model');
const { getAllChapters, chapterCreate, getOneChapter } = require('../queries/chapter.queries'); 

exports.listOfChapters = async (req, res, next) => {
    try {
        const error = req.test.email;
        const allChapters = await getAllChapters();
        res.json(allChapters)
    } catch(e) {
        next(e);
    }
 }

//synchrone
// exports.listOfChapters = (req, res) => {
//     const error = req.test.email;
//         getAllChapters().then( chapter => {
//             res.json(chapter)
//         });
//  }

exports.oneChapter = async (req, res) => {
    try {
        const chapterId = req.params.chapterId;
        const chapter = await getOneChapter(chapterId);
        res.json(chapter)
    } catch(e) {
        next(e);
    }
}

 exports.createChapter = async (req, res) => {
     try {
        const postChapter = await chapterCreate(req.body);
        res.json(postChapter)  
     } catch(e) {
        next(e);
     } 
}