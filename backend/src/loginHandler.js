const { getUserByUserName } = require('../server/queries/user');

async function validateCredentials(credentials) {
  if (!credentials || !credentials.user || !credentials.password) {
    return { statusCode: 404, statusMessage: 'Login failed: missing credentials', user: {} };
  }

  const user = await getUserByUserName(credentials.user);
  if (!user || !checkUserPassword(user, credentials.password)) {
    return { statusCode: 400, statusMessage: 'Login failed: bad credentials', user: {} };
  }
  const userData = { firstName: user.firstName, lastName: user.lastName };
  if (checkUserPassword) return { statusCode: 200, statusMessage: 'Login success', user: userData };
}

function checkUserPassword(user, password) {
  return user.password === password;
}

module.exports = { validateCredentials };
