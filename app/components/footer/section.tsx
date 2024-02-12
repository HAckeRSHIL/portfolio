import Link from 'next/link';
import React from 'react';

const FooterSection = () => {
  return (
    <footer className='col-span-6 flex h-[60px] flex-col justify-end pb-4 pr-4 dark:border-dark-container md:flex-row'>
      <h5 className='text-end text-[10px] text-light-general dark:text-dark-general md:text-[14px]'>
        Designed and developed by Harshil Patel
      </h5>
    </footer>
  );
};

export default FooterSection;
