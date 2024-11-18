"use client";
import Link from 'next/link';
import ThemeToggle from '../hooks/useThemeToggle';


// import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='bg-white dark:bg-slate-800 sticky top-0 '>
            <div className='flex p-3 text-sm font-bold space-x-2 text-gray-600 dark:text-gray-200 justify-center items-center'>
                <div className="flex space-x-2">
                    <Link className='relative block py-2 transition hover:text-purple-500 dark:hover:text-blue-500' href="/">Experiencia</Link>
                    <Link className='relative block  py-2 transition hover:text-purple-500 dark:hover:text-blue-500' href="/">Proyectos</Link>
                    <Link className='relative block py-2 transition hover:text-purple-500 dark:hover:text-blue-500' href="/">Sobre mí</Link>
                    <Link className='relative block py-2 transition hover:text-purple-500 dark:hover:text-blue-500' href="/">Contacto</Link>
                </div>

                <ThemeToggle/>

            </div>


        </nav>
    );
}

export default Navbar;