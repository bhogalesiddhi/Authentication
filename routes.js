const express = require("express")
const router = express.Router();
const {registerUser, loginUser, updateUser, getAllUser, getUser, getProfile, getUsername} = require("./controller");
const authenticate = require("./authenticate");

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/profile").get(authenticate,getProfile)
router.route("/username").get(getUsername)
router.route("/:id").put(updateUser).get(getUser)
router.route("/getAll").get(getAllUser)


module.exports=router;