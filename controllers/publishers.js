const database = require('./../configuration/database');
const db = database.db;
const path = require('path');

exports.publishers_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`publisher`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results
        });
    });
};

exports.publishers_create_get = function(req,res){
    res.sendFile(path.join(__dirname,'../public/forms/insertForm','publisherForm.html'));
};

exports.publishers_create_post = function(req,res){ //dn paizei
    let sql = `INSERT INTO Baseis2019.publisher (pubName, estYear, street, number, postalCode) VALUES ('${req.body.pubName}', '${req.body.estYear}', ` +
     ` '${req.body.street}', '${req.body.number}', '${req.body.postalcode}');`; 
    db.query(sql, (err,results)=>{
        if(err) throw err;;
        res.render('succesfull_action', {action : 'inserted' , type: 'a publisher'});
    })
    
};


exports.publishers_update_get = function(req,res){
    res.send('publishers_update_get');
}

exports.publishers_update_post = function(req,res){
    res.send('publishers_update_post');
}

exports.publishers_delete_get = function(req,res){
    res.sendFile(path.join(__dirname,'../public/forms/deleteForm','publisherDForm.html'));
}

exports.publishers_delete_post = function(req,res){
    res.send('publishers_delete_post');
}