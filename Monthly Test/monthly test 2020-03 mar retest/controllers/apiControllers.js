const User = require("../models/Users")
const Forum = require("../models/Forums")
const Thread = require("../models/Threads")

module.exports = {
  postSignup: function (req, res) {
    req.session.userId = null;
    var user = new User({ ...req.body });
    user
      .save()
      .then(function (user) {
        req.session.userId = user._id;
        req.session.userName=user.name
        console.log("signed up successfully")
        res.redirect("/allforums");
      })
      .catch(function (err) {
        console.log(err);
        if (err.name === "ValidationError")
          return res.status(400).send(`Validation Error: ${err.message}`);
      });
  },

  postLogin: function (req, res) {
    req.session.userId = null;
    var email = req.body.email;
    var password = req.body.password;
    if (!email || !password)
      return res.status(400).send("Incorrect credentials");
    User.findByEmailAndPassword(email, password)
      .then(function (user) {
        req.session.userId = user._id;
        req.session.userName=user.name
        console.log("logged in successfully")
        res.redirect("/allforums");
      })
      .catch(function (err) {
        console.log(err.message);
        res.redirect("/login");
      });
  },

  logout: function (req, res) {
    req.session.destroy();
    return res.redirect("/");
  },

  postCreateForum: function (req, res) {
    var forum = new Forum({ 
      title:req.body.title,
      description:req.body.description,
      user:req.session.userId
     });
    forum
      .save()
      .then(function (forum) {
        console.log("forum created successfully")
        res.redirect("/allforums");
      })
      .catch(function (err) {
        console.log(err);
        if (err.name === "ValidationError")
          return res.status(400).send(`Validation Error: ${err.message}`);
      });
  },

  postCreateThread: function (req, res) {
    var thread = new Thread({ 
      question:req.body.question,
      user:req.session.userId,
      forum:req.params.id
     });
    thread
      .save()
      .then(function (forum) {
        console.log("thread created successfully")
        res.redirect(`/view-threads/${forum}`);
      })
      .catch(function (err) {
        console.log(err);
        if (err.name === "ValidationError")
          return res.status(400).send(`Validation Error: ${err.message}`);
      });
  }
  
}