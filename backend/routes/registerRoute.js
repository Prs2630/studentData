const express = require("express");
const router = express.Router()
const User = require('./../models/SignUpModel')
const bcrypt = require("bcrypt")

router.post('/register', async(req, res) => {
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)
    const signedUpUser = new User({
        fullname: req.body.fullname,
        email: req.body.email,
        password: securePassword
        // reEnterPassword: req.body.reEnterPassword
    })
    signedUpUser.save()
        .then(data => {
            res.json(data)
        })
        .then(err => {
            res.json(err)
        })

})




module.exports = router;
