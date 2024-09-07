// db.js
const { Pool } = require('pg');
require('dotenv').config();

//const pool = new Pool({
//  connectionString: process.env.DATABASE_URL,
//});

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',  // or the IP address where PostgreSQL is running
    database: 'userData',
    password: '4005',
    port: 5433,          // default PostgreSQL port
  });

module.exports = pool;

