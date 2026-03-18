/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Globe } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";

export function About() {
  return (
    <section id="about" className="mb-32">
      <SectionTitle icon={Globe}>Professional Summary</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <p className="text-2xl text-zinc-600 leading-relaxed">
            Software Engineer with{" "}
            <span className="text-black font-semibold">3+ years of experience</span> in React
            Native and backend development using Node.js, Express.js, and MongoDB. I specialize
            in building AI-powered mobile applications and intelligent systems, focusing on
            performance, scalability, and user-centric design.
          </p>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">
              Core Focus
            </h4>
            <ul className="space-y-3 font-medium">
              {["Mobile App Development", "Full Stack Architecture", "AI Integration"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
