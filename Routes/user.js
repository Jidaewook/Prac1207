const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();


const userModel = require('../Models/user');
const validateRegisterInput = require('../Validation/register');
const validateLoginInput = require('../Validation/login');



router.post('/register', (req, res) => {
    
    const {errors, isValid} = validateRegisterInput(req.body);
    const {name, email, password} = req.body;

    // Check Validation
    if(!isValid){
        return res.status(400).json(errors);
    }
    userModel   
        .findOne({email})
        .exec()
        .then(user => {
            if(user){
                errors.email = 'Email already exists';
                return res.status(400).json(errros);
            }
            const newUser = new userModel({
                method: 'local',
                local: {
                    name, email, password
                }
            });
            newUser 
                .save()
                .then(user => {
                    res.status(200).json({
                        msg: 'Successful newUser',
                        userInfo: user
                    });
                })
                .catch(err => console.log(err));
        });



});

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    const {errors, isValid} = validateLoginInput(req.body);

    // Check Validation
    if(!isValid){
        return res.status(400).json(errors);
        
    }
    userModel   
        .findOne({"local.email": email})
        .then(user => {
            errors.email = 'User not found';
            return res.status(404).json(errors);
        })

        // Check password
        bcrypt  
            .compare(password, user.local.password)
            .then(isMatch => {
                if(isMatch){
                    const payload = {id: user._id, name: user.local.name, avatar: user.local.avatar};

                    // Sign Token
                    jwt.sign(
                        payload,
                        process.env.SECRET_KEY,
                        {expiresIn: 36000},
                        (err, token) => {
                            res.status(200).json({
                                success: true,
                                token: "Bearer " + token
                            });
                        }
                        
                    );
                } else {
                    errors.password = 'Password incorrect';
                    return res.status(400).json(errors);
                }
            });
})

module.exports = router;