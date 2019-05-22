const database = require('./../configuration/database');
const db = database.db;

exports.temporary_employees_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`author`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.send(results);
    });
};

exports.temporary_employees_create_get = function(req,res){
    res.send('not implemented: temporary_employees_create GET');
};

exports.temporary_employees_create_post = function(req,res){
    res.send('not implemented: temporary_employees_create POST')
};

exports.temporary_employees_update_get = function(req,res){
    res.send('temporary_employees_update_get');
}

exports.temporary_employees_update_post = function(req,res){
    res.send('temporary_employees_update_post');
}

exports.temporary_employees_delete_get = function(req,res){
    res.send('temporary_employees_delete_get');
}

exports.temporary_employees_delete_post = function(req,res){
    res.send('temporary_employees_delete_post');
}