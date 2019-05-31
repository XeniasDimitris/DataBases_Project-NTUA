function fillDatabase(db) {

    //Author Imports
    sql = "INSERT INTO `Baseis2019`.`author` (`authID`, `AFirst`, `ALast`, `Abirthdate`) VALUES "+
    " (9566, 'Mariyam', 'Mendez', '2019-05-01'), " +
    " (9568, 'Miah', 'Goodwin', '2019-05-02'), " +
    " (9569, 'Reem', 'Odonnell', '2019-05-04'), " +
    " (9570, 'Braxton', 'Daughtery', '2019-05-05')," +
    " (9571, 'Menlinda', 'Gates', '2019-04-03'), " +
    " (9572, 'Amy', 'Neville', '2019-04-19'), " +
    " (9573, 'Naomi', 'Gloom', '2019-01-06'), " +
    " (9574, 'Nick', 'Frank', '2019-01-23'), " +
    " (9575, 'Pan', 'Biggy', '2018-08-06'), " +
    " (9576, 'Amie', 'Cassy', '2018-09-25');"
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    
    //Member Imports
    sql = "INSERT INTO `Baseis2019`.`member` (`memberID`, `MFirst`, `MLast`, `Street`, `number`, `postalCode`, `Mbirthdate`) VALUES " +
    " (1, 'Maddison', 'Houghton', 'Caerfai Bay Road', 85, 22079, '2018-09-03'), " +
    " (2, 'Declan ', ' Elliott', 'Cabell Avenue', 1608, 6320, '2019-05-09')," +
    " (3, 'Samantha', 'Miah', 'Jones Street', 4674, 76148, '2018-09-17')," +
    " (4, 'Summer ', 'Hartley', 'Saints Alley', 139, 33647, '2018-12-09')," +
    " (6, 'Katie', 'Mills', 'Cedarstone Drive', 436, 44856, '2018-12-29')," +
    " (7, 'Natasha', 'Norris', 'Linden Avenue', 1647, 32830, '2018-09-21')," +
    " (8, 'Anna', 'Donely', 'Jett Lane', 163, 15446, '2018-06-24')," +
    " (9, 'Zachary', 'Dobson', 'Ralhph Drive', 412, 65378, '2018-09-30')," +
    " (10, 'Henry', 'Jones', 'Wilson Street', 110, 55477, '2018-11-11')," +
    " (11, 'Laura', 'Dalle', 'Foley Street', 147, 21210, '2018-12-31');"
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    
    //Publisher imports
    sql = "INSERT INTO `Baseis2019`.`publisher` (`pubName`, `estYear`, `street`, `number`, `postalCode`) VALUES" +
    " ('Amber Collier', 1960, 'Coventry Court', 100, 10247)," +
    "('Ella Gardiner', 1958, 'Crummit Lane', 65, 87511)," +
    " ('Freya Carr', 1987, 'Moonglight Sonata', 56, 58745)," +
    " ('Katherine Baker', 1999, 'Elk Saint Lake', 54, 96665)," +
    " ('Keira Watson', 1935, 'Evergreen Lane', 987, 87747)," +
    " ('Kristin Schroder', 1991, 'Walkers Ridge Way', 124, 25412)," +
    " ('Lewis Wong', 1977, 'Lamberts Branch Road', 363, 74988)," +
    " ('Lola Henry', 1998, 'Hedge Bridge', 12, 69693)," +
    " ('Nicholas Bryant', 1960, 'Hallow Street', 74, 74512)," +
    " ('Yvonne Pfaff', 1974, 'Gnatty Creek Road', 545, 96696);"
    db.query(sql,(err,results)=>{
        if (err) throw err;
    });
    //Books Imports
    sql = "INSERT INTO `Baseis2019`.`Book` (`ISBN`, `title`, `pubYear`, `numpages`, `pubName`) VALUES" +
    " ('978-1-60309-013-1', 'Johny Boo', 2010, 145, 'Kristin Schroder')," +
    " ('978-1-60309-025-4', 'American Elf', 1974, 123, 'Keira Watson')," +
    " ('978-1-60309-047-6', 'August Moon', 1955, 654, 'Keira Watson')," +
    " ('978-1-60309-050-6', 'The 120 Days of Simon', 1999, 784, 'Freya Carr')," +
    " ('978-1-60309-062-9', 'March', 1992, 254, 'Katherine Baker')," +
    " ('978-1-60309-301-9', 'Hack', 1987, 363, 'Lola Henry')," +
    " ('978-1-60309-322-4', 'Apocaliptixa', 1963, 901, 'Lola Henry')," +
    " ('978-1-60309-375-0', 'Far Arden', 1978, 699, 'Katherine Baker')," +
    " ('978-1-60309-386-6', 'God is Dissapointed', 1995, 454, 'Freya Carr')," +
    " ('978-1-891830-19-8', 'Poison', 1997, 623, 'Keira Watson')," +
    " ('978-1-891830-71-6', 'AEIOU', 1963, 324, 'Yvonne Pfaff')," +
    " ('978-1-891830-75-4', '110 Repc', 1987, 456, 'Amber Collier')," +
    " ('978-1-891830-90-7', 'Korgi', 2011, 187, 'Ella Gardiner');"
    db.query(sql,(err,results)=>{
        if (err) throw err;
        console.log('Database Filled');
    });
    //Copies Imports
    sql = "INSERT INTO `Baseis2019`.`copies` (`ISBN`, `copyNr`, `shelf`) VALUES" +
        "('978-1-60309-013-1', 4, 3231)," +
        "('978-1-60309-025-4', 4, 3123)," +
        "('978-1-60309-047-6', 6, 3131)," +
        "('978-1-60309-050-6', 8, 3164)," +
        "('978-1-60309-062-9', 8, 4332)," +
        "('978-1-60309-301-9', 11, 4332)," +
        "('978-1-60309-375-0', 11, 4353)," +
        "('978-1-60309-386-6', 3, 1314)," +
        "('978-1-60309-386-6', 9, 3213)," +
        "('978-1-891830-19-8', 9, 3131)," +
        "('978-1-891830-71-6', 7, 4321)," +
        "('978-1-891830-71-6', 8, 5432)," +
        "('978-1-891830-75-4', 4, 3123)," +
        "('978-1-891830-90-7', 7, 2313);"
        db.query(sql,(err,results)=>{
            if (err) throw err;
            console.log('Database Filled');
        });
    //Employee Imports
    sql = "INSERT INTO `Baseis2019`.`employee` (`empID`, `EFirst`, `ELast`, `salary`) VALUES" +
        "(1, 'Lizette ', 'Struthers', 800)," +
        "(2, 'Dinorah', ' Corbett', 812)," +
        "(3, 'Lin ', 'Laughlin', 854)," +
        "(4, 'Donte', 'Guerero', 900)," +
        "(5, 'Monica', 'Bellucci', 10000)," +
        "(6, 'Melane', 'Craig', 950)," +
        "(7, 'Alexis', 'Navas', 850)," +
        "(8, 'Lisa', 'Rank', 680)," +
        "(9, 'Bonnie', 'Clark', 750)," +
        "(10, 'Belva', 'Bartch', 860)," +
        "(11, 'Jamila', 'Adkinson', 940)," +
        "(12, 'Hung', 'Chin', 745);"
        db.query(sql,(err,results)=>{
            if (err) throw err;
            console.log('Database Filled');
        });
    
    //Permant Employees Imports
    sql = "INSERT INTO `Baseis2019`.`permanent_employee` (`empID`, `HiringDate`) VALUES" +
        "(2, '2019-05-18')," +
        "(4, '2019-05-25')," +
        "(7, '2019-05-09')," +
        "(9, '2019-05-03')," +
        "(11, '2018-05-03')," +
        "(10, '2019-05-04');"
        db.query(sql,(err,results)=>{
            if (err) throw err;
            console.log('Database Filled');
        });
    //Temporary Employees Imports
    sql = "INSERT INTO `Baseis2019`.`temporary_employee` (`empID`, `ContactNumb`) VALUES" +
        "(1, 531432465)," +
        "(3, 212895367)," +
        "(5, 960858293)," +
        "(6, 691045898)," +
        "(8, 292998954)," +
        "(12, 604441479);"
        db.query(sql,(err,results)=>{
            if (err) throw err;
            console.log('Database Filled');
        });
    //Borrows Imports
    sql = "INSERT INTO `Baseis2019`.`borrows` (`memberID`, `ISBN`, `copyNr`, `date_of_borrowing`, `date_of_return`) VALUES" +
        "(1, '978-1-891830-19-8', 9, '2019-03-05', '2019-03-27')," +
        "(1, '978-1-891830-90-7', 7, '2019-05-02', '2019-05-11')," +
        "(2, '978-1-891830-75-4', 4, '2019-05-05', '2019-05-14')," +
        "(3, '978-1-891830-90-7', 7, '2019-02-01', '2019-04-02')," +
        "(4, '978-1-891830-75-4', 4, '2019-04-06', '2019-05-01')," +
        "(7, '978-1-60309-047-6', 6, '2019-04-15', '2019-04-30')," +
        "(10, '978-1-60309-047-6', 6, '2019-05-04', '2019-05-18');"
        db.query(sql,(err,results)=>{
            if (err) throw err;
            console.log('Database Filled');
        });
    //Category Imports
    sql = "INSERT INTO `Baseis2019`.`category` (`categoryName`, `supercategoryName`) VALUES" +
        "('Art', NULL)," +
        "('Kids', NULL)," +
        "('Mystery', NULL)," +
        "('Science', NULL)," +
        "('Drawing', 'Art')," +
        "('Music', 'Art')," +
        "('Cartoon', 'Kids')," +
        "('Comics', 'Kids')," +
        "('Adventure', 'Mystery')," +
        "('Maths', 'Science')," +
        "('Physics', 'Science');"
        db.query(sql,(err,results)=>{
            if (err) throw err;
            console.log('Database Filled');
        });
    //Belongs to Imports
    sql = "INSERT INTO `Baseis2019`.`belongs_to` (`ISBN`, `categoryName`) VALUES" +
        "('978-1-60309-013-1', 'Adventure')," +
        "('978-1-60309-025-4', 'Art')," +
        "('978-1-60309-047-6', 'Cartoon')," +
        "('978-1-60309-050-6', 'Adventure')," +
        "('978-1-60309-050-6', 'Comics')," +
        "('978-1-60309-050-6', 'Drawing')," +
        "('978-1-60309-375-0', 'Cartoon')," +
        "('978-1-60309-375-0', 'Science')," +
        "('978-1-60309-386-6', 'Kids')," +
        "('978-1-891830-19-8', 'Comics')," +
        "('978-1-891830-71-6', 'Music')," +
        "('978-1-891830-71-6', 'Science')," +
        "('978-1-891830-75-4', 'Physics')," +
        "('978-1-891830-90-7', 'Science');"
        db.query(sql,(err,results)=>{
            if (err) throw err;
            console.log('Database Filled');
        });






};

module.exports.fillDatabase = fillDatabase;