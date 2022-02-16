/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import useDarkMode from 'hooks/useTheme';
import { SunIcon, MoonIcon, HTNIcon } from 'components/Icons';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children } : LayoutProps) {
  const [colorTheme, setTheme] = useDarkMode();
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const logout = () => {
    if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-undef
      localStorage.setItem('htnLoggedIn', 'false');
      router.reload();
    }
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      const isloggedIn = localStorage.getItem('htnLoggedIn');
      if (isloggedIn === 'true') {
        setLoggedIn(true);
      }
    }
  });

  return (
    <div>
      <div className="nav">
        <div className="absolute left-4 inset-y-0 flex justify-center items-center">
          {
          loggedIn === true ? (
            <button type="button" className="linkButton" onClick={() => logout()}>
              Logout
            </button>
          )
            : (
              <Link href="/login">
                <button type="button" className="linkButton">
                  Login
                </button>
              </Link>
            )
        }
        </div>
        <Link href="/">
          <button type="button">
            <HTNIcon className="h-10 w-10 hover:text-white dark:hover:text-blue-500" />
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
