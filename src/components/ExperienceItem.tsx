/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronRight } from "lucide-react";

type ExperienceItemProps = {
  key: string;
  role: string;
  company: string;
  period: string;
  description: string[];
};

export function ExperienceItem({
  key,
  role,
  company,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div
      key={key}
      className="relative pl-8 border-l border-zinc-200 pb-12 last:pb-0"
    >
      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-black rounded-full" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-zinc-900">{role}</h3>
          <p className="text-zinc-500 font-medium">{company}</p>
        </div>
        <span className="text-sm font-mono text-zinc-400 mt-1 md:mt-0">
          {period}
        </span>
      </div>
      <ul className="mt-4 space-y-2">
        {description.map((item, i) => (
          <li key={i} className="flex gap-2 text-zinc-600 leading-relaxed">
            <ChevronRight size={18} className="text-zinc-300 shrink-0 mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
