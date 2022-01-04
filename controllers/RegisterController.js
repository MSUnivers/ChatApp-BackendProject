const User = require('../models/User')

async function registerUser(req, res, next){
    const newUser = await User.create({
        username: 'Dilshod',
        password: '123'
    }).then()
}