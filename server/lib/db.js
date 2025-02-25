import pkg from 'pg';
const { Pool } = pkg;

let connection;

export async function connectToDatabase() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new Pool({
    connectionString: process.env.CONNECT_STRING,
  });

  const client = await pool.connect();
  console.log('Connected to database');

  client.release();

  global.connection = pool;
  return pool.connect();
}
