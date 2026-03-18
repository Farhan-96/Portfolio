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
};

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-md transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-zinc-900 group-hover:text-black transition-colors">
          {title}
        </h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-black transition-colors"
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
