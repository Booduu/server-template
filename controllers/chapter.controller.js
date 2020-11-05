const Chapters = require('../database/models/chapters.model');

exports.getAllChapters = async (req, res) => {
    try {
        const allChapters = await Chapters.find().exec();
        res.json(allChapters)
        
    } catch(e) {

    }
   
 }

 exports.createChapter = async (req, res) => {
     try {
        const newChapter = new Chapters({...req.body});
        const postChapter = await newChapter.save();
        res.json(postChapter)  
     } catch(e) {

     } 
}