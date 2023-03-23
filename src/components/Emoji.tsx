import React, { FC } from 'react';

type EmojiProps = {
  icon: string;
  className?: string;
};
const Emoji: FC<EmojiProps> = ({ icon, className }) => {
  return (
    <span className={`cursor-pointer h-fit hover:animate-shake text-4xl text-center ${className}`}>
      {icon}
    </span>
  );
};

export default Emoji;
