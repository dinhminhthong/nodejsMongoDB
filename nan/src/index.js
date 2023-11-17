const express = require('express');
const app= express();
import inintWebRoute from './route/web'
import innitApp from "./route/api"
require('dotenv').config();
const port=process.env.PORT || 3000;
import configViewEngine from './config/viewEngine';

// setup get param body
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// setup view engine
configViewEngine(app);
// innit router 
inintWebRoute(app);
innitApp(app);

 app.listen(port,() =>{
    console.log("kkk")
 })