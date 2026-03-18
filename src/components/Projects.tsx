/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Smartphone, ExternalLink } from "lucide-react";
import { contact } from "../data/contact";
import { featuredProjects } from "../data/projects";
import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="mb-32">
      <SectionTitle icon={Smartphone}>Featured Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredProjects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            tags={[...p.tags]}
            link={p.link}
          />
        ))}
      </div>
      <div className="mt-12 p-8 bg-zinc-900 text-white rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold mb-2">Other Notable Projects</h3>
          <p className="text-zinc-400">
            Halaly App, Resumley Website, Digital Quran, Digital Tasbeeh, Trainify Inc.
          </p>
        </div>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all whitespace-nowrap"
        >
          View More on GitHub
          <ExternalLink size={18} />
        </a>
      </div>
    </section>
  );
}
