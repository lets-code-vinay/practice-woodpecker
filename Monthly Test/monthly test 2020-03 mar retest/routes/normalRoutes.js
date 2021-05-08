const express = require("express")
const router = express.Router()
const normalController = require("../controllers/normalControllers")
const authenticate = require("../middlewares/authenticate")

router.get("/signup",normalController.renderSignup)



router.get("/login",normalController.renderLogin)
router.get("/allforums", normalController.renderAllForums)

router.get("/create-forum",authenticate,normalController.renderCreateForum)

router.get("/view-forum/:id",normalController.renderViewForum)
// router.get("/view-forum/:id" ,function(req,res){
//     res.send("i am alive")
// })
router.get("/view-threads/:forum-id",authenticate, normalController.renderViewThreads)

// router.get("/kids",
//  authenticate,
//  normalController.renderKids)

// router.get("/productdetails/:productid",
//  authenticate,
//  normalController.renderProductDetails)

// router.get("/thankyou",
//  authenticate,
//  normalController.renderThankyou)
 
//  router.get("/cart",
//   authenticate,
//   normalController.renderCart)

module.exports=router