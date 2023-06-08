import db from "../models/index.js"
let getHomePage = async(req,res) =>{
    try {
        let data = await db.User.findAll();
        console.log("-----------------");
        console.log(data);
        return res.render("homePage.ejs", {
            data: JSON.stringify(data),
        });
        
    } catch (error) {
        console.log(error);
    }
}
let getLoginPage = (req,res) =>{
    return res.render("loginPage.ejs");
}
export {
    getHomePage,
    getLoginPage,
}