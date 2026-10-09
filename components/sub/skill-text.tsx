"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-center">
      <motion.div
        variants={slideInFromTop}
        className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-4 py-2"
      >
        <SparklesIcon className="h-4 w-4 text-cyan-200" />
        <span className="text-sm text-violet-100">
          Tools &amp; technologies
        </span>
      </motion.div>

      <motion.h2
        variants={slideInFromLeft(0.3)}
        className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
      >
        Built with modern technologies
      </motion.h2>

      <motion.p
        variants={slideInFromRight(0.4)}
        className="mt-4 max-w-2xl text-base leading-7 text-slate-400"
      >
        The technologies behind my projects. Choose a category to explore the
        tools I work with.
      </motion.p>
    </div>
  );
};
