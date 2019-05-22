const mysql = require('mysql');
const fillDatabase = require('./filldatabase');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root'  
});

db.connect((err)=>{
    if (err) { 
        throw err;
    }
    console.log('MySQL Connecteeeed');
});

function CreateDatabase(){
    var sql = 'DROP DATABASE IF EXISTS Baseis2019'
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'CREATE DATABASE Baseis2019';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table member
    sql = 'CREATE TABLE `Baseis2019`.`member` ( `memberID` INT NOT NULL AUTO_INCREMENT , `MFirst` VARCHAR(50) NOT NULL ,'+ 
        '`MLast` VARCHAR(50) NOT NULL , `Street` VARCHAR(50) NOT NULL , `number` INT UNSIGNED NOT NULL , `postalCode` INT UNSIGNED'+
         ' NOT NULL , `Mbirthdate` DATE NOT NULL , PRIMARY KEY (`memberID`)) ENGINE = InnoDB';
    db.query(sql,(err,results)=>{
        if (err) throw err1;
    });

    // table Book
    sql = 'CREATE TABLE `Baseis2019`.`Book` ( `ISBN` VARCHAR(50) NOT NULL , `title` VARCHAR(30) NOT NULL , `pubYear` INT UNSIGNED NOT NULL ,' +
        '`numpages` INT UNSIGNED NOT NULL , `pubName` VARCHAR(50) NOT NULL , PRIMARY KEY (`ISBN`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err2;
    });

    // table author
    sql = 'CREATE TABLE `Baseis2019`.`author` ( `authID` INT NOT NULL AUTO_INCREMENT , `AFirst` VARCHAR(50) NOT NULL , ' +
        '`ALast` VARCHAR(50) NOT NULL , `Abirthdate` DATE NOT NULL , PRIMARY KEY (`authID`)) ENGINE = InnoDB';
    db.query(sql,(err,results)=>{
        if (err) throw err3;
    });

    // table category
    sql = 'CREATE TABLE `Baseis2019`.`category` ( `categoryName` VARCHAR(50) NOT NULL , `supercategoryName` VARCHAR(50) ' +
        'NOT NULL , PRIMARY KEY (`categoryName`)) ENGINE = InnoDB';
    db.query(sql,(err,results)=>{
        if (err) throw err4;
    });

    // table copies
    sql = 'CREATE TABLE `Baseis2019`.`copies` ( `ISBN`  VARCHAR(30) NOT NULL , `copyNr` INT NOT NULL , `shelf` INT NOT NULL , PRIMARY'+
           ' KEY (`ISBN`, `copyNr`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err5;
    });

    // table publisher
    sql = 'CREATE TABLE `Baseis2019`.`publisher` ( `pubName` VARCHAR(50) NOT NULL , `estYear` INT NOT NULL , `street` VARCHAR(50) NOT '+
        'NULL , `number` INT UNSIGNED NOT NULL , `postalCode` INT NOT NULL , PRIMARY KEY (`pubName`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err6;
    });

    // table employee
    sql = 'CREATE TABLE `Baseis2019`.`employee` ( `empID` INT NOT NULL AUTO_INCREMENT , `EFirst` VARCHAR(50) NOT NULL , `ELast` '+
        'VARCHAR(50) NOT NULL , `salary` INT UNSIGNED NOT NULL , PRIMARY KEY (`empID`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err7;
    });

    // table permanent_employee
    sql = 'CREATE TABLE `Baseis2019`.`permanent_employee` ( `empID` INT NOT NULL , `HiringDate` DATE NOT NULL , PRIMARY KEY (`empID`)) '+
        'ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err8;
    });

    // table temporary_employee
    sql = 'CREATE TABLE `Baseis2019`.`temporary_employee` ( `empID` INT NOT NULL , `HiringDate` DATE NOT NULL , PRIMARY KEY (`empID`)) '+
        'ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err9;
    });

    // table borrows
    sql = 'CREATE TABLE `Baseis2019`.`borrows` ( `memberID` INT NOT NULL , `ISBN` VARCHAR(30) NOT NULL , `copyNr` INT NOT NULL , `date_of_borrowing` '+
        'DATE NOT NULL , `date_of_return` DATE NOT NULL , PRIMARY KEY (`memberID`, `ISBN`, `copyNr`, `date_of_borrowing`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err10;
    });

    // table belongs_to
    sql = 'CREATE TABLE `Baseis2019`.`belongs_to` ( `ISBN` VARCHAR(30) NOT NULL , `categoryName`  VARCHAR(50) NOT NULL , PRIMARY KEY (`ISBN`, `categoryName`)) '+
        'ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err11;
    });

    // table reminder 
    sql = 'CREATE TABLE `Baseis2019`.`reminder` ( `empID` INT NOT NULL , `memberID` INT NOT NULL , `ISBN` VARCHAR(30) NOT NULL , `copyNr` INT NOT NULL , '+
        '`date_of_borrowing` DATE NOT NULL , `date_of_reminder` DATE NOT NULL , PRIMARY KEY (`empID`, `memberID`, `ISBN`, `copyNr`, `date_of_borrowing`, '+
        '`date_of_reminder`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err12;
    });

    // table written_by
    sql = 'CREATE TABLE `Baseis2019`.`written_by` ( `ISBN` VARCHAR(30) NOT NULL , `authID` INT NOT NULL , PRIMARY KEY (`ISBN`, `authID`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err13;
    });

    // put Foreign Keys in tables
    sql = 'ALTER TABLE `Baseis2019`.`Book` ADD FOREIGN KEY (`pubName`) REFERENCES `publisher`(`pubName`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err14;
    });
    sql = 'ALTER TABLE `Baseis2019`.`category` ADD FOREIGN KEY (`supercategoryName`) REFERENCES `category`(`categoryName`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err15;
    });
    sql = 'ALTER TABLE `Baseis2019`.`copies` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err16;
    });
    sql = 'ALTER TABLE `Baseis2019`.`permanent_employee` ADD FOREIGN KEY (`empID`) REFERENCES `employee`(`empID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err17;
    });
    sql = 'ALTER TABLE `Baseis2019`.`temporary_employee` ADD FOREIGN KEY (`empID`) REFERENCES `employee`(`empID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err18;
    });
    sql = 'ALTER TABLE `Baseis2019`.`borrows` ADD FOREIGN KEY (`memberID`) REFERENCES `member`(`memberID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err19;
    });
    sql = 'ALTER TABLE `Baseis2019`.`borrows` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err20;
    });
    sql = 'ALTER TABLE `Baseis2019`.`borrows` ADD FOREIGN KEY (`ISBN`, `copyNr`) REFERENCES `copies`(`ISBN`, `copyNr`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err21;
    });
    sql = 'ALTER TABLE `Baseis2019`.`belongs_to` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err22;
    });
    sql = 'ALTER TABLE `Baseis2019`.`belongs_to` ADD FOREIGN KEY (`categoryName`) REFERENCES `category`(`categoryName`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err23;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`empID`) REFERENCES `employee`(`empID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err24;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`memberID`) REFERENCES `member`(`memberID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err25;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE RESTRICT ON UPDATE RESTRICT;'
    db.query(sql,(err,results)=>{
        if (err) throw err26;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`memberID`, `ISBN`, `copyNr`, `date_of_borrowing`) REFERENCES `borrows`(`memberID`, `ISBN`, `copyNr`, `date_of_borrowing`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err27;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`ISBN`, `copyNr`) REFERENCES `copies`(`ISBN`, `copyNr`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err28;
    });
    sql = 'ALTER TABLE `Baseis2019`.`written_by` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err29;
    });
    sql = 'ALTER TABLE `Baseis2019`.`written_by` ADD FOREIGN KEY (`authID`) REFERENCES `author`(`authID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err30;
    });
    console.log('Database created');
    
};

function FillDatabase(){
    fillDatabase.fillDatabase(db);
}

module.exports.CreateDatabase = CreateDatabase();
module.exports.FillDatabase = FillDatabase();