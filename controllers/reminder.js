const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.reminder_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`reminder`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.reminder_create_get = function(req,res){
    res.send('not implemented: reminder_create GET');
};

exports.reminder_create_post = function(req,res){
    res.send('not implemented: reminder_create POST')
};

exports.reminder_update_get = function(req,res){
    res.send('reminder_update_get');
}

exports.reminder_update_post = function(req,res){
    res.send('reminder_update_post');
}

exports.reminder_delete_get = function(req,res){
    res.send('reminder_delete_get');
}

exports.reminder_delete_post = function(req,res){
    res.send('reminder_delete_post');
}