//importing my base packeges
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const fs = require("fs");
const methodoveride = require("method-override");
const user = require("./user");
const middleware = require("./middleware");

// initilliazing the express module
const app = express();

//setting up all the middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodoveride("logout"));
//creating the cookie
app.use(
  session({
    name: "sessionid",
    secret: "atanu123",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 5,
      secure: false
    }
  })
);

//setting up the base route
app.get("/", function(req, res) {
  const dis = `<div style="text-align: center; color: gold; background-color: black; border: gold 1rem solid;">
  <h1>Hi this is a DEMO of Session On EXPRESS Server</h1>
  <a href="home">Dashboard</a>
  <a href="register">Register</a>
  <a href="login">Login</a>
</div>`;
  res.send(dis);
  console.log("server started");
  console.log(req.session);
});
//settin up the register route
//the get method to display the register from
app.get("/register", function(req, res) {
  const form = `  <form action="/register" method="POST" style="text-align: center; color: gold; background-color: black; border: gold 1rem solid;">
  <input type="text" name="name" id="name" placeholder="Enter name">
  <br>
  <br>
  <input type="email" name="email" id="email" placeholder="Enter email">
  <br>
  <br>
  <input type="password" name="password" id="pass" placeholder="Enter Password">
  <br>
  <br>
  <input type="submit" value="Login">
  <a href="/">Home</a>
</form>`;
  res.send(form);
});
//the post method to fetch the data from the form
app.post("/register", function(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let pass = req.body.password;
  //console.log(name,email,pass)
  let user1 = [];
  let user_data = {
    name: name,
    email: email,
    password: pass
  };
  user1.push(user_data);
  let user_post = JSON.stringify(user1);
  fs.appendFile("./user.js", user_post, function(err) {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Server Error");
    }
    res.redirect("./login");
  });
});
//settin up the register route
//the get method to display the register from
app.get("/login", function(req, res) {
  const log_form = `<form action="/login" method="POST" style="text-align: center; color: gold; background-color: black; border: gold 1rem solid;">
  <input type="email" name="email" id="email" placeholder="Enter email">
  <br>
  <br>
  <input type="password" name="password" id="pass" placeholder="Enter Password">
  <br>
  <br>
  <input type="submit" value="Login">
  <a href="/">Home</a>
</form>`;
  res.send(log_form);
});
//the post method to login
app.post("/login", function(req, res) {
  let email = req.body.email;
  let pass = req.body.password;
  if (!email || !pass) return res.redirect("/login");
  var check = user.find(function(ch) {
    return ch.email === email && ch.password === pass;
  });
  if (!check) return res.redirect("/login");
  req.session.userid = check.name;
  return res.redirect("/home");
});

//setting up the home route
app.get("/home", middleware.authenticate, function(req, res) {
  let u_name = req.session.userid;
  const display = `  <div style="text-align: center; color: gold; background-color: black; border: gold 1rem solid;">
  <h1>Welcome To your first Session <strong>${u_name}</strong></h1>
  <br>
  <form action="/logout?logout=DELETE" method="POST">
  <input type="submit" value="LogOut">
  </form>
</div>`;
  res.send(display);
});
//setting up the logout
app.delete("/logout", function(req, res) {
  req.session.destroy();
  return res.redirect("/login");
});

//setting the port
app.listen(8080);
