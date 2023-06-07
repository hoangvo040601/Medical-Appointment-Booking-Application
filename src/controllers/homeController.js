let getHomePage = (req,res) =>{
    return res.render("homePage.ejs");
}
let getLoginPage = (req,res) =>{
    return res.render("loginPage.ejs");
}
export {
    getHomePage,
    getLoginPage,
}