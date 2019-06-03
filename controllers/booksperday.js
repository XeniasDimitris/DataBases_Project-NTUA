const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
var fs = require('fs');
var css = {
     style : fs.readFileSync('public/style.css','utf8')
};

exports.borrowedbooksperday = function(req,res){
    var sql = 'SELECT date_of_borrowing, COUNT(ISBN) FROM `Baseis2019`.`borrows` GROUP BY date_of_borrowing, date_of_return HAVING date_of_return IS NULL';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results, css : css
        });
    });
};