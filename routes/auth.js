const { Router } = require("express");
const controllers = require("../controllers/auth.js");

const router = Router();

// Put all auth routes here
router.get("/register", controllers.signIn);
router.post("/register", controllers.registerUser)

module.exports = router;