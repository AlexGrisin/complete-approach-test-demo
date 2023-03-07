import React, { useState } from 'react';
import { TextField } from './TextField';
import { useForm } from 'react-hook-form';
import './input.css';
import { Input } from './Input';

export const LoginForm = ({ handleLogin }) => {
  const [form, setForm] = useState({ message: 'aa', isError: false });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    if (!data.username || !data.password) {
      setForm({ statusMessage: 'Login error!', isError: true });
    } else {
      setForm({ statusMessage: 'Login success!', isError: false });
    }
    // const result = await handleLogin(data.username, data.password);
    // setForm(result);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" label="username" testId="login" register={register} />
      {/* {errors.username && <div data-testid="username-error">This field is required</div>} */}
      <Input type="password" label="password" testId="password" register={register} />
      {/* {errors.password && <div data-testid="password-error">This field is required</div>} */}
      <label className={'input-label'}>
        <input type="submit" value="Submit" data-testid="submit" />
      </label>
      <TextField text={form?.statusMessage} isError={form.isError} testId="login-status" />
    </form>
  );
};
