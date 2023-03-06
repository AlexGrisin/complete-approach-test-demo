import React from 'react';
import './input.css';

export const Input = ({ labelName, type, value, testId, handleOnChange }) => {
  return (
    <label className={'input-label'}>
      {labelName}
      <input type={type} name="name" value={value} data-testid={testId} onChange={handleOnChange} />
    </label>
  );
};
