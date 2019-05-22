const database = require('./../configuration/database');
const db = database.db;
const path = require('path');


exports.members_list = function(req,res){
    var sql = ' SELECT  memberID, MLast, MFirst  FROM `Baseis2019`.`member`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show', {table : path.basename(__filename,'.js'), items : results});
    });
};

exports.members_create_get = function(req,res){
    res.send('not implemented: members_create GET');
};

exports.members_create_post = function(req,res,next){
    let sql ='INSERT INTO `Baseis2019`.`member` (`memberID`, `MFirst`, `MLast`, `Street`, `number`, `postalCode`, `Mbirthdate`) VALUES (NULL, \'xenias\', \'dimitris\', \'agiou georgiou\', \'63\', \'13121\', \'1997-21-01\')';
    db.query(sql, (err,results)=>{
        if(err) throw err;
        console.log(results);
        next()
    })
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