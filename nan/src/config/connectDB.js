import mysql from 'mysql2/promise';
 
const connection=  mysql.createPool({
    host:"localhost",
    user:"root",
    password: 'dinhminhthong140224',
    database: 'song',
});

export default connection;