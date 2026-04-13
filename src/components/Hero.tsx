/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  MapPin,
  Smartphone,
  Database,
  Cpu,
} from "lucide-react";
import { contact } from "../data/contact";
import profileImage from "../assets/profile.png";

export function Hero() {
  return (
    <section id="hero" className="mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold tracking-widest uppercase text-zinc-500 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for new projects
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Farhan <br />
            <span className="text-zinc-400">Fareed</span>
          </h1>
          <p className="text-xl text-zinc-600 mb-8 max-w-lg leading-relaxed">
            Mid-Level Software Engineer specializing in{" "}
            <span className="text-black font-semibold">React Native</span> and{" "}
            <span className="text-black font-semibold">Node.js</span>. Building
            intelligent, AI-integrated mobile and web applications that deliver
            exceptional user experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-medium hover:bg-zinc-800 transition-all"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white border border-zinc-200 text-black rounded-xl font-medium hover:bg-zinc-50 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 group shadow-2xl"
        >
          <img
            src={profileImage}
            alt="Farhan Fareed"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <div className="flex gap-4 mb-6">
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
                <Smartphone className="text-white" size={28} />
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
                <Database className="text-white" size={28} />
              </div>
              <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl">
                <Cpu className="text-white" size={28} />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold tracking-tight">
                Farhan Fareed
              </h3>
              <p className="text-sm font-medium opacity-70 tracking-widest uppercase">
                Mid-Level Software Engineer
              </p>
              <p className="text-xs opacity-50 flex items-center gap-1 mt-2">
                <MapPin size={12} />
                {contact.location}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
