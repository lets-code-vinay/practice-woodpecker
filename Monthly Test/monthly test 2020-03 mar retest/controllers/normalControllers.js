const Forum = require("../models/Forums")
module.exports = {
  renderSignup: function (req, res) {
    if (req.session.userId) res.redirect("/allforums")
    res.render("signup")
  },

  renderLogin: function (req, res) {
    if (req.session.userId) res.redirect("/allforums")
    res.render("login")
  },

  renderAllForums:function (req,res){
    Forum.find({}).then(function(forums){
      return res.render("allforums",{
        loggedIn:req.session.userId,
        userName:req.session.userName,
        forums:forums
      })
    })
  },
  renderCreateForum:function (req,res){
    
    res.render("createforum",{
      userName:req.session.userName,
      loggedIn:req.session.userId
    })
  },
  renderViewForum:function (req,res){
    var test= "disabled";
    Forum.findById(req.params.id).then(function(forum){
      if(req.session.userId) test=null;
      return res.render("viewforum",{
        loggedIn:req.session.userId,
        userName:req.session.userName,
        forum:forum,
        test:test
        
      })
    })
  },
  renderViewThreads:function(req,res){
    Thread.findById(req.params.forum-id).then(function(threads){
      return res.render("viewthreads",{
        loggedIn:req.session.userId,
        userName:req.session.userName,
        threads:threads
      })
    })
  }

}