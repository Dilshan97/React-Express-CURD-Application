
const express = require('express');
const businessRoutes = express.Router();

// import business model 
let Business = require('./business.model');

// define routes

//store route
businessRoutes.route('/add').post(function(req, res){
    let business = new Business(req.body);
    business.save()
        .then(business => {
            res.status(200).json({'business': 'business in added successfully'});
        })
        .catch(err => {
            res.status(400).send('unable to save data');
        });
});

//get data route
businessRoutes.route('/').get(function(req, res){
    Business.find(function(err, business){
        if(err){
            console.log(err);
        }
        else{
            res.json(business);
        }
    });
});

// edit route
businessRoutes.route('/edit/:id').get(function(req, res){
    let id = req.params.id;
    Business.findById(id, function(err, business){
        res.json(business);
    });
});

// update route
businessRoutes.route('/update/:id').post(function(req,res){
    Business.findById(req.params.id, function(err, business){
        if(!business){
            res.status(404).send("data is not found");
        }
        else{
            business.name = req.body.name;
            business.email = req.body.email;
            business.mobile = req.body.mobile;
            business.designation = req.body.designation;

            business.save().then(business => {
                res.json('Update Successfully');
            })
            .catch(err => {
                res.status(400).send("unable to update");
            });
        }
    });
});

// delete route
businessRoutes.route('/delete/:id').get(function(req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err){
            res.json(err);
        }
        else{
            res.json('Successfully Deleted');
        }
    });
});

module.exports = businessRoutes;