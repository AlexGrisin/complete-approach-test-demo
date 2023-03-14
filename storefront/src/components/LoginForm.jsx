import React, { useContext, useState } from 'react';
import { Input } from './Input';
import { TextField } from './TextField';
import './form.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const LoginForm = () => {
  const [form, setForm] = useState({ message: '', isError: false });
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    async function isLoggedIn() {
      if (!userName || !password) {
        setForm({ statusMessage: 'Login error!', isError: true });
      } else {
        fetch(`${process.env.REACT_APP_API_SERVER}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user: userName, password: password }),
        })
          .then(response => response.json())
          .then(result => {
            setForm({
              statusMessage: result.statusMessage,
              isError: !(result.statusCode === 200),
            });
            setUser(result.user);
            navigate('/account');
          })
          .catch(error => {
            console.log(error);
            setForm({ statusMessage: 'Login error!', isError: true });
          });
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
