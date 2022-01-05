const express = require("express");
const router = express.Router();
const { userValidators } = require('../middleware/validators');
const {getUsers, 
    getUser, 
    registerUser, 
    updateUser, 
    deleteUser, 
    loginUser} = require("../controllers/UserController");


router.route('/').get(getUsers)

router.route('/:id')
        .get(getUser)
        .put(updateUser)
        .delete(deleteUser)
    
router.route('/register').post(userValidators, registerUser);

router.route('/login').post(loginUser);

module.exports = router;