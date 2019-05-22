const database = require('./../configuration/database');
const db = database.db;

exports.books_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`books`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.send(results);
    });
};

exports.books_create_get = function(req,res){
    res.send('not implemented: books_create GET');
};

exports.books_create_post = function(req,res){
    res.send('not implemented: books_create POST')
};

exports.books_update_get = function(req,res){
    res.send('books_update_get');
}

exports.books_update_post = function(req,res){
    res.send('books_update_post');
}

exports.books_delete_get = function(req,res){
    res.send('books_delete_get');
}

exports.books_delete_post = function(req,res){
    res.send('books_delete_post');
}