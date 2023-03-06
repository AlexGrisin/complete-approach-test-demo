import React, { useState } from 'react';
import { Input } from './Input';
import { TextField } from './TextField';

export const LoginForm = () => {
  const [form, setForm] = useState({ message: '', isError: false });
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    if (!name || !password) {
      setForm({ message: 'Login error!', isError: true });
    } else {
      fetch(`${process.env.REACT_APP_API_SERVER}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: name, password: password }),
      })
        .then(res => res.json())
        .then(
          result =>
            setForm({ message: result.statusMessage, isError: !(result.statusCode === 200) }),
          error => setForm({ message: `something went wrong: ${error}`, isError: true })
        );
    }
    e.preventDefault();
  };

  const handleNameChange = e => {
    setName(e.target.value.trim());
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelName="Login:"
        type="text"
        value={name}
        testId="login"
        handleOnChange={handleNameChange}
      />
      <Input
        labelName="Password:"
        type="password"
        value={password}
        testId="password"
        handleOnChange={handlePasswordChange}
      />
      <Input type="submit" value="Submit" testId="submit" />
      <TextField text={form?.message} isError={form.isError} testId="login-status" />
    </form>
  );
};
