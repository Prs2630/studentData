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

router.get('/displaystudent', async(req, res) => {
    
    let students=await Student.find();
    if(students.length>0){
     res.send(students)
    }
    else{
     res.send({result:"no students found"})
    }
 
 })
 




module.exports = router;
