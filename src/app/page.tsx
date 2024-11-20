import AboutMe from "./about-me";
import Experience from "./experience";
import Hero from "./hero";
import Project from "./projects";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex justify-center bg-gradient-to-t from-zinc-300 to-white dark:bg-gradient-to-t dark:from-gray-700 dark:to-gray-700">
      <main className="border-2 max-w-screen-xl w-full ">
        <Hero/>
        <Experience/>
        <Project/>
        <AboutMe/>
       </main>
    </div>
  );
}
