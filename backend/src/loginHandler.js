function validateCredentials(credentials) {
  if (!credentials || !credentials.user || !credentials.password) {
    return { statusCode: 404, statusMessage: 'Login failed: missing credentials' };
  }
  if (credentials.user.includes('invalid') || credentials.password.includes('invalid')) {
    return { statusCode: 400, statusMessage: 'Login failed: bad credentials' };
  }
  return { statusCode: 200, statusMessage: 'Login success' };
}

module.exports = { validateCredentials };
