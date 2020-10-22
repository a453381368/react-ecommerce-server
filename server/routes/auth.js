const express = require("express");
const router = express.Router();

const {
    signup,
    signin,
    signout,
    requireSignin,
} = require("../controllers/auth");
const {
    userSignupValidator,
    userSignupValidationResult,
} = require("../validator");

// routes
router.post("/signup", userSignupValidator, userSignupValidationResult, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
