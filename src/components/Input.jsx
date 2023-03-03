import React from 'react';

export const Input = ({ type, value, testId, handleOnChange }) => {
  return (
    <input type={type} name="name" value={value} data-testid={testId} onChange={handleOnChange} />
  );
};
