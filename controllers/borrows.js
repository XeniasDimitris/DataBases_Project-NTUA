const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
var fs = require('fs');
var css = {
     style : fs.readFileSync('public/style.css','utf8')
};

exports.borrows_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`borrows` ORDER BY memberID';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results, css : css
        });
    });
};

exports.borrows_create_get = function(req,res){
    var sql1 = "SELECT copies.ISBN, copies.copyNr AS copynumber, stillborrowed.copyNr AS notavailable FROM Baseis2019.copies LEFT JOIN (SELECT ISBN, copyNr FROM Baseis2019.borrows WHERE date_of_return IS NULL) stillborrowed ON copies.ISBN = stillborrowed.ISBN AND copies.copyNr = stillborrowed.copyNr";
    var sql2 = "SELECT memberID, MFirst, MLast FROM Baseis2019.member";
    db.query(sql1,(err,results1)=>{
        if (err) throw err;
        db.query(sql2,(err,results2)=>{
            if (err) throw err;
            res.render('borrow_book_form', { row1 : results1, row2 : results2, css : css});
        });
    });
};

exports.borrows_create_post = function(req,res){
    var book = (req.body.BookCopy).split(" ");
    var ISBN = book[0];
    var copy = book[1];
    var member = (req.body.member).split(" ");
    var memberID =member[0];
    var MFirst = member[1];
    var MLast = member[2];
    var sql1 = `SELECT totalcopies, expired FROM (SELECT COUNT(*) AS totalcopies FROM Baseis2019.borrows WHERE memberID = ${memberID} AND date_of_return IS NULL) copycount, (SELECT COUNT(*) AS expired FROM Baseis2019.borrows WHERE memberID = ${memberID} AND date_of_return IS NULL AND date_must_be_returned < CURDATE() ) expiredcount`;
    var sql2 = `INSERT INTO Baseis2019.borrows(memberID, ISBN, copyNr, date_of_borrowing) VALUES(${memberID}, '${ISBN}', '${copy}', CURDATE());`;
    db.query(sql1,(err,results1)=>{
        if (err) throw err;
        if (results1[0].totalcopies < 5 && results1[0].expired <= 0) {
            db.query(sql2,(err,results2)=>{
                if (err) throw err;
                res.render('successful_action', {action : 'inserted' , type: 'borrow', css : css});
            });
        } else {
            res.render('member_cannot_borrow', {row : results1, css : css});
        }
    });
};

exports.borrows_update_get = function(req,res){
    var sql = " SELECT ISBN , copyNr FROM Baseis2019.borrows WHERE date_of_return IS NULL ";
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('return_of_borrow_form', { item : results, css : css});
    })
}

exports.borrows_update_post = function(req,res){
    var splitter = req.body.borrow.split("/");
    sql = `UPDATE Baseis2019.borrows SET date_of_return = CURDATE() WHERE ISBN = '${splitter[0]}' AND copyNr = '${splitter[1]}';`;
    db.query(sql,(err,results)=>{
        if (err) err;
        res.render('successful_action',{action: "returned" ,type :"a book", css : css});
    })
}

exports.borrows_delete_get = function(req,res){
    res.send('borrows_delete_get');
}

exports.borrows_delete_post = function(req,res){
    res.send('borrows_delete_post');
}