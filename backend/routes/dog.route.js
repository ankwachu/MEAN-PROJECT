const express = require('express');
const router = express.Router();
const dogs = require('../controllers/dog.controller')
const auth = require('../middlewares/auth')

// Create a new Dog
router.post('/', auth, dogs.create);
 
// Retrieve all Dog
router.get('/', auth, dogs.findAll);

// Retrieve a single Dog by Id
router.get('/:id', auth, dogs.findOne);

// Update a Dog with Id
router.put('/:id', auth, dogs.update);

// Delete a Dog with Id
router.delete('/:id', auth, dogs.delete);

module.exports = router;