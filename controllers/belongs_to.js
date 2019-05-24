const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.belongs_to_list = function(req,res,next){
    next;
};

exports.belongs_to_create_get = function(req,res){
    res.send('not implemented: belongs_to_create GET');
};

exports.belongs_to_create_post = function(req,res){
    res.send('not implemented: belongs_to_create POST')
};
