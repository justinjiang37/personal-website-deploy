"use client";

import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Recognitions from "@/components/Recognitions";
import Contact from "@/components/Contact";
import Hobbies from "@/components/Hobbies";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col space-y-4 text-right z-50">
        <Navbar />
      </nav>

      <div id="intro" className="min-h-screen p-8 flex items-center snap-start">
        <div className="max-w-7xl mx-auto flex justify-between w-full">
          <Intro />
        </div>
      </div>

      <div id="projects" className="min-h-screen p-8 flex items-center snap-start">
        <Projects />
      </div>
      
      <div id="hobbies" className="min-h-screen p-8 flex items-center snap-start">
        <Hobbies />
      </div>

      <div id="recognitions" className="min-h-screen p-8 flex items-center snap-start">
        <Recognitions />
      </div>

      <div id="contact" className="min-h-screen p-8 flex items-center snap-start">
        <Contact />
      </div>
    </div>
  );
}
