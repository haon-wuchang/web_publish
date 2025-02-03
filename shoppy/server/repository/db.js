/*
    1. DB 연동 라이브러리 호출(mysql2) => DB서버주소, USER , PASSWORD, PORT 
*/
import mysql from 'mysql2';


const pool = mysql.createPool({
    host: 'localhost', 
    port: 3306,
    user: 'root', // mysql 설치시 준 이름 
    password: 'mysql1234',
    database: 'hrdb2019',
    })


export const db = pool.promise();



