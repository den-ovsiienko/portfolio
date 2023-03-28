'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import Button from './Button';
import Emoji from './Emoji';
import { NAVBAR_HEIGHT } from '@/utils/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'About', href: '#', icon: '🙋‍♂️' },
  { name: 'Work', href: '#', icon: '💼' },
  { name: 'Project', href: '#', icon: '💻' },
  { name: 'Contact', href: '#', icon: '👋' },
];

const pathButton: { [key: string]: React.ReactNode } = {
  '/': (
    <Link href="/styleguide">
      <Button iconLeft="📕">Style Guide</Button>
    </Link>
  ),
  '/styleguide': (
    <Link href="/">
      <Button iconLeft="🏠">Home</Button>
    </Link>
  ),
};

type NavbarProps = {
  styleguide?: boolean;
};

const Navbar: FC<NavbarProps> = ({ styleguide }) => {
  const prevScrollRef = useRef<number>(0);
  const pathname = usePathname();

  const [visible, setVisible] = useState(true);
  const visibleRef = useRef<boolean>(visible);

  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef<boolean>(scrolled);

  const toggleVisible = (visible: boolean) => {
    setVisible(visible);
    visibleRef.current = visible;
  };

  const toggleScrolled = (scrolled: boolean) => {
    setScrolled(scrolled);
    scrolledRef.current = scrolled;
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    // Handle Visible
    if (
      currentScrollPos > prevScrollRef.current &&
      currentScrollPos > NAVBAR_HEIGHT &&
      visibleRef.current
    ) {
      toggleVisible(false);
    } else if (
      currentScrollPos < prevScrollRef.current &&
      !visibleRef.current
    ) {
      toggleVisible(true);
    }
    prevScrollRef.current = currentScrollPos;

    // Handle Scrolled
    if (currentScrollPos > 0 && !scrolledRef.current) {
      toggleScrolled(true);
    } else if (currentScrollPos === 0 && scrolledRef.current) {
      toggleScrolled(false);
    }
  };

  useEffect(() => {
    if (styleguide) return;
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const items = navigation.map((item) => (
    <Button key={item.name} iconLeft={item.icon} variant="tertiary">
      {item.name}
    </Button>
  ));

  return (
    <>
      <motion.nav
        className={` z-50 h-[${NAVBAR_HEIGHT}px] ${
          styleguide ? 'shadow-md' : 'fixed'
        } flex w-full ${scrolled ? 'shadow-md border-indigo-500' : ''}}`}
        initial={{ y: -NAVBAR_HEIGHT }}
        animate={{ y: visible ? 0 : -NAVBAR_HEIGHT }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex w-full flex-row justify-between p-5 max-w-screen-2xl mx-auto gap-2 items-center">
          <Emoji className="text-xl" icon="</>" />
          <div className="flex-row gap-6 hidden md:flex">{items}</div>
          {!!pathButton[pathname] && pathButton[pathname]}
        </div>
      </motion.nav>
      {/* {!styleguide && <div style={{ height: NAVBAR_HEIGHT }} />} */}
    </>
  );
};

export default Navbar;
