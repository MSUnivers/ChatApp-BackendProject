const User = require("../models/User");
const {body, validationResult} = require('express-validator');

exports.validateUser = async (req, res, next) =>{[
  body("firstName")
    .notEmpty()
    .withMessage('First name is required')
    .trim(),
  body("password")
    .notEmpty()
    .equals(req.body.confirmPassword),
    body("telephone")
      .trim(),
    body("email")
      .notEmpty()
      .isEmail()
      .normalizeEmail()
      .trim()
  ]}
  
  exports.getUsers = async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  };
  
  exports.getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) throw new createError.NotFound();
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  };
  
  exports.deleteUser = async (req, res, next) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        throw new createError.NotFound()
      } else(user.deleteCount)
        res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  };
  
  exports.updateUser = async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      if(!user.matchedCount) {
        return res.send('User successfully updated');
      };
      if (user.matchedCount && !user.modifiedCount) {
        return res.send('Everything is up to date');
      };
      if (!user.modifiedCount && !user.matchedCount) {
        throw new createError.NotFound()
      } else (user.modifiedCount) 
        res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  };
  
  exports.addUser = async (req, res, next) => {
    /**validate */
    const errors = await validationResult(req);
    if (errors) 
    return next({errors: errors.array()});
  
    const {username, password } = req.body;
}