const { Schema } = require("mongoose");
const mongoose = require('../connect/connect'); 

const songType = new Schema({
    nameType: String,
}, { collection: "songType" })

const SongType = mongoose.model('songtype', songType)

module.exports = { SongType } ;