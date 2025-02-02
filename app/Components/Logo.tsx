'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import logo from '@/media/SimliLogoV2.svg';
import cn from '@/app/utils/TailwindMergeAndClsx';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const SimliHeaderLogo = ({ className, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async () => {
    console.log('Clicked Simli logo', pathname);
    window.open('https://www.simli.com/?utm_source=vitorbruno.com&utm_medium=banner&utm_campaign=VitorBruno.Com');
  };

  return (
    <div className={cn('fixed top-[32px] left-[32px] cursor-pointer', className)} onClick={handleClick}>
      <Image src={logo} className='Logo' alt='Simli logo' />
    </div>
  );
};

export default SimliHeaderLogo;
