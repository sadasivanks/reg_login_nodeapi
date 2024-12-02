//implimented by sadasivan
const mysql=require('mysql2');

//host details

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_test'
})


module.exports=pool.promise();