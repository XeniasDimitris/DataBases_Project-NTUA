const database = require('./../configuration/database');
const db = database.db;

exports.members_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`member`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.send(results);
    });
};

exports.members_create_get = function(req,res){
    res.send('not implemented: members_create GET');
};

exports.members_create_post = function(req,res){
    res.send('not implemented: members_create POST')
};

exports.members_update_get = function(req,res){
    res.send('members_update_get');
}

exports.members_update_post = function(req,res){
    res.send('members_update_post');
}

exports.members_delete_get = function(req,res){
    res.send('members_delete_get');
}

exports.members_delete_post = function(req,res){
    res.send('members_delete_post');
}