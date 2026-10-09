"use client";

import { ArrowDownIcon, ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center gap-8 px-4 pb-12 pt-24 sm:gap-12 sm:px-8 sm:pb-16 sm:pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:pt-24"
    >
      <div className="flex flex-col items-start text-left">
        <motion.div
          variants={slideInFromTop}
          className="inline-flex max-w-full items-center gap-2 rounded-full border border-violet-300/30 bg-[#08061b]/85 px-3 py-2 shadow-lg shadow-violet-950/30 backdrop-blur-md sm:px-4"
        >
          <SparklesIcon className="h-4 w-4 text-cyan-200" />
          <span className="text-xs text-violet-100 sm:text-sm">
            Fullstack Developer Portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.3)}
          className="mt-6 max-w-3xl text-[clamp(2.5rem,9vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-white sm:mt-7 sm:text-6xl lg:text-7xl"
        >
          Providing{" "}
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-200 bg-clip-text text-transparent">
            the best
          </span>{" "}
          project experience.
        </motion.h1>

        <motion.p
          variants={slideInFromLeft(0.5)}
          className="mt-5 max-w-xl text-sm leading-6 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8"
        >
          I&apos;m a Full Stack Software Engineer with experience in website,
          mobile, and software development. Explore my projects and skills.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(0.7)}
          className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/40 transition hover:-translate-y-0.5 hover:shadow-cyan-950/40"
          >
            Explore projects
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <Link
            href="#skills"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/[0.08]"
          >
            Explore skills
            <ArrowDownIcon className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.5)}
        className="mx-auto flex w-full max-w-[320px] items-center justify-center sm:max-w-[460px] lg:max-w-[560px]"
      >
        <Image
          src="/hero-bg.svg"
          alt="Abstract orbit of software technology icons"
          height={650}
          width={650}
          priority
          draggable={false}
          className="h-auto w-full select-none"
        />
      </motion.div>
    </motion.div>
  );
};
