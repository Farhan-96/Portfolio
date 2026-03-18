/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { contact } from "../data/contact";

export function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-400 text-sm">
      <p>© 2026 Farhan Fareed. All rights reserved.</p>
      <div className="flex gap-8">
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          GitHub
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
