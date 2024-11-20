"use client";
import Link from 'next/link';
import ThemeToggle from '../hooks/useThemeToggle';
import Image from 'next/image';
import React, { useState } from 'react';



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }


    return (
        <nav className='sticky top-0 bg-white dark:bg-gray-700 '>
            <div className='hidden md:block md:w-auto p-1 text-sm font-bold text-gray-600 dark:text-gray-200 '>
                <div className="flex justify-center items-center space-x-4 mr-2">
                    <Link className='relative block rounded-lg p-2 transition hover:scale-125 hover:text-violet-500 dark:hover:text-yellow-200' href="/">Experiencia</Link>
                    <Link className='relative block rounded-lg p-2 transition hover:scale-125 hover:text-violet-500 dark:hover:text-yellow-200' href="/">Proyectos</Link>
                    <Link className='relative block rounded-lg p-2 transition hover:scale-125 hover:text-violet-500 dark:hover:text-yellow-200' href="/">Sobre mí</Link>
                    <Link className='relative block rounded-lg p-2 transition hover:scale-125 hover:text-violet-500 dark:hover:text-yellow-200' href="/">Contáctame</Link>
                    <ThemeToggle />
                </div>
            </div>
            <div className=" md:hidden flex justify-end">
            
                <button type="button" className="p-2 w-10 h-10 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false" onClick={handleClick}>
                <span className="sr-only">Open main menu</span>
                    <Image
                        className=" dark:invert"
                        src="/menu.svg"
                        alt="darkmode toggle"
                        width={24}
                        height={24}
                        priority
                    />
                </button>
            </div>
            {isOpen && (
                 
                 <div className=" md:hidden text-sm mx-4 font-bold text-gray-600 dark:text-gray-200 ">
                     <Link className='relative block py-2 transition hover:scale-110 hover:bg-yellow-100   dark:hover:text-rose-300' href="/">Experiencia</Link>
                     <Link className='relative block  py-2 transition hover:scale-110 hover:bg-yellow-100 dark:hover:text-rose-300' href="/">Proyectos</Link>
                     <Link className='relative block py-2 transition hover:scale-110 hover:bg-yellow-100 dark:hover:text-rose-300' href="/">Sobre mí</Link>
                     <Link className='relative block py-2 transition hover:scale-110 hover:bg-yellow-100 dark:hover:text-rose-300' href="/">Contacto</Link>

                 </div>
             
            )}

        </nav>
    );
}

export default Navbar;