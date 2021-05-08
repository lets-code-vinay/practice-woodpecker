const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiControllers");
// const authenticate = require("../middlewares/authenticate");

router.post("/signup",apiController.postSignup);
router.post("/login",apiController.postLogin);
router.delete("/logout",apiController.logout);
router.post("/create-forum",apiController.postCreateForum);
router.post("/create-thread/:id",apiController.postCreateThread);

module.exports=router;