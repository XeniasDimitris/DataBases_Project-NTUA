const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.borrows_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`borrows`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.borrows_create_get = function(req,res){
    res.send('not implemented: borrows_create GET');
};

exports.borrows_create_post = function(req,res){
    res.send('not implemented: borrows_create POST')
};

exports.borrows_update_get = function(req,res){
    res.send('borrows_update_get');
}

exports.borrows_update_post = function(req,res){
    res.send('borrows_update_post');
}

exports.borrows_delete_get = function(req,res){
    res.send('borrows_delete_get');
}

exports.borrows_delete_post = function(req,res){
    res.send('borrows_delete_post');
}