const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
var fs = require('fs');
var css = {
     style : fs.readFileSync('public/style.css','utf8')
};

exports.written_by_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`written by`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results, css : css
        });
    });
};

exports.written_by_create_get = function(req,res){
    res.send('not implemented: written_by_create GET');
};

exports.written_by_create_post = function(req,res){
    res.send('not implemented: written_by_create POST')
};

exports.written_by_update_get = function(req,res){
    res.send('written_by_update_get');
}

exports.written_by_update_post = function(req,res){
    res.send('written_by_update_post');
}

exports.written_by_delete_get = function(req,res){
    res.send('written_by_delete_get');
}

exports.written_by_delete_post = function(req,res){
    res.send('written_by_delete_post');
}