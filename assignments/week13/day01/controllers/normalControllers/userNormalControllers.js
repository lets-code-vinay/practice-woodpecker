var userNormalController = {};

userNormalController.renderRegister = function (req,res) {
    res.render('register', {title : "Blogggieee | Register", type : 'register'});
}

userNormalController.renderLogin = function (req,res) {
    res.render('login', {title : "Blogggieee | Login", type : 'login'});
}

userNormalController.renderDashboard = function (req,res) {
    
    res.render('dashboard', {title : "Blogggieee | Dashboard"});
}

module.exports = userNormalController;