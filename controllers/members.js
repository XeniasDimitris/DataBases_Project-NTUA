const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

const bodyParser = require('body-parser');

exports.members_list = function(req,res){
    var sql = ' SELECT  memberID, MLast, MFirst  FROM `Baseis2019`.`member`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.send(results);
        //res.render('show', {table : path.basename(__filename,'.js'), items : results});
    });
};

exports.members_create_get = function(req,res){
    res.sendFile(path.join(__dirname,'../public/', 'member_form.html'));
};

exports.members_create_post = function(req,res){
    let sql =`INSERT INTO Baseis2019.member (memberID, MFirst, MLast, Street, number, postalCode, Mbirthdate) VALUES (NULL, '${req.body.MFirst}', '${req.body.MLast}', '${req.body.Street}', ${req.body.number}, ${req.body.postalCode}, '${req.Mbirthdate}')` ;
    db.query(sql, (err,results)=>{
        if(err) throw err;;
        res.sendFile(path.join(__dirname,'../public/insertConfirmation.html'));
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