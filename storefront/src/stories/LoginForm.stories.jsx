import React from 'react';
import { LoginForm } from '../components/LoginForm';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { MemoryRouter } from 'react-router';

export default {
  title: 'DemoApp/LoginForm',
  component: LoginForm,
  parameters: {
    fetchMock: {
      mocks: [
        {
          matcher: {
            url: 'http://localhost:3001/login',
          },
          response: {
            status: 200,
            body: {
              statusCode: 200,
              statusMessage: 'Login success',
              user: { firstName: 'first', lastName: 'last' },
            },
            headers: {
              'Content-Type': 'application/json',
            },
          },
        },
      ],
    },
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = args => <LoginForm {...args} />;

export const Empty = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('login'), 'email@provider.com');
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
  await userEvent.click(canvas.getByTestId('submit'));

  await expect(canvas.getByTestId('login-status')).toHaveClass('text-field--success');
};

export const NoUserForm = Template.bind({});
NoUserForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('password'), 'password');
  await userEvent.click(canvas.getByTestId('submit'));

  await expect(canvas.getByTestId('login-status').textContent).toContain('error');
};

export const NoPasswordForm = Template.bind({});
NoPasswordForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('login'), 'email@provider.com');
  await userEvent.click(canvas.getByTestId('submit'));

  await expect(canvas.getByTestId('login-status').textContent).toContain('error');
};
