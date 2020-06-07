const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const users = require('../controllers/user.controller')

// Register User
router.post("/register-user",[
    check('name')
        .not()
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage('Name must be atleast 3 characters long'),
    check('email', 'Email is required')
        .not()
        .isEmpty(),
    check('password', 'Password should be between 5 to 8 characters long')
        .not()
        .isEmpty()
        .isLength({ min: 5, max: 8 })
], users.signup);
   
// Sign-in
router.post("/signin", users.signin);

// Retrieve all Users
router.get('/', users.findall);

// Retrieve a single User by Id
router.get('/user-profile/:id', users.findOne);

// Update User
router.put('/update-user/:id', users.update)

// Delete User
router.delete('/delete-user/:id', users.delete);

module.exports = router;
