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
        '`MLast` VARCHAR(50) NOT NULL , `Street` TEXT NOT NULL , `number` INT UNSIGNED NOT NULL , `postalCode` INT UNSIGNED'+
         ' NOT NULL , `Mbirthdate` DATE NOT NULL , PRIMARY KEY (`memberID`)) ENGINE = InnoDB';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table Book
    sql = 'CREATE TABLE `Baseis2019`.`Book` ( `ISBN` INT NOT NULL , `title` VARCHAR(30) NOT NULL , `pubYear` INT NULL ,' +
        '`numpages` INT NOT NULL , `pubName` VARCHAR(50) NOT NULL , PRIMARY KEY (`ISBN`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table author
    sql = 'CREATE TABLE `Baseis2019`.`author` ( `authID` INT NOT NULL AUTO_INCREMENT , `AFirst` VARCHAR(50) NOT NULL , ' +
        '`ALast` VARCHAR(50) NOT NULL , `Abirthdate` DATE NOT NULL , PRIMARY KEY (`authID`)) ENGINE = InnoDB';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table category
    sql = 'CREATE TABLE `Baseis2019`.`category` ( `categoryName` VARCHAR(50) NOT NULL , `supercategoryName` VARCHAR(50) ' +
        'NOT NULL , PRIMARY KEY (`categoryName`)) ENGINE = InnoDB';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table copies
    sql = 'CREATE TABLE `Baseis2019`.`copies` ( `ISBN` INT NOT NULL , `copyNr` INT NOT NULL , `shelf` INT NOT NULL , PRIMARY'+
           ' KEY (`ISBN`, `copyNr`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table publisher
    sql = 'CREATE TABLE `Baseis2019`.`publisher` ( `pubName` VARCHAR(50) NOT NULL , `estYear` INT NOT NULL , `street` TEXT NOT '+
        'NULL , `number` INT UNSIGNED NOT NULL , `postalCode` INT NOT NULL , PRIMARY KEY (`pubName`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table employee
    sql = 'CREATE TABLE `Baseis2019`.`employee` ( `empID` INT NOT NULL AUTO_INCREMENT , `EFirst` VARCHAR(50) NOT NULL , `ELast` '+
        'VARCHAR(50) NOT NULL , `salary` INT UNSIGNED NOT NULL , PRIMARY KEY (`empID`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table permanent_employee
    sql = 'CREATE TABLE `Baseis2019`.`permanent_employee` ( `empID` INT NOT NULL , `HiringDate` DATE NOT NULL , PRIMARY KEY (`empID`)) '+
        'ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table temporary_employee
    sql = 'CREATE TABLE `Baseis2019`.`temporary_employee` ( `empID` INT NOT NULL , `HiringDate` DATE NOT NULL , PRIMARY KEY (`empID`)) '+
        'ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table borrows
    sql = 'CREATE TABLE `Baseis2019`.`borrows` ( `memberID` INT NOT NULL , `ISBN` INT NOT NULL , `copyNr` INT NOT NULL , `date_of_borrowing` '+
        'DATE NOT NULL , `date_of_return` DATE NOT NULL , PRIMARY KEY (`memberID`, `ISBN`, `copyNr`, `date_of_borrowing`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table belongs_to
    sql = 'CREATE TABLE `Baseis2019`.`belongs_to` ( `ISBN` INT NOT NULL , `categoryName`  VARCHAR(50) NOT NULL , PRIMARY KEY (`ISBN`, `categoryName`)) '+
        'ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table reminder 
    sql = 'CREATE TABLE `Baseis2019`.`reminder` ( `empID` INT NOT NULL , `memberID` INT NOT NULL , `ISBN` INT NOT NULL , `copyNr` INT NOT NULL , '+
        '`date_of_borrowing` DATE NOT NULL , `date_of_reminder` DATE NOT NULL , PRIMARY KEY (`empID`, `memberID`, `ISBN`, `copyNr`, `date_of_borrowing`, '+
        '`date_of_reminder`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // table written_by
    sql = 'CREATE TABLE `Baseis2019`.`written_by` ( `ISBN` INT NOT NULL , `authID` INT NOT NULL , PRIMARY KEY (`ISBN`, `authID`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });

    // put Foreign Keys in tables
    sql = 'ALTER TABLE `Baseis2019`.`Book` ADD FOREIGN KEY (`pubName`) REFERENCES `publisher`(`pubName`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`category` ADD FOREIGN KEY (`supercategoryName`) REFERENCES `category`(`categoryName`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`copies` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`permanent_employee` ADD FOREIGN KEY (`empID`) REFERENCES `employee`(`empID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`temporary_employee` ADD FOREIGN KEY (`empID`) REFERENCES `employee`(`empID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`borrows` ADD FOREIGN KEY (`memberID`) REFERENCES `member`(`memberID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`borrows` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`borrows` ADD FOREIGN KEY (`ISBN`, `copyNr`) REFERENCES `copies`(`ISBN`, `copyNr`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`belongs_to` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`belongs_to` ADD FOREIGN KEY (`categoryName`) REFERENCES `category`(`categoryName`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`empID`) REFERENCES `employee`(`empID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`memberID`) REFERENCES `member`(`memberID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE RESTRICT ON UPDATE RESTRICT;'
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`memberID`, `ISBN`, `copyNr`, `date_of_borrowing`) REFERENCES `borrows`(`memberID`, `ISBN`, `copyNr`, `date_of_borrowing`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`reminder` ADD FOREIGN KEY (`ISBN`, `copyNr`) REFERENCES `copies`(`ISBN`, `copyNr`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`written_by` ADD FOREIGN KEY (`ISBN`) REFERENCES `Book`(`ISBN`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    sql = 'ALTER TABLE `Baseis2019`.`written_by` ADD FOREIGN KEY (`authID`) REFERENCES `author`(`authID`) ON DELETE RESTRICT ON UPDATE RESTRICT;';
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    console.log('Database created');
    
};

function FillDatabase(){
    fillDatabase.fillDatabase(db);
}

module.exports.CreateDatabase = CreateDatabase();
module.exports.FillDatabase = FillDatabase();