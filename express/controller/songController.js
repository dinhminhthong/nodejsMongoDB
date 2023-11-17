
const { Song } = require('../model/song')
const { SongType } = require('../model/typeSong')
function getAllSongs() {
    return new Promise((resolve, reject) => {
        Song.find({})
            .then(songs => {
                console.log(songs)
            })
            .catch(err => {
                reject(err);
            });
    });
}
async function updateSong(req, res) {
    let { name,year,typeSong } = req.body;
    console.log(req.body)
    await Song.create({
        name: name,
        year:year,
        typeSong:typeSong
    });
    return res.send('/oke')
}

async function updateNow(req, res) {
    let { nameType } = req.body;
    console.log(req.body)
    await SongType.create({
        nameType: nameType
    });
    return res.send('oke')
}
function showSongs() {
    return new Promise((resolve, reject) => {
        Song.find({}).populate("typeSong")
            .then(songs => {
                console.log(songs)
            })
            .catch(err => {
                reject(err);
            });
    });
}
module.exports = { getAllSongs, updateNow,updateSong,showSongs}; 
