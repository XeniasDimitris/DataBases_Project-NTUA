const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
const {validationResult} = require('express-validator/check');

exports.bookauthorList = function(req,res){
    var sql = ' CREAT VIEW booksandAuthors AS'+
    ' SELECT B.title , A.AFirst, A.ALast '+
    ' FROM `Baseis2019`.`author` A , `Baseis2019`.`Book` B ';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.members_create_get = function(req,res){
   
};

exports.members_create_post = function(req,res){

};

exports.members_update_get = function(req,res){
    res.send('members_update_get');
};

exports.members_update_post = function(req,res){
    res.send('members_update_post');
};

exports.members_delete_get = function(req,res){

};

exports.members_delete_post = function(req,res){

};
