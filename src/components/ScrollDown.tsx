'use client';

import React, { FC, useEffect, useState } from 'react';
import Emoji from './Emoji';
import { motion } from 'framer-motion';
import { motionShowProps } from '@/utils/constants';

interface ScrollDownProps extends React.HTMLAttributes<HTMLDivElement> {}
const ScrollDown: FC<ScrollDownProps> = ({...other}) => {
  const [show, setShow] = useState<boolean>(false);
  const onClick = () => {
    window.scrollTo({
      top: window.innerHeight - window.scrollY,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      if (scroll < 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    handleScroll()
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (!show) {
    return null;
  }
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      {...motionShowProps}
      whileInView={{ opacity: 1, translateX: '-50%', translateY: 0 }}
      onClick={other.onClick || onClick}
    >
      <div className="animate-bounce flex flex-col">
        <p className="tracking-widest ">Scroll Down</p>
        <Emoji className="animate-none pt-2" icon="👇" />
      </div>
    </motion.div>
  );
};

export default ScrollDown;
