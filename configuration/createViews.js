function createViews(db) {
    //Views


    sql = "CREATE VIEW Baseis2019.`InfoEmployee`  AS " +
    " SELECT empID,EFirst,ELast,type FROM Baseis2019.employee ";
    db.query(sql,(err,results)=>{
        if (err) throw err35;
        console.log('View created');
    });

    sql = "CREATE VIEW Baseis2019.Authors_Statistics AS SELECT " +
    " a.AFirst , a.ALast, COUNT(w.ISBN) FROM Baseis2019.author a INNER JOIN Baseis2019.written_by w ON a.authID = w.authID GROUP BY a.authID;"; 
    db.query(sql,(err,results)=>{
        if (err) throw err35;
        console.log('View created');
    });
//STATISTICS

// CREATE VIEW cntbooks AS
// SELECT COUNT (*) 
// FROM borrows

// CREATE VIEW cntemp AS
// SELECT COUNT(*)
// FROM employee

// CREATE VIEW cntmemb AS
// SELECT COUNT(*)
// FROM member

// CREATE VIEW cntpub AS
// SELECT COUNT(*)
// FROM publisher

//posa antitipa exei kathe vivlio
// CREATE VIEW shelfBook AS
// SELECT book.title,copies.copyNr
// FROM book,copies
// WHERE (
// copies.ISBN = book.ISBN )

}




module.exports.createViews = createViews;


