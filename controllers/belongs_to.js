const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.belongs_to_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`belongs_to`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show', {table : path.basename(__filename,'.js'), items : results});
    });
};

exports.belongs_to_create_get = function(req,res){
    res.send('not implemented: belongs_to_create GET');
};

exports.belongs_to_create_post = function(req,res){
    res.send('not implemented: belongs_to_create POST')
};

exports.belongs_to_update_get = function(req,res){
    res.send('belongs_to_update_get');
}

exports.belongs_to_update_post = function(req,res){
    res.send('belongs_to_update_post');
}

exports.belongs_to_delete_get = function(req,res){
    res.send('belongs_to_delete_get');
}

exports.belongs_to_delete_post = function(req,res){
    res.send('belongs_to_delete_post');
}