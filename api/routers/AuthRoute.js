const express = require('express');
const router = express.Router();
const User = require('./../models/User');

router.post('/login', async function (req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(404).json('user not found');

        const validPassword = user.password === req.body.password;
        !validPassword && res.status(400).json('wrong password');

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;