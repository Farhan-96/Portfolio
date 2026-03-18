/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

type SectionTitleProps = {
  children: ReactNode;
  icon: LucideIcon;
};

export function SectionTitle({ children, icon: Icon }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-black text-white rounded-lg">
        <Icon size={24} />
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-black">{children}</h2>
    </div>
  );
}
