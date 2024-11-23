import Image from "next/image";

const Experience = () => {
    return (
        <section id="experience" >
            <h2 className="flex w-full text-2xl md:text-3xl font-bold text-violet-900 dark:text-violet-300">
                <Image
                    className="rounded-full mr-2 dark:invert"
                    src="/badge.svg"
                    alt="Person Pin"
                    width={32}
                    height={32}
                    priority
                />
                Experiencia
            </h2>

            <div className="container mx-auto flex flex-col lg:flex-row ">
                <div className="w-auto">
                <div className="w-2/5">
                    <h3>Front End Developer</h3>
                    <h4>Caja Los Andes / Factor IT</h4>
                    <p>2022-2024</p>
                </div>
                <div className="w-3/5">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum beatae voluptatum aliquid, cupiditate, accusamus nesciunt culpa labore perspiciatis doloremque natus amet quae quia illum iste. Magnam quae quo magni itaque.</p>
                </div>
                </div>
               

            </div>
        </section>

    )


};

export default Experience;