/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
// React.Dispatch<React.SetStateAction<string>>
// eslint-disable-next-line no-unused-vars
export default function useDarkMode() : [string, (theme: string) => void] {
  const [theme, setTheme] = useState('');
  let colorTheme = (theme === 'light') ? 'dark' : 'light';
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let addTheme = theme;
      const storageTheme = localStorage.getItem('htnTheme');
      if (storageTheme && theme === '') {
        addTheme = storageTheme;
        colorTheme = (addTheme === 'light') ? 'dark' : 'light';
        setTheme(addTheme);
      }
      const root = window.document.documentElement;
      root.classList.remove(colorTheme);
      root.classList.add(addTheme);
      localStorage.setItem('htnTheme', addTheme);
    }
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
