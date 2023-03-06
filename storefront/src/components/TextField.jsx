import React from 'react';
import './textField.css';

export const TextField = ({ text, testId, isError }) => {
  return (
    <div
      className={['text-field', `text-field--${isError ? 'error' : 'success'}`].join(' ')}
      data-testid={testId}
    >
      {text}
    </div>
  );
};
