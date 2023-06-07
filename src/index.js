import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./route/web.js"
import dotenv from "dotenv";
dotenv.config('path');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 3000;
app.listen( port, (err)=>{
    //callback
    console.log(`backend nodejs ${port}`)
});