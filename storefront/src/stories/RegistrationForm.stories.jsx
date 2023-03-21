import React from 'react';
import { RegistrationForm } from '../components/RegistrationForm';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { MemoryRouter } from 'react-router';

export default {
  title: 'DemoApp/RegistrationForm',
  component: RegistrationForm,
  parameters: {
    fetchMock: {
      mocks: [
        {
          matcher: {
            url: 'http://localhost:3001/create',
          },
          response: {
            status: 200,
            body: {
              statusCode: 200,
              statusMessage: 'success',
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

const Template = args => <RegistrationForm {...args} />;

export const Empty = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('login'), 'email@provider.com');
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
  await userEvent.type(canvas.getByTestId('firstName'), 'FirstName');
  await userEvent.type(canvas.getByTestId('lastName'), 'LastName');
  await userEvent.click(canvas.getByTestId('submit'));

  await expect(canvas.getByTestId('registration-status')).toHaveClass('text-field--success');
};

export const NoUserForm = Template.bind({});
NoUserForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
  await userEvent.type(canvas.getByTestId('firstName'), 'FirstName');
  await userEvent.type(canvas.getByTestId('lastName'), 'LastName');
  await userEvent.click(canvas.getByTestId('submit'));

  await expect(canvas.getByTestId('registration-status').textContent).toContain('error');
};

export const NoPasswordForm = Template.bind({});
NoPasswordForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('login'), 'email@provider.com');
  await userEvent.type(canvas.getByTestId('firstName'), 'FirstName');
  await userEvent.type(canvas.getByTestId('lastName'), 'LastName');
  await userEvent.click(canvas.getByTestId('submit'));

  await expect(canvas.getByTestId('registration-status').textContent).toContain('error');
};

export const NoFirstNameForm = Template.bind({});
NoFirstNameForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('login'), 'email@provider.com');
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
  await userEvent.type(canvas.getByTestId('lastName'), 'LastName');
  await userEvent.click(canvas.getByTestId('submit'));

  await expect(canvas.getByTestId('registration-status').textContent).toContain('error');
};

export const NoLastNameForm = Template.bind({});
NoLastNameForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('login'), 'email@provider.com');
  await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
  await userEvent.type(canvas.getByTestId('firstName'), 'FirstName');
  await userEvent.click(canvas.getByTestId('submit'));

  await expect(canvas.getByTestId('registration-status').textContent).toContain('error');
};
