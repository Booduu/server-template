const Chapters = require('../database/models/chapters.model');
const { getAllChapters, postOneChapter } = require('../queries/chapter.queries'); 

exports.chaptersList = async (req, res) => {
    try {
        const allChapters = await getAllChapters();
        res.json(allChapters)
        
    } catch(e) {

    }
   
 }

 exports.createChapter = async (req, res) => {
     try {
        const postChapter = await postOneChapter(req.body);
        res.json(postChapter)  
     } catch(e) {

     } 
}