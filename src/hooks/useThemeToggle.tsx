import React, { useEffect, useState } from 'react';
import Image from 'next/image';


const useThemeToggle = () => {

  const [icon, setIcon] = useState('/dark_mode.svg');
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const html = document.documentElement;

    const toggleTheme = () => {
      html.classList.toggle('dark');
      setIcon(html.classList.contains('dark') ? '/light_mode.svg' : '/dark_mode.svg');
      
    };

    const button = buttonRef.current;
    button?.addEventListener('click', toggleTheme);

    return () => {
      button?.removeEventListener('click', toggleTheme);
    };
  }, []);
  return {icon, buttonRef};
};

 
  const ThemeToggle = () => {
    const {icon, buttonRef } = useThemeToggle();

    return (
    <button ref= {buttonRef} id="theme-button" className='flex border-transparent w-10 h-10 rounded-lg justify-center items-center hover:bg-violet-300 hover:scale-125 dark:hover:bg-blue-800 dark:hover:invert'>
        <Image
            className=" dark:invert"
            src={icon}
            alt="darkmode toggle"
            width={24}
            height={24}
            priority
          />

    </button>
    );

  }
  

export default ThemeToggle;