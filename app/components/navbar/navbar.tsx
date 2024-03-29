'use client';
import React, { useEffect, useState } from 'react';
import Conditional from './conditional';
import Link from 'next/link';
import ThemeSwitch from './themeswitch';
import MobileNav from './mobile';

const NavBar = () => {
  const [pathname, setPathname] = useState<string>('');
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  return (
    <>
      {pathname === '/' ? (
        <nav className='follow:invisible visible flex h-[60px] items-end justify-between border-b border-light-container pb-2 dark:border-dark-container'>
          <section className='flex items-center gap-6'>
            <Conditional />
          </section>
          <span className='flex gap-6'>
            <ThemeSwitch />
            <MobileNav />
          </span>
        </nav>
      ) : (
        <nav className='flex h-[60px] items-end justify-between border-b border-light-container pb-2 dark:border-dark-container'>
          <section className='flex items-center gap-6'>
            <Conditional />
          </section>
          <span className='flex gap-6'>
            <ThemeSwitch />
            <MobileNav />
          </span>
        </nav>
      )}
    </>
  );
};

export default NavBar;
