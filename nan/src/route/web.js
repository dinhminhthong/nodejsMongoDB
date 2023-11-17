import express from "express";
let router = express.Router();
import homeController from "../controller/homeController"

const inintWebRoute = (app) => {
   router.get('/tin-tuc', homeController.getHomepage)
   router.get('/detail/:id', homeController.getDetail)
   router.post('/create', homeController.createData)
   router.post('/delete', homeController.deleteData)
   router.get('/update/:id', homeController.updateData)
   router.post('/update-now',homeController.updateNow)
   return app.use('/', router)
}

export default inintWebRoute;