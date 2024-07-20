const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'my-trail',
  password: 'sudheer',
  port: 5432,
});

module.exports = pool;
