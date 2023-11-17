import express from "express";
let router =express.Router();
 import ApiController from "../controller/ApiController";
const innitApp =(app)=>{
router.get('/tin',  ApiController.getAllUser);
router.post('/create', ApiController.createData)

return app.use('/api/',router)
}
export default innitApp;