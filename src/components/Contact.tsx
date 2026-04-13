/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Download } from "lucide-react";
import { contact } from "../data/contact";

export function Contact() {
  return (
    <section id="contact" className="mb-12">
      <div className="bg-zinc-100 rounded-[2rem] p-8 md:p-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
          Let&apos;s build something <br />
          extraordinary.
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 text-xl font-medium hover:text-zinc-500 transition-colors"
          >
            <Mail className="text-zinc-400" />
            {contact.email}
          </a>
          <a
            href={contact.phoneHref}
            className="flex items-center gap-3 text-xl font-medium hover:text-zinc-500 transition-colors"
          >
            <Phone className="text-zinc-400" />
            {contact.phone}
          </a>
          <div className="flex items-center gap-3 text-xl font-medium">
            <MapPin className="text-zinc-400" />
            {contact.location}
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all shadow-xl shadow-black/10"
          >
            Send Message
          </a>
          <a
            href="/Farhan_Fareed_Resume.pdf"
            download="Farhan_Fareed_Resume.pdf"
            className="px-8 py-4 bg-white border border-zinc-200 text-black rounded-2xl font-bold hover:bg-zinc-50 transition-all flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
