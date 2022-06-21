const express = require("express");
const router = express.Router()
const Student = require('./../models/Studentmodel')
const bcrypt = require("bcrypt")

router.post('/student', async(req, res) => {
    
    const addStudent = new Student({
        fullname: req.body.fullname,
        email: req.body.email,
        age:req.body.age,
        education:req.body.education,
        DOB:req.body.DOB

        
    })
    addStudent.save()
        .then(data => {
            res.json(data)
        })
        .then(err => {
            res.json(err)
        })

})




module.exports = router;
