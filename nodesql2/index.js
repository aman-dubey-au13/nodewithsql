// const mysql = require('mysql');
// const validators = require('./validators');
const express = require('express');
const connection = require("./db-connection");
var app = express();

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({extended:true})); //Parse URL-encoded bodies




app.get('/', function (req, res) {
    // console.log(req)
    // console.log("health check");
    res.send("welcome my sql")
});






app.get('/crmusermaster', function (req, res) {
    console.log(req);
    connection.query('select * from crm_user_master', function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

 //rest api to get a single employee data
app.get('/crmusermaster/:id', function (req, res) {
    // console.log(req);
    connection.query('select * from crm_user_master where id=?', [req.params.id], function (error, results, fields) {
       if (error) throw error;  
       res.status(200).json({
           status: 'success',
           data: results
       })
     });
 });

 app.post('/crmusermaster', function (req, res) {
    var postData  = req.body;
    connection.query('INSERT INTO crm_user_master SET ?', postData, function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });

 //rest api to update record into mysql database
app.put('/crmusermaster', function (req, res) {
    connection.query('UPDATE `crm_user_master` SET `name`=?,`email`=?,`mobile`=?,`dept_id`=?,`supervisor_id`=?,`status`=? where `id`=?', [req.body.name,req.body.email, req.body.mobile,req.body.dept_id,req.body.supervisor_id,req.body.status,req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end(JSON.stringify(results));
     });
 });


 //rest api to delete record from mysql database
app.delete('/crmusermaster', function (req, res) {
    // console.log(req.body);
    connection.query('DELETE FROM `crm_user_master` WHERE `id`=?', [req.body.id], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });




app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

