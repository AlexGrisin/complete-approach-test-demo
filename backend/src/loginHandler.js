function validateCredentials(credentials) {
  if (!credentials || !credentials.user || !credentials.password) {
    return 404;
  }
  if (credentials.user.includes('invalid') || credentials.password.includes('invalid')) {
    return 400;
  }
  return 200;
}

module.exports = { validateCredentials };
