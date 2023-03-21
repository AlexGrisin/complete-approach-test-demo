const { createUser } = require('../server/mutations/user');
const { getUserByUserName } = require('../server/queries/user');

async function registerCustomer(userData) {
  if (!userData || Object.keys(userData).length === 0) {
    return { statusCode: 400, statusMessage: 'User data is not provided' };
  }

  const user = await getUserByUserName(userData.userName);
  if (user) {
    return { statusCode: 400, statusMessage: 'User already exists' };
  }

  const result = await createUser(userData);
  if (result) {
    return { statusCode: 200, statusMessage: 'All good' };
  } else {
    return { statusCode: 400, statusMessage: 'Something went wrong' };
  }
}

module.exports = { registerCustomer };
