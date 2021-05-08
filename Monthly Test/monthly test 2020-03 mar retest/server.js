const express = require("express")
const hbs = require("hbs")
const session = require("express-session")
const methodOverride = require("method-override")
const path = require("path")
var dotenv = require("dotenv")
dotenv.config()
require("./db")
const app = express()


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:false}))
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials"))
app.set("view options", {layout:"layout"});



const normalRoutes = require("./routes/normalRoutes")
const apiRoutes = require("./routes/apiRoutes")

// app.use(express.static(__dirname+"statics"))


app.use(session({
    name:"shopping_session",
    secret:"shopping_cart",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60,
        httpOnly:true,
        sameSite:"strict",
        secure:false
    }
}))

app.get("/", function(req,res){
    if(req.session.userId) res.redirect('/allforums')
    res.render("index")
})

app.use(normalRoutes)
app.use(apiRoutes)

var PORT = process.env.PORT || 8081
app.listen(PORT, function(){
    console.log("server started on port : " , PORT)
})