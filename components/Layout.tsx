/* eslint-disable react/destructuring-assignment */
import React from 'react';

import useDarkMode from 'hooks/useTheme';
import { SunIcon, MoonIcon } from 'components/Icons';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children } : LayoutProps) {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="layout-background">
      <div className="nav">
        <h1 className="heading pl-4">HTN Frontend App</h1>
        <button type="button" className="absolute dark:text-white text-black p-2 m-2 right-0 inset-y-0" onClick={() => setTheme(colorTheme)}>
          {colorTheme === 'light' ? (<MoonIcon />) : (<SunIcon />)}
        </button>

      </div>

      <main>{children}</main>
    </div>
  );
}
