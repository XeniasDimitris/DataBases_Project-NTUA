function createConnection() {
    const mysql = require('mysql');
    
    const db = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root'  
    });
    
    db.connect((err)=>{
        if (err) { 
            throw err;
        }
        console.log('MySQL Connected');
    });
}

module.exports.createConnection = createConnection;
