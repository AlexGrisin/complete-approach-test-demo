import React, { useState } from 'react';

export const LoginForm = () => {
  let [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    setMessage('Login success')
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Login:
        <input type="text" name="name" data-testid="login" />
      </label>
      <br />
      <label>
          Password:
          <input
            type="password"
            name="name"
            data-testid="password"
          />
      </label>
      <br />
      <input type="submit" value="Submit" data-testid="submit" />
      <div data-testid="login-status">{ message }</div>
    </form>
  );
};
