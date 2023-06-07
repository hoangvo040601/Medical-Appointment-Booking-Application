import express from "express";
import { getHomePage, getLoginPage } from "../controllers/homeController.js";

let router = express.Router();
let initWebRouters = (app) =>{
    router.get("/", getHomePage);
    router.get("/login", getLoginPage);

    return app.use("/", router);
}
export default initWebRouters;