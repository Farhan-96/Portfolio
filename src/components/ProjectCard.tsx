/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  screenshot?: string;
};

export function ProjectCard({ title, description, tags, link, screenshot }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      className="p-6 bg-white/90 backdrop-blur border border-zinc-200 rounded-3xl shadow-lg shadow-zinc-200/70 hover:shadow-xl hover:shadow-zinc-300/60 transition-all group"
    >
      {screenshot ? (
        <img
          src={screenshot}
          alt={`${title} screenshot`}
          className="w-full h-48 object-cover rounded-2xl border border-zinc-200 mb-5"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-48 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 mb-5 flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Screenshot will be added
        </div>
      )}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-black transition-colors tracking-tight">
          {title}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-black transition-colors bg-zinc-100 rounded-lg p-2"
          >
            <ExternalLink size={20} />
          </a>
        )}
      </div>
      <p className="text-zinc-600 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 bg-zinc-50 px-2 py-1 rounded border border-zinc-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
