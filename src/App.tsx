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
    <div className="min-h-screen bg-[#F8F9FC] text-zinc-900 selection:bg-black selection:text-white font-sans relative overflow-x-clip">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-[28rem] -right-20 h-80 w-80 rounded-full bg-violet-200/35 blur-3xl" />
      <div className="pointer-events-none absolute bottom-24 left-1/3 h-72 w-72 rounded-full bg-emerald-200/25 blur-3xl" />
      <Nav />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 relative z-10">
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
