import Image from "next/image";


const Hero = () => {
    return (
        <section className="my-16">
            <div className="flex my-5 ">
                <div className="w-1/5 flex justify-center items-center flex-col">
                    <Image
                        className="rounded-full"
                        src="/profile.PNG"
                        alt="Cint Foto"
                        width={150}
                        height={200}
                        priority
                    />
                </div>
                <div className="w-2/4 flex flex-col justify-center">
                    <h1 className="text-5xl font-bold text-violet-900 dark:text-violet-300">Hola, soy Cint !</h1>
                    <p className="text-xl mt-6 text-gray-800 dark:text-gray-200">+3 años de experiencia. <span className="font-bold text-yellow-500 dark:text-yellow-200">Desarrolladora Front End React</span> y futura estudiante de Magister en Ingeniería Informática. Actualmente viviendo en la V Región, Chile.</p>
                    <div className="flex mt-4 gap-6">
                        <button className="flex flex-wrap content-center p-1 border border-gray-200 dark:border-gray-500 rounded-lg transition hover:scale-125 hover:bg-gray-200 dark:hover:bg-gray-500  dark:text-gray-200 text-sm font-bold">
                            <a href="https://github.com/Cintya01" target="_blank">
                                <Image
                                    className="dark:invert pr-1"
                                    src="/github.png"
                                    alt="github"
                                    width={24}
                                    height={24}
                                    priority
                                />
                            </a>
                            GitHub
                        </button>
                        <button className="flex flex-wrap content-center p-1 border border-gray-200 dark:border-gray-500 rounded-lg transition hover:scale-125 hover:bg-gray-200 dark:hover:bg-gray-500  dark:text-gray-200 text-sm font-bold">
                            <a href="https://www.linkedin.com/in/colivaresc/" target="_blank">
                                <Image
                                    className="pr-1"
                                    src="/linkedin-logo.png"
                                    alt="linkedin"
                                    width={24}
                                    height={24}
                                    priority />
                            </a>
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;