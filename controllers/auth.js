const User = require("../")

const register = (req, res) => {
  res.render("auth/register.ejs")
};


const registerUser =async (req, res) => {
    const userInDatabase =await User.findOne({ username: req.body.username});
  // Handle request
};

module.exports = {
  register,
  registerUser,
};