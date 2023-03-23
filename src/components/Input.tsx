import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...rest }) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-2 text-gray-700">{label}</label>}
      <input
        className={`border ${
          error ? 'border-error placeholder:text-error' : 'border-gray-300'
        } px-3 py-2 rounded-lg`}
        {...rest}
      />
      {error && <span className="text-error text-sm">{error}</span>}
    </div>
  );
};

export default Input;
