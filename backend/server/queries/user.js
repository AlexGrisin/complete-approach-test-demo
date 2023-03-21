const { connect, close } = require('../connection');
const customers = require('../database');

async function getUsers() {
  let user = {};
  try {
    const db = await connect();
    const collection = db.collection('customers');
    user = await collection.find({}).toArray();
    console.log('Found documents =>', user);
  } catch (e) {
    console.log(e);
    await close();
  }
  return user;
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
