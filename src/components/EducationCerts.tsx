/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, Award } from "lucide-react";
import { certifications } from "../data/projects";
import { SectionTitle } from "./ui/SectionTitle";

export function EducationCerts() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
      <div>
        <SectionTitle icon={GraduationCap}>Education</SectionTitle>
        <div className="space-y-4">
          <div className="p-6 bg-white border border-zinc-200 rounded-2xl">
            <h3 className="text-xl font-bold text-zinc-900">BS (Information Technology)</h3>
            <p className="text-zinc-500 font-medium">Arid Agriculture University, Rawalpindi</p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">
              CGPA: 3.46 / 4.0
            </div>
          </div>
          <div className="p-6 bg-white border border-zinc-200 rounded-2xl">
            <h3 className="text-lg font-bold text-zinc-900">F.Sc. (Pre-Engineering)</h3>
            <p className="text-zinc-500 font-medium">
              Federal Board of Intermediate & Secondary Education (2016)
            </p>
          </div>
          <div className="p-6 bg-white border border-zinc-200 rounded-2xl">
            <h3 className="text-lg font-bold text-zinc-900">Matric (Science)</h3>
            <p className="text-zinc-500 font-medium">
              Federal Board of Intermediate & Secondary Education (2014)
            </p>
          </div>
        </div>
      </div>
      <div>
        <SectionTitle icon={Award}>Certifications</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl text-sm font-medium text-zinc-700"
            >
              {cert}
            </div>
          ))}
        </div>
        <div className="p-6 bg-white border border-zinc-200 rounded-2xl">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">Languages</h3>
          <p className="text-zinc-700 font-medium">English, Urdu, Punjabi</p>
        </div>
      </div>
    </section>
  );
}
