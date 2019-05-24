const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
const {validationResult} = require('express-validator/check');

exports.members_list = function(req,res){
    var sql = ' SELECT  *  FROM `Baseis2019`.`member`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.members_create_get = function(req,res){
    res.sendFile(path.join(__dirname,'../public/forms', 'member_form.html'));
};

exports.members_create_post = function(req,res){
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render('unsuccesfull_action', { action : 'inserted' ,type :'a member' ,errors : errors, thepath : '/insert/members'});
    }
    let sql =`INSERT INTO Baseis2019.member (memberID, MFirst, MLast, Street, number, postalCode, Mbirthdate) VALUES (NULL, '${req.body.MFirst}', '${req.body.MLast}', '${req.body.Street}', ${req.body.number}, '${req.body.postalCode}', '${req.body.Mbirthdate}')` ;
    console.log(sql);
    db.query(sql, (err,results)=>{
        if(err) throw err;
        res.render('succesfull_action', {action : 'inserted' , type: 'member'});
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