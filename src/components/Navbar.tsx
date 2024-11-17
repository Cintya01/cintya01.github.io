import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className='sticky top-0'>
            <div className='flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center'>
                <div className="flex w-96 justify-between font-normal">
                    <Link className='relative block px-2 py-2 transition hover:text-purple-500 dark:hover:text-blue-500' href="/">Experiencia</Link>
                    <Link className='relative block px-2 py-2 transition hover:text-purple-500 dark:hover:text-blue-500' href="/">Proyectos</Link>
                    <Link className='relative block px-2 py-2 transition hover:text-purple-500 dark:hover:text-blue-500' href="/">Sobre mí</Link>
                    <Link className='relative block px-2 py-2 transition hover:text-purple-500 dark:hover:text-blue-500' href="/">Contacto</Link>
                    <button>
                    <Image
                        className="dark:invert"
                        src="/next.svg"
                        alt="Next.js logo"
                        width={50}
                        height={38}
                        priority
                    />
                </button>
               
                </div>
                

            </div>

        </nav>
    );
}

export default Navbar;