const mysql=require('mysql2');
const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodejs-tuts',
    password:'abc'
});

module.exports=pool.promise();