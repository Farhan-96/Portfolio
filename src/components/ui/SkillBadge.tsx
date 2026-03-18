/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

type SkillBadgeProps = { name: string };

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="px-3 py-1 bg-zinc-100 border border-zinc-200 text-zinc-800 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors cursor-default">
      {name}
    </span>
  );
}
