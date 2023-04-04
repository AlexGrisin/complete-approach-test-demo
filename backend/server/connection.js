const { MongoClient } = require('mongodb');

// Connection URL
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'test';

async function connect() {
  // Use connect method to connect to the server
  await client.connect();
  return client.db(dbName);
}

async function close() {
  if (client) {
    await client.close();
  }
}

module.exports = { connect, close };
