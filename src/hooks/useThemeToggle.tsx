import { useEffect } from 'react';

const useThemeToggle = () => {
  useEffect(() => {
    const buttonTheme = document.querySelector('#theme-button');
    const html = document.documentElement;

    const toggleTheme = () => {
      html.classList.toggle('dark');
    };

    buttonTheme?.addEventListener('click', toggleTheme);

    return () => {
      buttonTheme?.removeEventListener('click', toggleTheme);
    };
  }, []);
};

const ThemeToggle = () => {
  useThemeToggle();

  return <button id="theme-button" className='flex items-end border-2 rounded border-purple-300'>Toggle Theme</button>;
};

export default ThemeToggle;