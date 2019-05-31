function createDatabase(db) {
    // table member
    sql = 'CREATE TABLE `Baseis2019`.`member` ( `memberID` INT NOT NULL  AUTO_INCREMENT , `MFirst` VARCHAR(50) NOT NULL ,'+ 
        '`MLast` VARCHAR(50) NOT NULL , `Street` VARCHAR(50) NOT NULL , `number` INT NOT NULL, `postalCode` INT  '+
        ' NOT NULL , `Mbirthdate` VARCHAR(10) NOT NULL , PRIMARY KEY (`memberID`)) ENGINE = InnoDB';
    db.query(sql,(err,results)=>{
        if (err) throw err1;
    });

    // table Book
    sql = 'CREATE TABLE `Baseis2019`.`Book` ( `ISBN` VARCHAR(50) NOT NULL , `title` VARCHAR(30) NOT NULL , `pubYear` INT NOT NULL ,' +
        '`numpages` INT NOT NULL , `pubName` VARCHAR(50) NOT NULL , PRIMARY KEY (`ISBN`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err2;
    });

    // table author
    sql = 'CREATE TABLE `Baseis2019`.`author` ( `authID` INT NOT NULL AUTO_INCREMENT , `AFirst` VARCHAR(50) NOT NULL , ' +
        '`ALast` VARCHAR(50) NOT NULL , `Abirthdate` VARCHAR(10) NOT NULL , PRIMARY KEY (`authID`)) ENGINE = InnoDB';
    db.query(sql,(err,results)=>{
        if (err) throw err3;
    });

    // table category
    sql = 'CREATE TABLE `Baseis2019`.`category` ( `categoryName` VARCHAR(50) NOT NULL , `supercategoryName` VARCHAR(50) ' +
        ', PRIMARY KEY (`categoryName`)) ENGINE = InnoDB';
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
    sql = 'CREATE TABLE `Baseis2019`.`publisher` ( `pubName` VARCHAR(50) NOT NULL , `estYear` VARCHAR(4) , `street` VARCHAR(50) NOT '+
        'NULL , `number` INT UNSIGNED NOT NULL , `postalCode` INT NOT NULL , PRIMARY KEY (`pubName`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err6;
    });

    // table employee
    sql = 'CREATE TABLE `Baseis2019`.`employee` ( `empID` INT NOT NULL AUTO_INCREMENT , `EFirst` VARCHAR(50) NOT NULL , `ELast` '+
        'VARCHAR(50) NOT NULL , `salary` INT UNSIGNED NOT NULL, `type` VARCHAR(50) NOT NULL, `information` VARCHAR(50) NOT NULL, PRIMARY KEY (`empID`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err7;
    });

    // table permanent_employee
    sql = 'CREATE TABLE `Baseis2019`.`permanent_employee` ( `empID` INT NOT NULL , `HiringDate` VARCHAR(30) NOT NULL , PRIMARY KEY (`empID`)) '+
        'ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err8;
    });

    // table temporary_employee
    sql = 'CREATE TABLE `Baseis2019`.`temporary_employee` ( `empID` INT NOT NULL , `ContactNumb` INT NOT NULL , PRIMARY KEY (`empID`)) '+
        'ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err9;
    });

    // table borrows
    sql = 'CREATE TABLE `Baseis2019`.`borrows` ( `memberID` INT NOT NULL , `ISBN` VARCHAR(30) NOT NULL , `copyNr` INT NOT NULL , `date_of_borrowing` '+
        'VARCHAR(10) NOT NULL , date_must_be_returned VARCHAR(10) ,`date_of_return` VARCHAR(10) DEFAULT NULL, PRIMARY KEY (`memberID`, `ISBN`, `copyNr`, `date_of_borrowing`)) ENGINE = InnoDB;';
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
        '`date_of_borrowing` VARCHAR(30) NOT NULL , `date_of_reminder` VARCHAR(30) NOT NULL , PRIMARY KEY (`empID`, `memberID`, `ISBN`, `copyNr`, `date_of_borrowing`, '+
        '`date_of_reminder`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{
        if (err) throw err12;
    });

    // table written_by
    sql = 'CREATE TABLE `Baseis2019`.`written_by` ( `ISBN` VARCHAR(30) NOT NULL , `authID` INT NOT NULL , PRIMARY KEY (`ISBN`, `authID`)) ENGINE = InnoDB;';
    db.query(sql,(err,results)=>{``
        if (err) throw err13;
    });


}

module.exports.createDatabase = createDatabase;