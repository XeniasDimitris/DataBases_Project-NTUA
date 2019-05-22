const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.publishers_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`publisher`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show', {table : path.basename(__filename,'.js'), items : results});
    });
};

exports.publishers_create_get = function(req,res){
    res.send('not implemented: publishers_create GET');
};

exports.publishers_create_post = function(req,res){
    res.send('not implemented: publishers_create POST')
};

exports.publishers_update_get = function(req,res){
    res.send('publishers_update_get');
}

exports.publishers_update_post = function(req,res){
    res.send('publishers_update_post');
}

exports.publishers_delete_get = function(req,res){
    res.send('publishers_delete_get');
}

exports.publishers_delete_post = function(req,res){
    res.send('publishers_delete_post');
}