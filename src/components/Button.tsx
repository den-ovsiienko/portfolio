import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: 'primary' | 'tertiary' | 'outlined';
}

const buttonVariants = {
  primary: 'bg-primary text-button-text',
  // secondary: 'bg-primary-secondary text-button-secondary-text',
  tertiary: 'bg-transparent text-button-text',
  outlined: 'bg-transparent text-button-text border-2',
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  iconLeft,
  iconRight,
  variant = 'primary',
  ...rest
}) => {
  return (
    <button
      className={`px-6 py-3 rounded-full font-medium transition-transform active:translate-y-0.5 group hover:underline ${buttonVariants[variant]} ${className}`}
      {...rest}
    >
      {iconLeft && (
        <div className="mr-2 inline-block group-hover:animate-shake my-auto">
          {iconLeft}
        </div>
      )}
      {children}
      {iconRight && (
        <div className="ml-2 inline-block group-hover:animate-shake my-auto">
          {iconRight}
        </div>
      )}
    </button>
  );
};

export default Button;
