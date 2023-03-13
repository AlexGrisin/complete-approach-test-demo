const { getUser } = require('./userHandler');

function validateCredentials(credentials) {
  if (!credentials || !credentials.user || !credentials.password) {
    return { statusCode: 404, statusMessage: 'Login failed: missing credentials', user: {} };
  }
  if (credentials.user.includes('invalid') || credentials.password.includes('invalid')) {
    return { statusCode: 400, statusMessage: 'Login failed: bad credentials', user: {} };
  }
  return { statusCode: 200, statusMessage: 'Login success', user: getUser() };
}

module.exports = { validateCredentials };
