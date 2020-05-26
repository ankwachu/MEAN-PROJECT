const Dog = require('../models/dog.model');

exports.create = (req, res, next) => {
  const dog = new Dog({
    name: req.body.name,
    age: req.body.age,
    imageUrl: req.body.imageUrl,
    //   userId: req.body.userId
  });
  dog.save().then(
    () => {
      res.status(201).json({
        message: 'Dog saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.findAll = (req, res, next) => {
  Dog.find()
    .then(dogs => res.status(200).json(dogs))
    .catch(error => res.status(400).json({ error }));
};

exports.findOne = (req, res, next) => {
  Dog.findOne({
    _id: req.params.id
  }).then(
    (dog) => {
      res.status(200).json(dog);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.update = (req, res, next) => {
  const dog = new Dog({
    _id: req.params.id,
    name: req.body.name,
    age: req.body.age,
    imageUrl: req.body.imageUrl,
    // userId: req.body.userId
  });
  Dog.updateOne({_id: req.params.id}, dog).then(
    () => {
      res.status(201).json({
        message: 'Dog updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.delete = (req, res, next) => {
  Dog.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Dog Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};