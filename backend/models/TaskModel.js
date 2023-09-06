// models/FictionBook.js

const mongoose = require('mongoose');

const fictionSchema = new mongoose.Schema({
    task: {
        type:String,
        required:true
    }
}, { collection: 'FICTION' });
module.exports = mongoose.model('FictionBook', fictionSchema);
const poetrySchema = new mongoose.Schema({
    task: {
        type:String,
        required:true
    }
}, { collection: 'POETRY' });
module.exports = mongoose.model('PoetryBook', poetrySchema);
