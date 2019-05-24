const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.borrows_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`borrows` ORDER BY memberID';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.borrows_create_get = function(req,res){
    res.send('not implemented: borrows_create GET');
};

exports.borrows_create_post = function(req,res){
    res.send('not implemented: borrows_create POST')
};

exports.borrows_update_get = function(req,res){
    var sql = " SELECT ISBN , copyNr FROM Baseis2019.borrows WHERE date_of_return IS NULL ";
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('return_of_borrow_form', { item : results});
    })
}

exports.borrows_update_post = function(req,res){
    var splitter = req.body.borrow.split("/");
    sql = `UPDATE Baseis2019.borrows SET date_of_return = CURDATE() WHERE ISBN = '${splitter[0]}' AND copyNr = '${splitter[1]}';`;
    db.query(sql,(err,results)=>{
        if (err) err;
        res.render('successful_action',{action: "returned" ,type :"a book"});
    })
}
