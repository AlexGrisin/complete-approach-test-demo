export async function handleLogin(userName, password) {
  if (!userName || !password) {
    return { statusMessage: 'Login error!', isError: true };
  } else {
    const response = await fetch(`${process.env.REACT_APP_API_SERVER}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userName, password: password }),
    });
    const result = await response.json();
    return { statusMessage: result.statusMessage, isError: !(result.statusCode === 200) };
  }
}
