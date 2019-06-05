const database = require('./../configuration/database');
const db = database.db;
const path = require('path');
const {validationResult} = require('express-validator/check');
var fs = require('fs');
var css = {
     style : fs.readFileSync('public/style.css','utf8')
};

exports.employees_list = function(req,res){
    var sql = ' SELECT * FROM `Baseis2019`.`InfoEmployee`';
    db.query(sql,(err,results)=>{
        if (err) throw err;
        res.render('show_data', {
            table : path.basename(__filename,'.js'), 
            item : results, css : css
        });
    });
};

exports.employees_create_get = function(req,res){
    res.sendFile(path.join(__dirname,'../public/forms/insertForm', 'employeeForm.html'));
};

exports.employees_create_post = function(req,res){
    let sql =`INSERT INTO Baseis2019.employee (empID, EFirst, ELast, Salary, type, Information) VALUES (NULL, '${req.body.EFirst}', '${req.body.ELast}', ${req.body.Salary}, '${req.body.type}', '${req.body.Information}')` ;
    db.query(sql, (err,results)=>{
        if(err) throw err;
        res.render('successful_action', {action : 'inserted' , type: 'employee', css : css});
    })
};

exports.employees_update_get = function(req,res){
  //  res.sendFile(path.join(__dirname,'../views', 'updateEmployee.ejs'));   
}

exports.employees_update_post = function(req,res){
    sql = "SELECT * FROM Baseis2019.employee";
    db.query(sql, (err,results)=>{
        if(err) throw err;
        res.render('updateEmployee', {item : results, css : css});
    });
}

exports.employees_delete_get = function(req,res){
    sql = "SELECT empID FROM Baseis2019.employee";
    db.query(sql, (err,results)=>{
        if(err) throw err;
        res.render('delete_employee_form', {item : results, css : css});
    });
}

exports.employees_delete_post = function(req,res){
    let sql = `DELETE FROM Baseis2019.employee  WHERE empID = '${req.body.empID}' `;    
    db.query(sql, (err,results)=>{
        if(err) throw err;
       res.render('successful_action', {action : 'deleted' , type: 'an employee', css : css}); 
    });
}