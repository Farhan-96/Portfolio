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
        <div className="md:col-span-2 space-y-6">
          <p className="text-2xl text-zinc-600 leading-relaxed">
            Results-driven React Native Developer with{" "}
            <span className="text-black font-semibold">3+ years of experience</span>{" "}
            designing, developing, and deploying high-performance cross-platform
            mobile applications for Android and iOS using React Native CLI, Expo,
            and TypeScript. Experienced with Redux Toolkit, Firebase, Node.js, and
            RESTful APIs — including AI-powered features with OpenAI and Google
            Gemini.
          </p>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Strong expertise in mobile architecture, third-party integrations, push
            notifications, authentication, performance optimization, and publishing
            to the Apple App Store and Google Play Store. Also building backend
            skills in{" "}
            <span className="text-black font-semibold">Python</span> and{" "}
            <span className="text-black font-semibold">FastAPI</span>, including a
            personal e-commerce REST API with MongoDB. Proficient with GitHub
            Actions, CI/CD, Expo EAS, and AI-assisted development using Cursor AI
            and ChatGPT Pro.
          </p>
        </div>
        <div className="space-y-6">
          <div className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
            <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">
              Core Focus
            </h4>
            <ul className="space-y-3 font-medium">
              {[
                "Mobile App Development",
                "App Store & Play Store",
                "AI Integration",
                "Python / FastAPI Backend",
                "CI/CD & Expo EAS",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
