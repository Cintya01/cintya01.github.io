import Image from 'next/image';

const AboutMe = () => {
    return (
        <section className="flex flex-row justify-center">
            <article className="w-2/5 flex items-center [&>img]:w-60 [&>img]:h-60"> 
            <Image
                        className="origin-bottom -rotate-12 flex justify-end items-end rounded-lg border-4 border-yellow-500"
                        src="/viaje.jpg"
                        alt="Una Cin de viaje"
                        width={250}
                        height={250}
                        priority
                    />
                    <Image
                        className="origin-top rotate-12 rounded-lg mt-8 border-4 border-yellow-500"
                        src="/Bremen.jpg"
                        alt="Una Cin de viaje"
                        width={250}
                        height={250}
                        priority
                    />
                   
            </article>

            <article className="w-2/5 font-normal [&>p]:text-pretty text-gray-800 dark:text-gray-200 [&>p]:my-4"> 
                <h1 className="flex text-3xl font-bold text-violet-900 dark:text-violet-300">
                <Image
                        className="rounded-full mr-2 dark:invert"
                        src="/person_pin.svg"
                        alt="Person Pin"
                        width={32}
                        height={32}
                        priority
                    />                    
                    
                    Sobre mí</h1>
                <p>Hola! Mi nombre es Cintya Olivares, pero mis amigos me dicen Cin, Cint o Xappi (si, como el robotcito de la película). Me encanta viajar y conocer diferentes culturas.</p>
                <p>A los 29 decidí darle un giro a mi carrera en el área de administración y comencé a apasionarme por el mundo de la programación. Todo partió por el amigo que te dice "yo creo que tu puedes", me gané una beca en el programa <strong>Code Your Future</strong> de Globant y de ahí no paré más!. Me di cuenta que disfruto aprender cosas nuevas, desafiarme y lograrlo!</p> 
                <p>Si bien sé que no tengo una base convencional de experiencia, esto me ha permitido tener una mejor comunicación con el cliente, el usuario que utiliza mi producto, ya que alguna vez fui parte de su mundo.</p>
            </article>

        </section>

    )


};

export default AboutMe;