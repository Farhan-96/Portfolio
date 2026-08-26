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
            <h3 className="text-xl font-bold text-zinc-900">
              Bachelor of Science in Information Technology (BSIT)
            </h3>
            <p className="text-zinc-500 font-medium">
              PMAS Arid Agriculture University, Rawalpindi
            </p>
            <p className="text-sm text-zinc-400 mt-1">2016 – 2020</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">
                CGPA: 3.46 / 4.00 (86.50%)
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 text-zinc-700 rounded-full text-sm font-bold border border-zinc-100">
                First Division
              </span>
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Final Year Project: DAF: Replica for Stuttering (iOS)
            </p>
          </div>
        </div>
      </div>
      <div>
        <SectionTitle icon={Award}>Certifications</SectionTitle>
        <div className="grid grid-cols-1 gap-4 mb-6">
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
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-3">
            Languages
          </h3>
          <ul className="space-y-2 text-zinc-700 font-medium">
            <li>English — Professional Working Proficiency</li>
            <li>Urdu — Native</li>
            <li>Punjabi — Native</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
