
require('../models/pet');

const mongoose = require('mongoose'),
    Pets = mongoose.model('Pet');

module.exports = {

    all: (req, res) => {
        Pets.find()
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    show: (req, res) => {
        Pets.findById(req.params.id)
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    create: (req, res) => {    
        Pets.create(req.body)
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    update: (req, res) => {
        Pets.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, useFindAndModifty:false})
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    destroy: (req, res) => {
        Pets.findOneAndDelete({_id: req.params.id})
            .then(results => {res.json({results: `${req.params.id} deleted.`});})
            .catch(err => res.json({errors: err.errors}));
    },

    // check: (req, res) => {
    //     Pets.findOne({name: req.params.name})
    //         .then(results => {res.json({errors: `Matching Name!!!`});
    //         console.log(result)
    //         })
    //         .catch(err => res.json({errors: err.errors}));
    // },


    // check: (req, res) => {
    //     Pets.findOne({name: req.params.name})
    //         .then(results => {res.json({results: `Matching Name!!!`});
    //         console.log(result)
    //         })
    //         .catch(err => res.json({errors: err.errors})
    //         );
    // },

}






