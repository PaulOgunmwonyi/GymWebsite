// db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',  
    database: 'userData',
    password: '4005',
    port: 5433,         
  });

module.exports = pool;

