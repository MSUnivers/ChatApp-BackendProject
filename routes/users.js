const express = require("express");
const router = express.Router();

const {
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    addUser,
    validateUser} = require("../controllers/UserController");
  
  router.route("/").get(getUsers).post(validateUser, addUser);
  
  router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);
  
  module.exports = router;