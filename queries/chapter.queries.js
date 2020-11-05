const Chapters = require('../database/models/chapters.model');

exports.getAllChapters = () => {
    return Chapters.find().exec();
}

exports.postOneChapter = (chapter) => {
    const newChapter = new Chapters({...chapter});
    // puis on retourne la promesse
    return newChapter.save();
}