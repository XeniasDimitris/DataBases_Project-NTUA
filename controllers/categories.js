const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

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
    res.sendFile(path.join(__dirname,'../public/forms','categoryForm.html'));
};


exports.categories_create_post = function(req,res){
    let sql = `INSERT INTO Baseis2019.category (categoryName, supercategoryName ) " +
    "   VALUES ('${req.body.categoryName}', '${req.body.supercategoryName}');`;
    
    db.query(sql, (err,results)=>{
        if(err) throw err;;
        res.render('succesfull_action', {action : 'inserted' , type: 'a category'});
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