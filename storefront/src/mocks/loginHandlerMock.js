export function handleLoginMock(userName, password) {
  if (!userName || !password) {
    return { statusMessage: 'Login error!', isError: true };
  }
  if (userName.includes('invalid') || password.includes('invalid')) {
    return { statusMessage: 'Login failed: bad credentials', isError: true };
  }
  return { statusMessage: 'Login success', isError: false };
}
