const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/song')

const db = mongoose.connection;
module.exports = mongoose; 