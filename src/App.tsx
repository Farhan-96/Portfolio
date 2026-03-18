/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { EducationCerts } from "./components/EducationCerts";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-900 selection:bg-black selection:text-white font-sans">
      <Nav />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
