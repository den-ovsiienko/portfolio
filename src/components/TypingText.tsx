'use client';

import React, { FC } from 'react';
import Typewriter, { Options, TypewriterClass } from 'typewriter-effect';
import ReactDomServer from 'react-dom/server';
import GraphemeSplitter from 'grapheme-splitter';
import {
  TypingTextOption,
  TypingTextVariant,
  typingTextOptions,
  typingTextVariants,
} from '@/utils/typingTextVariants';

interface TypingTextProps extends Partial<Options> {
  onInit?: (typewriter: TypewriterClass) => void;
  cursorClassName?: string;
  autostart?: boolean;
  variant?: TypingTextVariant;
  loop?: boolean;
  delay?: number | 'natural';
  onTypeEnd?: () => void;
}
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
  delay = 'natural',
  onTypeEnd,
  ...options
}) => {
  const typeInit = variant ? typingTextVariants[variant] : undefined;
  const typeOptions =
    variant && variant in typingTextOptions
      ? typingTextOptions[variant as TypingTextOption]
      : {};

  const handleInit = (typewriter: TypewriterClass) => {
    if (onInit) {
      onInit(typewriter);
    } else if (typeInit) {
      typeInit(typewriter);
    }
    if (onTypeEnd) {
      typewriter.callFunction(() => onTypeEnd());
    }
  };
  return (
    <Typewriter
      onInit={handleInit}
      options={{
        loop: loop,
        autoStart: autostart ? autostart : true,
        cursorClassName: `text-4xl animate-cursor ${cursorClassName}`,
        stringSplitter: stringSplitter as any,
        delay: delay,
        ...typeOptions,
      }}
    />
  );
};

export default TypingText;
