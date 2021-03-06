const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
var fs = require('fs');
var css = {
     style : fs.readFileSync('public/style.css','utf8')
};

exports.permanent_employees_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`permanent_employees`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results, css : css
        });
    });
};

exports.permanent_employees_create_get = function(req,res){
    res.send('not implemented: permanent_employees_create GET');
};

exports.permanent_employees_create_post = function(req,res){
    res.send('not implemented: permanent_employees_create POST')
};

exports.permanent_employees_update_get = function(req,res){
    res.send('permanent_employees_update_get');
}

exports.permanent_employees_update_post = function(req,res){
    res.send('permanent_employees_update_post');
}

exports.permanent_employees_delete_get = function(req,res){
    res.send('permanent_employees_delete_get');
}

exports.permanent_employees_delete_post = function(req,res){
    res.send('permanent_employees_delete_post');
}