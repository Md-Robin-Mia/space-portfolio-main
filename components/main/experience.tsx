"use client";

import {
  BriefcaseIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { motion, type Variants } from "framer-motion";

const experienceReveal: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const timelineReveal: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

const experiences = [
  {
    company: "SM Technology",
    role: "Junior Executive – Sales",
    icon: BriefcaseIcon,
    responsibilities: [
      "Assist customers by understanding their needs and recommending suitable products or services.",
      "Communicate with clients, handle sales inquiries, and support daily sales operations.",
      "Build positive customer relationships and contribute to business growth.",
    ],
  },
  {
    company: "Robo-Tech-Valley",
    role: "Web Development Intern",
    icon: CodeBracketIcon,
    responsibilities: [
      "Completed an internship focused on web development.",
      "Gained practical experience in website development and customization.",
      "Learned web development workflows and applied technical skills to practical tasks.",
    ],
  },
] as const;

export const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="px-4 py-14 sm:px-8 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ staggerChildren: 0.12 }}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-12"
        >
          <motion.span
            data-motion-reveal
            variants={experienceReveal}
            className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-4 py-2 text-sm text-violet-100"
          >
            <BriefcaseIcon className="h-4 w-4 text-cyan-200" />
            Career journey
          </motion.span>
          <motion.h2
            id="experience-title"
            data-motion-reveal
            variants={experienceReveal}
            className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            data-motion-reveal
            variants={experienceReveal}
            className="mt-4 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7"
          >
            My experience across customer-focused sales and hands-on web
            development.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          <motion.div
            aria-hidden="true"
            data-motion-reveal
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={timelineReveal}
            style={{ transformOrigin: "top" }}
            className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-violet-400/60 via-cyan-300/30 to-transparent sm:left-7"
          />

          <div className="space-y-4 sm:space-y-6">
            {experiences.map(
              ({ company, role, icon: Icon, responsibilities }, index) => (
                <motion.article
                  key={company}
                  data-motion-reveal
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  variants={experienceReveal}
                  whileHover={{
                    y: -5,
                    borderColor: "rgba(196, 181, 253, 0.3)",
                    transition: { duration: 0.2 },
                  }}
                  className="relative ml-0 rounded-2xl border border-white/10 bg-slate-950/55 p-4 pl-14 shadow-xl shadow-black/10 backdrop-blur sm:rounded-3xl sm:p-6 sm:pl-[4.5rem]"
                >
                  <motion.span
                    aria-hidden="true"
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(139,92,246,0)",
                        "0 0 22px rgba(139,92,246,0.28)",
                        "0 0 0 rgba(139,92,246,0)",
                      ],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      delay: index * 0.7,
                    }}
                    className="absolute left-2.5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/20 bg-[#100b2b] text-cyan-200 shadow-lg shadow-violet-950/20 sm:left-2.5 sm:top-6 sm:h-11 sm:w-11"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.span>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-cyan-200/80">
                      {company}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                      {role}
                    </h3>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-2.5 text-sm leading-6 text-slate-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-300/80"
                        />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
