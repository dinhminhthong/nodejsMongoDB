const express=require("express");
const {routerInnit}=require("./router/router")
const app=express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
routerInnit(app)
app.listen(3000,() =>{
    console.log("kkk")
 })
