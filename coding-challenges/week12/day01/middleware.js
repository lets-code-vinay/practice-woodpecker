module.exports = {
  authenticate: function(req, res, next) {
    if (!req.session.userid) return res.redirect("/login");
    next()
  }
};
