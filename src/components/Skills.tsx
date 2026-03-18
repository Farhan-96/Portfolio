/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Code2, Smartphone, Database, Cpu, Globe } from "lucide-react";
import { skills } from "../data/skills";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillBadge } from "./ui/SkillBadge";

const groups = [
  { key: "mobile" as const, title: "Mobile & Frontend", icon: Smartphone },
  { key: "backend" as const, title: "Backend & DB", icon: Database },
  { key: "ai" as const, title: "AI & Intelligence", icon: Cpu },
  { key: "tools" as const, title: "Cloud & Tools", icon: Globe },
] as const;

export function Skills() {
  return (
    <section id="skills" className="mb-32">
      <SectionTitle icon={Code2}>Technical Arsenal</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {groups.map(({ key, title, icon: Icon }) => (
          <div key={key} className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Icon size={20} className="text-zinc-400" />
              {title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills[key].map((s) => (
                <SkillBadge key={s} name={s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
