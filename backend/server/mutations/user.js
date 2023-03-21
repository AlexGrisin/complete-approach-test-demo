const { connect, close } = require('../connection');
const customers = require('../database');

async function createUser(userData) {
  let user = [];
  try {
    if (process.env.NODE_ENV === 'test') {
      user = customers.filter(customer => customer.userName === userName);
    } else {
      const db = await connect();
      const collection = db.collection('customers');
      const insertResult = await collection.insertOne(userData);
      return insertResult.acknowledged;
    }
  } catch (e) {
    console.log(e);
    await close();
  }
  return user[0];
}

module.exports = { createUser };
