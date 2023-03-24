import Image from 'next/image';
import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  image?: string;
  large?: boolean;
  full?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  large = false,
  full = false,
  className,
  ...rest
}) => {
  const showContent = title || description;
  let maxWidth = 'max-w-md';
  if (full) {
    maxWidth = 'max-w-none';
  } else if (large) {
    maxWidth = 'max-w-lg';
  }
  return (
    <div
      className={`${
        large ? 'max-w-md' : 'max-w-xs'
      } rounded overflow-hidden shadow-lg bg-overlay h-fit ${className}`}
      {...rest}
    >
      {image && <img className="w-full" src={image} alt={title} />}
      {showContent && (
        <div className="px-6 py-4">
          {title && <div className="font-bold text-xl mb-2">{title}</div>}
          {description && (
            <p className="text-gray-700 text-base">{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
