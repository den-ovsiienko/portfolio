'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';
type TextProps = {
  title: string;
  className?: string;
};

export const TypingText: FC<TextProps> = ({ title, className }) => (
  <motion.p
    variants={textContainer}
    className={`${className}`}
    initial="hidden"
    whileInView="show"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);
