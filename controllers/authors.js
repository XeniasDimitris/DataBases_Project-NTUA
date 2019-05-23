const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.authors_list = function(req,res){
    var sql = ' SELECT AFirst,ALast FROM Baseis2019.author';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.authors_create_get = function(req,res){
    res.send('not implemented: authors_create GET');
};

exports.authors_create_post = function(req,res){
    res.send('not implemented: authors_create POST')
};

exports.authors_update_get = function(req,res){
    res.send('authors_update_get');
}

exports.authors_update_post = function(req,res){
    res.send('authors_update_post');
}

exports.authors_delete_get = function(req,res){
    res.send('authors_delete_get');
}

exports.authors_delete_post = function(req,res){
    res.send('authors_delete_post');
}