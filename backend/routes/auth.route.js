const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const users = require('../controllers/user.controller')

// Register User
router.post('/signup', users.signup);
   
// Sign-in
router.post("/login", users.login);

// Retrieve all Users
router.get('/', users.findall);

// // Retrieve a single User by Id
router.get('/user-profile/:id', users.findOne);

// // Update User
// router.put('/update-user/:id', users.update)

// // Delete User
router.delete('/delete-user/:id', users.delete);

module.exports = router;
