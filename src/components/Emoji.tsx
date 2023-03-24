import React, { FC } from 'react';

type EmojiProps = {
  icon: string;
  className?: string;
  title?: string;
};
const Emoji: FC<EmojiProps> = ({ icon, className, title }) => {
  return (
    <span className={`cursor-pointer h-fit hover:animate-shake text-4xl text-center ${className}`}>
      {title && <span>{title}</span>}
      {icon}
    </span>
  );
};

export default Emoji;
