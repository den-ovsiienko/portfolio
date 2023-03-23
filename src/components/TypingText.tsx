'use client';

import React, { FC } from 'react';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import ReactDomServer from 'react-dom/server';
import GraphemeSplitter from 'grapheme-splitter';
import {
  TypingTextOption,
  TypingTextVariant,
  typingTextOptions,
  typingTextVariants,
} from '@/utils/typingTextVariants';

type TypingTextProps = {
  onInit?: (typewriter: TypewriterClass) => void;
  cursorClassName?: string;
  autostart?: boolean;
  variant?: TypingTextVariant;
  loop?: boolean;
  delay?: number | 'natural';
};
const stringSplitter = (string: string) => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(string);
};

const TypingText: FC<TypingTextProps> = ({
  onInit,
  cursorClassName,
  autostart,
  variant,
  loop = false,
  delay = 'natural'
}) => {
  const typeInit = variant ? typingTextVariants[variant] : undefined;
  const typeOptions =
    variant && variant in typingTextOptions
      ? typingTextOptions[variant as TypingTextOption]
      : {};
  return (
    <Typewriter
      onInit={onInit || typeInit}
      options={{
        loop: loop,
        autoStart: autostart ? autostart : true,
        cursorClassName: cursorClassName
          ? cursorClassName
          : 'text-4xl animate-cursor',
        stringSplitter: stringSplitter as any,
        delay: delay,
        ...typeOptions,
      }}
    />
  );
};

export default TypingText;
