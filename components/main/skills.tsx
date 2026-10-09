"use client";

import {
  CircleStackIcon,
  CommandLineIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  CMS_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

function uniqueSkills<T extends { skill_name: string }>(
  skills: readonly T[],
): T[] {
  return skills.filter(
    (skill, index) =>
      skills.findIndex((item) => item.skill_name === skill.skill_name) === index,
  );
}

const skillGroups = [
  {
    title: "All skills",
    icon: Squares2X2Icon,
    skills: uniqueSkills([
      ...FRONTEND_SKILL,
      ...BACKEND_SKILL,
      ...FULLSTACK_SKILL,
      ...OTHER_SKILL,
      ...SKILL_DATA.filter((skill) => skill.skill_name === "Stripe"),
      ...CMS_SKILL,
    ]),
  },
  { title: "Frontend", icon: CommandLineIcon, skills: FRONTEND_SKILL },
  { title: "Backend", icon: CircleStackIcon, skills: BACKEND_SKILL },
  { title: "CMS", icon: WindowIcon, skills: CMS_SKILL },
  {
    title: "Tools",
    icon: WrenchScrewdriverIcon,
    skills: uniqueSkills([
      ...FULLSTACK_SKILL,
      ...OTHER_SKILL,
      ...SKILL_DATA.filter((skill) => skill.skill_name === "Stripe"),
    ]),
  },
] as const;

export const Skills = () => {
  const [activeGroup, setActiveGroup] = useState(0);
  const selectedGroup = skillGroups[activeGroup];

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden px-4 pb-8 pt-12 sm:px-8 sm:pb-12 sm:pt-24 lg:px-16 lg:pb-16 lg:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-15"
          preload="metadata"
          playsInline
          loop
          muted
          autoPlay
          aria-hidden="true"
        >
          <source src="/videos/skills-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014]/70 via-[#030014]/60 to-[#030014]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SkillText />

        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-3 shadow-2xl shadow-violet-950/20 backdrop-blur-xl sm:mt-8 sm:p-4 lg:p-6">
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/[0.08] pb-3 sm:gap-3">
            {skillGroups.map(({ title, icon: Icon }, index) => {
              const isActive = activeGroup === index;

              return (
                <button
                  key={title}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveGroup(index)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-xs font-medium transition duration-200 sm:gap-2 sm:px-4 sm:py-2.5 sm:text-sm ${
                    isActive
                      ? "border-violet-300/30 bg-violet-400/15 text-white shadow-lg shadow-violet-950/20"
                      : "border-white/[0.08] bg-white/[0.03] text-slate-400 hover:border-white/20 hover:bg-white/[0.07] hover:text-slate-100"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {title}
                </button>
              );
            })}
          </div>

          <div
            key={selectedGroup.title}
            className="pt-3 sm:pt-4"
            aria-live="polite"
          >
            <div className="mb-5 flex items-center justify-between gap-3">
              <h3 className="text-sm font-medium text-slate-300">
                {selectedGroup.title}
              </h3>
              <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-slate-400">
                {selectedGroup.skills.length} technologies
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-6">
              {selectedGroup.skills.map((skill) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={skill.image}
                  name={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                  icon={"icon" in skill ? skill.icon : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
