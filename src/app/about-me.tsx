import Image from 'next/image';

const AboutMe = () => {
    return (

        <section id="about-me" >
            <h2 className="flex w-full text-2xl md:text-3xl font-bold text-violet-900 dark:text-violet-300">
                <Image
                    className="rounded-full mr-2 dark:invert"
                    src="/person_pin.svg"
                    alt="Person Pin"
                    width={32}
                    height={32}
                    priority
                />
                Sobre mí
            </h2>

            <div className="flex flex-col lg:flex-row ">
                <article className=" w-full lg:w-3/5 font-normal  [&>p>strong]:text-yellow-500 [&>p>strong]:dark:text-yellow-200 [&>p]:my-4">

                    <p>Hola! Mi nombre es Cintya Olivares, pero mis amigos me dicen Cin, Cint o Xaps. Disfruto mucho viajar y mi principal motivación es mi cachorro.</p>
                    <p>A los 29 decidí darle un giro a mi carrera en el área de administración y comencé a apasionarme por el mundo de la programación. Durante los últimos 4 años he realizado diferentes cursos de perfeccionamiento y en 2025 comienzo a formalizar mis estudios con un <strong>Magister en Ingeniería Informática</strong>.  Me di cuenta que disfruto aprender cosas nuevas, desafiarme y lograrlo!</p>
                    <p>Si bien sé que no tengo una base convencional de experiencia, esto me ha permitido tener una mejor comunicación con el cliente, el usuario que utiliza mi producto, ya que alguna vez fui parte de su mundo.</p>
                </article>
                <article className="lg:w-2/5 flex flex-row justify-center items-center mt-8 ml-8 md:mt-0 xl:ml-0 [&>img]:md:w-50 [&>img]:md:h-50">
                    <Image
                        className=" -rotate-12 rounded-lg border-4 border-yellow-500"
                        src="/viaje.jpg"
                        alt="Una Cin de viaje"
                        width={180}
                        height={200}
                        priority
                    />
                    <Image
                        className=" rotate-12 rounded-lg md:mt-8 border-4 border-yellow-500"
                        src="/Fenrir.jpg"
                        alt="Perro mirando el horizonte"
                        width={180}
                        height={200}
                        priority
                    />
                </article>
            </div>
        </section>
    )
};

export default AboutMe;