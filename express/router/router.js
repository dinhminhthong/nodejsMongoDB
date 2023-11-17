const express = require("express")
const router=express.Router();
const songController=require("../controller/songController")
const routerInnit=(app)=>{
    router.get("/song",songController.showSongs)
    router.post("/typeSong",songController.updateNow)
    router.post("/song",songController.updateSong)
    return app.use('/', router)
}

module.exports = {  routerInnit } ;