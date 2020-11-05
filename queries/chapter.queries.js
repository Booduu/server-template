const Chapters = require('../database/models/chapters.model');

exports.getAllChapters = () => {
    return Chapters.find().exec();
}

exports.getOneChapter = (chapterId) => {
    return Chapters.findById({_id: chapterId}).exec();
}

exports.chapterCreate = (chapter) => {
    const newChapter = new Chapters({...chapter});
    // puis on retourne la promesse
    return newChapter.save();
}