const express = require("express");
const router = express.Router()
const User = require('../models/SignInModel')
const bcrypt = require("bcrypt")

router.post('/login', async(req, res) => {
    // const saltPassword = await bcrypt.genSalt(10)
    // const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    const signedInUser = new User({
        
        email: req.body.email,
        password: req.body.password
        
    })
    signedInUser.save()
        .then(data => {
            res.json(data)
        })
        .then(err => {
            res.json(err)
        })

})






module.exports = router;
