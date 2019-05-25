const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
var mysql = require('mysql');

exports.categories_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`category`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};


exports.categories_create_get = function(req,res) {
    sql = " SELECT categoryName FROM Baseis2019.category;"
    db.query(sql, (err,results)=>{
        if(err) throw err;
        res.render('insert_category_Form',{item : results});
    });
};


exports.categories_create_post = function(req,res){ //den paizei
    let sql = `INSERT INTO Baseis2019.category (categoryName) ` +
    `  VALUES ('${req.body.categoryName}');`;
    console.log(`category name is ${req.body.categoryName}`);
    db.query(sql, (err,results)=>{
        if(err) throw err;
        if (req.body.supercategoryName != "none"){
            console.log(`supercategory is ${req.body.supercategoryName}`);
            let sql = `UPDATE Baseis2019.category SET supercategoryName = '${req.body.supercategoryName}' WHERE categoryName = '${req.body.categoryName}';`;
             db.query(sql, (err,results2)=>{
                if(err) throw err;
                res.render('successful_action', {action : 'inserted' , type: 'a category'});
            });
        }else{
            res.render('successful_action', {action : 'inserted' , type: 'a category'});
        }
    })
    
};



exports.categories_update_get = function(req,res){
    res.send('categories_update_get');
}

exports.categories_update_post = function(req,res){
    res.send('categories_update_post');
}

exports.categories_delete_get = function(req,res){
    res.send('categories_delete_get');
}

exports.categories_delete_post = function(req,res){
    res.send('categories_delete_post');
}