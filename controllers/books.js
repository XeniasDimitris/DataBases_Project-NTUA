const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
var fs = require('fs');
var css = {
     style : fs.readFileSync('public/style.css','utf8')
};

exports.books_list = function(req,res){
    var sql = ' SELECT b.ISBN ,b.title, c.copyNr as CopyNumber, c.shelf, b.numpages, b.pubYear AS Publish_Year, a.AFirst AS Author_First_Name, a.ALast AS Author_Last_Name, b.pubName AS Publisher_Name FROM Baseis2019.Book b INNER JOIN Baseis2019.copies c ON c.ISBN=b.ISBN INNER JOIN Baseis2019.written_by w ON w.ISBN = b.ISBN INNER JOIN Baseis2019.author a ON a.authID = w.authID  ORDER BY b.title  ';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results, css : css
        });
    });
};


exports.books_create_get = function(req,res){
    var sql1 = '(SELECT AFirst, ALast FROM Baseis2019.author ORDER BY ALast)';
    var sql2 = '(SELECT categoryName FROM Baseis2019.category ORDER BY categoryName)';  
    var sql3 = '(SELECT pubName FROM Baseis2019.publisher ORDER BY pubName)';
    db.query(sql1,(err,results1)=>{
        if (err) throw err;
        db.query(sql2,(err,results2)=>{
            if (err) throw err;
            db.query(sql3,(err,results3)=>{
                if (err) throw err;
                res.render('insert_book_form', { row1 : results1, row2 : results2, row3 : results3, css : css});
            });
        });
    });
};

exports.books_create_post = function(req,res){ 
    var authorname = (req.body.oldAuthor).split(" ");
    var AFirst = authorname[0];
    var ALast = authorname[1];
    var category = req.body.oldcategoryName;
    var publisher =  req.body.oldPublisher;
    if (req.body.authorExists == 'no') {
        var AFirst = req.body.newAFirst;
        var ALast = req.body.newALast;
        var sql = `INSERT INTO Baseis2019.author(authID, AFirst, ALast, Abirthdate) VALUES (NULL, '${req.body.newAFirst}', '${req.body.newALast}', '${req.body.Abirthdate}');`;
        db.query(sql,(err,results)=>{
            if (err) throw err;
        });
    }
    
    
    if (req.body.categoryExists == 'no') {
        var category = req.body.newcategoryName;
        var sql = `INSERT INTO Baseis2019.category(categoryName) VALUES ('${req.body.newcategoryName}');`;
        db.query(sql,(err,results)=>{
            if (err) throw err;
        });
        if (req.body.supercategoryName != 'none') {
            var sql = `UPDATE Baseis2019.category SET supercategoryName = '${req.body.supercategoryName}' WHERE categoryName = '${req.body.newcategoryName}';`;
            db.query(sql,(err,results)=>{
                if (err) throw err;
            });
        };
    };
    if (req.body.publisherExists == 'no') {
        var publisher = req.body.newpubName;
        var sql = `INSERT INTO Baseis2019.publisher(pubName, estYear, street, number, postalCode ) VALUES ('${req.body.newpubName}', '${req.body.estYear}', '${req.body.street}', '${req.body.number}', '${req.body.postalCode}');`;
        db.query(sql,(err,results)=>{
            if (err) throw err;
        });  
    };

    var sql = `INSERT INTO Baseis2019.Book(ISBN, title, pubYear, numpages, pubName) VALUES ('${req.body.ISBN}', '${req.body.title}', '${req.body.pubYear}', '${req.body.numpages}', '${publisher}');`;
    db.query(sql,(err,results)=>{
        if (err) throw err;
        var sql1 = `INSERT INTO Baseis2019.belongs_to(ISBN, categoryName) VALUES ('${req.body.ISBN}', '${category}');`;
        db.query(sql1,(err,results)=>{
            if (err) throw err;
        });
        var sql2 = `SELECT authID FROM Baseis2019.author WHERE ALast = '${ALast}' AND AFirst = '${AFirst}';`;
        db.query(sql2,(err,results)=>{
            if (err) throw err;
            var sql3 = `INSERT INTO Baseis2019.written_by(ISBN, authID) VALUES ('${req.body.ISBN}', '${results[0].authID}');`;
            db.query(sql3,(err,results)=>{
                if (err) throw err;
            });
        });
        res.render('successful_action', {action : 'inserted' , type: 'a book', css : css});   
    });


};




exports.books_update_get = function(req,res){
    res.send('books_update_get');
}

exports.books_update_post = function(req,res){
    res.send('books_update_post');
}

exports.books_delete_get = function(req,res){
    sql = "SELECT ISBN FROM Baseis2019.Book";
    db.query(sql, (err,results)=>{
        if(err) throw err;
        res.render('delete_book_form', {item : results, css : css});
    });
    
}

exports.books_delete_post = function(req,res){ 
    let sql = `DELETE FROM Baseis2019.Book  WHERE ISBN = '${req.body.ISBN}' `;    
    db.query(sql, (err,results)=>{
        if(err) throw err;
       res.render('successful_action', {action : 'deleted' , type: 'a book', css : css}); 
    });
}