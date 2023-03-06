import React, { useState } from 'react';
import { Input } from './Input';
import { TextField } from './TextField';

export const LoginForm = ({ handleLogin }) => {
  const [form, setForm] = useState({ message: 'aa', isError: false });
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    async function isLoggedIn() {
      if (!userName || !password) {
        setForm({ statusMessage: 'Login error!', isError: true });
      } else {
        setForm({ statusMessage: 'Login success!', isError: false });
        // const result = await handleLogin(userName, password);
        // setForm(result);
      }
    }
    isLoggedIn();
  };

  const handleNameChange = e => {
    setUserName(e.target.value.trim());
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelName="Login:"
        type="text"
        value={userName}
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
      <TextField text={form?.statusMessage} isError={form.isError} testId="login-status" />
    </form>
  );
};
