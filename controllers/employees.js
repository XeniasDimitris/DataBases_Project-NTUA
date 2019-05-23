const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.employees_list = function(req,res){
    var sql = ' SELECT EFirst,ELast,salary FROM `Baseis2019`.`employee`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.send(results);
        //res.render('show', {table : path.basename(__filename,'.js'), items : results});
    });
};

exports.employees_create_get = function(req,res){
    res.send('not implemented: employees_create GET');
};

exports.employees_create_post = function(req,res){
    res.send('not implemented: employees_create POST')
};

exports.employees_update_get = function(req,res){
    res.send('employees_update_get');
}

exports.employees_update_post = function(req,res){
    res.send('employees_update_post');
}

exports.employees_delete_get = function(req,res){
    res.send('employees_delete_get');
}

exports.employees_delete_post = function(req,res){
    res.send('employees_delete_post');
}