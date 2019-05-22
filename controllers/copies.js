const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.copies_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`copies`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show', {table : path.basename(__filename,'.js'), items : results});
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