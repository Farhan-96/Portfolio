/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase } from "lucide-react";
import { experience } from "../data/experience";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <section id="experience" className="mb-32">
      <SectionTitle icon={Briefcase}>Professional Journey</SectionTitle>
      <div className="max-w-3xl">
        {experience.map((job) => (
          <ExperienceItem
            key={`${job.company}-${job.period}`}
            role={job.role}
            company={job.company}
            period={job.period}
            description={job.description}
          />
        ))}
      </div>
    </section>
  );
}
