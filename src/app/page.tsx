import AboutMe from "./about-me";
import Experience from "./experience";
import Hero from "./hero";
import Project from "./projects";

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex justify-center">
      <main className=" container mx-auto">
        <Hero/>
        <Experience/>
        <Project/>
        <AboutMe/>
       </main>
    </div>
  );
}
