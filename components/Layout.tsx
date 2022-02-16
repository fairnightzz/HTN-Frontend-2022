/* eslint-disable react/destructuring-assignment */
import React from 'react';

import useDarkMode from 'hooks/useTheme';
import { SunIcon, MoonIcon } from 'components/Icons';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children } : LayoutProps) {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="layout-background">
      <div className="nav">

        <Link href="/">
          <button type="button">
            <img src="/htn.svg" className="w-10 h-10" alt="HTN" />
          </button>
        </Link>
        <h1 className="heading pl-4">HTN Frontend App</h1>
        <button type="button" className="absolute dark:text-white text-black p-2 m-2 right-4 inset-y-0" onClick={() => setTheme(colorTheme)}>
          {colorTheme === 'light' ? (<MoonIcon />) : (<SunIcon />)}
        </button>

      </div>

      <main>{children}</main>
    </div>
  );
}
