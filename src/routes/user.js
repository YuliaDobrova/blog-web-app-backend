//Import the Express
const express = require("express");
const router = express.Router();
const { signupUser, loginUser } = require("../controllers/user");

//create Routers
router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;
