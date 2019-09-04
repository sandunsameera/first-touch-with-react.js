const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'',
     database: 'mydb',
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connection succeeded');
    else
    console.log('fuck off')
});

app.listen(3000,()=>console.log('Express server is running'));

//Retrieve all users

app.get('/users',(req,res)=>{
    mysqlConnection.query('SELECT * FROM user',(err,rows,fields)=>{
       if(!err)
       res.send(rows);
       else
       console.log('fuck again');
    })
});

//delete user

app.get('/userdelete/:id',(req,res)=>{
    mysqlConnection.query('DELETE * FROM user ',(err,rows,fields)=>{
       if(!err)
       res.send(req.params.id + "deleted");
       else
       console.log('fuck again');
    })
});