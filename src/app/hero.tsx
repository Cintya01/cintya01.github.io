import Image from "next/image";


const Hero = () => {
    return (
        <section id="hero">
            <div className="my-16">
                <div className="flex flex-col lg:flex-row justify-center lg:justify-start">
                    <div className="w-full lg:w-1/5 flex justify-center items-center mb-4 lg:mb-0">
                        <Image
                            className="rounded-full border-4 border-yellow-500"
                            src="/profile.PNG"
                            alt="Cint Foto"
                            width={150}
                            height={200}
                            priority
                        />
                    </div>
                    <div className="w-full lg:w-2/4 flex flex-col justify-center ">
                        <h1 className="text-4xl lg:text-5xl font-bold text-violet-900 dark:text-violet-300">
                            Hola, soy Cint!
                        </h1>
                        <p className="text-xl mt-6">
                            Soy <span className="font-bold text-yellow-500 dark:text-yellow-200">Desarrolladora Front End</span> enfocada principalmente en React.js. Tengo experiencia trabajando con equipos multidisciplinarios bajo metología ágil. Actualmente resido en la Región de Valparaíso, Chile.
                        </p>
                        <div className="flex mt-4 gap-6">
                            <button className="flex flex-wrap content-center p-1 border border-gray-200 dark:border-gray-500 rounded-lg transition hover:scale-125 hover:bg-gray-200 dark:hover:bg-gray-500 text-sm font-bold">
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
                            <button className="flex flex-wrap content-center p-1 border border-gray-200 dark:border-gray-500 rounded-lg transition hover:scale-125 hover:bg-gray-200 dark:hover:bg-gray-500  text-sm font-bold">
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
            </div>
        </section>
    )
};

export default Hero;