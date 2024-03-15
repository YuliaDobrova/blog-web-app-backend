//user.js

//Import Mongoose
const mongoose = require("mongoose");

//Create a schema model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
});

const User = mongoose.model("Course-User", userSchema);
//Export the Post Model
module.exports = User;
