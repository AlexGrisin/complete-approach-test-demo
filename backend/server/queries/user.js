const { connect, close } = require('../connection');
const customers = require('../database');

async function getUsers() {
  let users = {};
  try {
    const db = await connect();
    const collection = db.collection('customers');
    users = await collection.find({}).toArray();
  } catch (e) {
    console.log(e);
    await close();
  }
  return users;
}

async function getUserByUserName(userName) {
  let user = [];
  try {
    if (process.env.NODE_ENV === 'test') {
      user = customers.filter(customer => customer.userName === userName);
    } else {
      const db = await connect();
      const collection = db.collection('customers');
      user = await collection.find({ userName }).toArray();
    }
  } catch (e) {
    console.log(e);
    await close();
  }
  return user[0];
}

module.exports = { getUsers, getUserByUserName };
