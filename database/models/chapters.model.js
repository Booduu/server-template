const mongoose = require('mongoose');

const schema = mongoose.Schema;


const chapterSchema = schema({
    title: String ,
    nbrOfLesson: { type: Number, required: [true, 'Champs requis'] },
    index: Number,
    active: Boolean,
}, {
    timestamps: true
});


// Creation de model mongoose
// model :
// - prend en 1er paramètre un nom (celui de la collection par exemple)
// - prend en 2nd paramètre le schema qui correspond à cette collection
const Chapters = mongoose.model('chapters', chapterSchema);

module.exports = Chapters;