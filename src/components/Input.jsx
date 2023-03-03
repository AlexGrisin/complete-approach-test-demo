import React from 'react';

export const Input = ({ labelName, type, value, testId, handleOnChange }) => {
  return (
    <label>
      {labelName}
      <input type={type} name="name" value={value} data-testid={testId} onChange={handleOnChange} />
    </label>
  );
};
