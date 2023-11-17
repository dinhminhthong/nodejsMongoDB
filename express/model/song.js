const { Schema } = require("mongoose");
const mongoose = require('../connect/connect'); 
const song = new Schema({
    name: String,
    year: String,
    typeSong: {
        type: String,
        ref: "songtype"
    }
}, {collection:"song"})
 const Song=mongoose.model("song",song)
 module.exports = {  Song } ;