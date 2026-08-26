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
  const featuredTitles = new Set([
    "E-Commerce REST API",
    "Winnabit",
    "ProfileNest",
    "Cal AI",
    "LoanBuddy (Loan Calculator)",
    "AI ChatBot",
  ]);
  const isWebProject = (project: (typeof featuredProjects)[number]) =>
    project.tags.some((tag) => tag === "Next.js" || tag === "Python");
  const highlightedProjects = featuredProjects.filter((project) =>
    featuredTitles.has(project.title),
  );
  const webProjects = featuredProjects.filter(
    (project) => isWebProject(project) && !featuredTitles.has(project.title),
  );
  const liveStoreProjects = featuredProjects.filter(
    (project) =>
      project.link &&
      project.screenshot &&
      !featuredTitles.has(project.title) &&
      !isWebProject(project),
  );
  const otherProjects = featuredProjects.filter(
    (project) =>
      !featuredTitles.has(project.title) &&
      !isWebProject(project) &&
      !(project.link && project.screenshot),
  );

  return (
    <section id="projects" className="mb-32">
      <SectionTitle icon={Smartphone}>Projects</SectionTitle>
      <div className="mb-12">
        <h3 className="text-2xl font-bold tracking-tight mb-2">Featured Projects</h3>
        <p className="text-zinc-500 mb-6">
          Highlighted work from mobile, AI, and backend development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlightedProjects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              tags={[...p.tags]}
              link={p.link}
              screenshot={p.screenshot}
            />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-2xl font-bold tracking-tight mb-2">Web & Backend Projects</h3>
        <p className="text-zinc-500 mb-6">
          Next.js apps and Python/FastAPI API work — AI transcription, utilities, and REST APIs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webProjects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              tags={[...p.tags]}
              link={p.link}
              screenshot={p.screenshot}
            />
          ))}
        </div>
      </div>

      {liveStoreProjects.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl font-bold tracking-tight mb-2">
            Published Mobile Applications
          </h3>
          <p className="text-zinc-500 mb-6">
            Live App Store projects with public links and previews.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveStoreProjects.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                tags={[...p.tags]}
                link={p.link}
                screenshot={p.screenshot}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mb-12">
        <h3 className="text-2xl font-bold tracking-tight mb-2">Other React Native Applications</h3>
        <p className="text-zinc-500 mb-6">
          Additional delivered apps from client and production work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((p) => (
            <ProjectCard
              key={p.title}
              title={p.title}
              description={p.description}
              tags={[...p.tags]}
              link={p.link}
              screenshot={p.screenshot}
            />
          ))}
        </div>
      </div>

      <div className="p-8 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 border border-zinc-700/50 shadow-2xl shadow-zinc-900/20">
        <div>
          <h3 className="text-xl font-bold mb-2">Want Complete Case Studies?</h3>
          <p className="text-zinc-300">
            Source code samples and additional implementation details are available on request.
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
