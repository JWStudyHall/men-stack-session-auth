const { Router } = require("express");
const controllers = require("../controllers/auth.js");

const router = Router();

// Put all auth routes here
router.get("/register", controllers.signIn);
router.post("/register", controllers.registerUser);
router.get("/login", controllers.login);
router.post("login", controllers.loginUser);

module.exports = router;
