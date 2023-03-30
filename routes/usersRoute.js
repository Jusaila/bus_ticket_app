const router = require('express').Router();
const User = require('../models/userModel');

//Register new user

router.post('/register', async (req, res) => {

    try {
        const existingUser = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const newUser = new User(req.body);
        await newUser.save();
        res.send({
            message: "User created successfully",
            success: true,
            data: null,
        });
    }   catch (error) {
        res.send({
            message: error.message,
            success: false,
            data: null,
        });
    }
        
}); 

module.exports = router;