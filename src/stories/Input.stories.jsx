import React from 'react';
import { Input } from '../components/Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'LoginApp/Input',
  component: Input,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  labelName: 'Login:',
  type: 'text',
  value: 'text',
};

export const Password = Template.bind({});
Password.args = {
  labelName: 'Password:',
  type: 'password',
  value: 'password',
};

export const Submit = Template.bind({});
Submit.args = {
  type: 'submit',
  value: 'submit',
};
