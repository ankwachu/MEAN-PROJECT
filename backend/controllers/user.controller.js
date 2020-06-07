const User = require('../models/user.model');
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body);

    if (!errors.isEmpty()) {
        return res.status(422).json(errors.array());
    }
    else {
        bcrypt.hash(req.body.password, 10).then((hash) => {
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash
            });
            user.save().then((response) => {
                res.status(201).json({
                    message: "User successfully created!",
                    result: response
                });
            }).catch(error => {
                res.status(500).json({
                    error: error
                });
            });
        });
    }
};

exports.signin = (req, res, next) => {
    let getUser;
    User.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        let jwtToken = jwt.sign({
            email: getUser.email,
            userId: getUser._id
        }, "longer-secret-is-better", {
            expiresIn: "1h"
        });
        res.status(200).json({
            token: jwtToken,
            expiresIn: 3600,
            _id: getUser._id
        });
    }).catch(err => {
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
};

exports.findall = (req, res, next) => {
    User.find()
        .then(dogs => res.status(200).json(dogs))
        .catch(error => res.status(400).json({ error }));
};

exports.findOne = (req, res, next) => {
    User.findOne({
        _id: req.params.id
    }).then(
        (user) => {
            res.status(200).json(user);
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
    const user = new User({
        _id: req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // userId: req.body.userId
    });
    User.updateOne({ _id: req.params.id }, user).then(
        () => {
            res.status(201).json({
                message: 'User updated successfully!'
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
    User.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'User Deleted!'
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