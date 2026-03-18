/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { contact } from "../data/contact";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tighter">FF.</span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-black transition-colors">
              {label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${contact.email}`}
          className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
