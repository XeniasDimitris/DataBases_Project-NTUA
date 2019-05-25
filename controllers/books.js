const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.books_list = function(req,res){
    var sql = ' SELECT b.ISBN,b.title, c.copyNr, c.shelf, b.numpages, b.pubYear, a.AFirst, a.ALast, b.pubName FROM Baseis2019.Book b INNER JOIN Baseis2019.copies c ON c.ISBN=b.ISBN INNER JOIN Baseis2019.written_by w ON w.ISBN = b.ISBN INNER JOIN Baseis2019.author a ON a.authID = w.authID  ORDER BY b.title  ';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};


exports.books_create_get = function(req,res){
    res.send("not implemented");
};

exports.books_create_post = function(req,res){ 
    res.send("not implemented");
    
};




exports.books_update_get = function(req,res){
    res.send('books_update_get');
}

exports.books_update_post = function(req,res){
    res.send('books_update_post');
}

exports.books_delete_get = function(req,res){
    res.sendFile(path.join(__dirname,'../public/forms/deleteForm','bookDForm.html'));
}

exports.books_delete_post = function(req,res){ //to diagrafei alla petaei error...
    console.log('Ela mitsoo');
    let sql = `DELETE FROM Baseis2019.Book  WHERE ISBN = '${req.body.ISBN}' `;    
    db.query(sql, (err,results)=>{
        if(err) throw err;
       res.render('succesful_action', {action : 'deleted' , type: 'a book'}); 
    });
}