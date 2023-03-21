import React, { FC } from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  color?: string;
  className?: string;
  iconLeft?: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ children, className, iconLeft }) => {
  return (
    <button
      className={`bg-gray-100 px-6 py-3 rounded-full font-medium transition-transform hover:-translate-y-0.5 group ${className}`}
    >
      {iconLeft && <div className="mr-2 inline-block group-hover:animate-shake">{iconLeft}</div>}
      {children}
    </button>
  );
};

export default Button;
