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
      setForm({ message: 'Login success!', isError: false });
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
