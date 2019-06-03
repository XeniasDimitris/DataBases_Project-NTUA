const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
var fs = require('fs');
var css = {
     style : fs.readFileSync('public/style.css','utf8')
};

exports.copies_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`copies`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results, css : css
        });
    });
};

exports.copies_create_get = function(req,res){
    res.send('not implemented: copies_create GET');
};

exports.copies_create_post = function(req,res){
    res.send('not implemented: copies_create POST')
};

exports.copies_update_get = function(req,res){
    res.send('copies_update_get');
}

exports.copies_update_post = function(req,res){
    res.send('copies_update_post');
}

exports.copies_delete_get = function(req,res){
    res.send('copies_delete_get');
}

exports.copies_delete_post = function(req,res){
    res.send('copies_delete_post');
}