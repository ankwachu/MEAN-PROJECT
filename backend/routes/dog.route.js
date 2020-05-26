const express = require('express');
const router = express.Router();
const dogs = require('../controllers/dog.controller')

// Create a new Dog
router.post('/', dogs.create);
 
// Retrieve all Dog
router.get('/', dogs.findAll);

// Retrieve a single Dog by Id
router.get('/:id', dogs.findOne);

// Update a Dog with Id
router.put('/:id', dogs.update);

// Delete a Dog with Id
router.delete('/:id', dogs.delete);

module.exports = router;