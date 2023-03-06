import React from 'react';
import { TextField } from '../components/TextField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'DemoApp/TextField',
  component: TextField,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <TextField {...args} />;

export const Success = Template.bind({});
Success.args = {
  text: 'Success',
  isError: false,
};

export const Failure = Template.bind({});
Failure.args = {
  text: 'Failure',
  isError: true,
};
