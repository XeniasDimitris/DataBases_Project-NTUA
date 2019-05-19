const express = require('express');
const app = express();

function openServer(){
    app.listen('3000',()=>{
        console.log('Server started on port 3000');
    });
};

module.exports.openServer = openServer; 