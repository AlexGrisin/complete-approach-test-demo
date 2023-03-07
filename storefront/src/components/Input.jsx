import './input.css';

// The following component is an example of your existing Input Component
export const Input = ({ type, label, testId, register, required }) => (
  <label className={'input-label'}>
    {label}
    <input type={type} data-testid={testId} {...register(label, { required })} />
  </label>
);
