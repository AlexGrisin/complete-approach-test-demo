import React, { useState } from 'react';
import { Input } from './Input';
import { TextField } from './TextField';
import './form.css';
import { useNavigate } from 'react-router-dom';

export const RegistrationForm = () => {
  const [form, setForm] = useState({ message: '', isError: false });
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    async function submitRegistration() {
      if (!userName || !password || !firstName || !lastName) {
        setForm({ statusMessage: 'Registration error!', isError: true });
      } else {
        fetch(`${process.env.REACT_APP_API_SERVER}/create`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userName, password, firstName, lastName }),
        })
          .then(response => response.json())
          .then(result => {
            const isError = !(result.statusCode === 200);
            setForm({
              statusMessage: result.statusMessage,
              isError: isError,
            });
            if (!isError) {
              console.log(result);
              navigate('/success');
            }
          })
          .catch(error => {
            console.log(error);
            setForm({ statusMessage: 'Login error!', isError: true });
          });
      }
    }
    submitRegistration();
  };

  const handleUserNameChange = e => {
    setUserName(e.target.value.trim());
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = e => {
    setFirstName(e.target.value.trim());
  };

  const handleLastNameChange = e => {
    setLastName(e.target.value.trim());
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelName="Login:"
        type="text"
        value={userName}
        testId="login"
        handleOnChange={handleUserNameChange}
      />
      <Input
        labelName="Password:"
        type="password"
        value={password}
        testId="password"
        handleOnChange={handlePasswordChange}
      />
      <Input
        labelName="First name:"
        type="text"
        value={firstName}
        testId="firstName"
        handleOnChange={handleFirstNameChange}
      />
      <Input
        labelName="Last name:"
        type="text"
        value={lastName}
        testId="lastName"
        handleOnChange={handleLastNameChange}
      />
      <Input type="submit" value="Submit" testId="submit" />
      <TextField text={form?.statusMessage} isError={form.isError} testId="registration-status" />
    </form>
  );
};
