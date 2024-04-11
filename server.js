// criar a infraestrutura básica

const express = require('express');
const mysql = require('mysql2');

const mysql_config = require('./mysql_config');

const app = express();

app.listen(3000,()=>{
    console.log("Servidor no ar");
})

const connection = mysql.createConnection(mysql_config);
//     host: 'localhost',
//     user: 'user_bd_tasks',
//     password: 'QL0P4TDcQGB2R97Djet7vXYHggatTZE4',
//     database: 'nodejs_tasks'  
// })

// app.get('/',(req,res)=>{

// })

