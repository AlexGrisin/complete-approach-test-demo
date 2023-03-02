import React from 'react';
import { LoginForm } from '../components/LoginForm';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Example/LoginForm',
  component: LoginForm
};

const Template = (args) => <LoginForm {...args}/>;

export const Empty = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('login'), 'email@provider.com');
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
  await userEvent.click(canvas.getByTestId('submit'));

  await expect(
    canvas.getByTestId('login-status').textContent
  ).toContain('success');
}