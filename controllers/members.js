const database = require('./../configuration/database');
const mysql = require('mysql');
const db = database.db;

exports.members_list = function(req,res){
    let sql = ' SELECT * FROM `Baseis2019`.`member` ';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    console.log(results);
    res.send('yes');
};

exports.members_create_get = function(req,res){
    res.send('not implemented: members_create GET');
};

exports.members_create_post = function(req,res){
    res.send('not implemented: members_create POST')
};