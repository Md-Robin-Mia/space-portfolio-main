"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <section
      aria-labelledby="security-title"
      className="relative isolate flex min-h-[480px] w-full items-center justify-center overflow-hidden px-4 py-20 sm:min-h-[680px] sm:px-6 sm:py-24 lg:min-h-[740px]"
    >
      <video
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-45"
      >
        <source src="/videos/encryption-bg.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#030014]/35 via-transparent to-[#030014]/50" />

      <motion.h2
        id="security-title"
        variants={slideInFromTop}
        className="absolute top-14 z-10 px-4 text-center text-3xl font-semibold tracking-tight text-white sm:top-16 sm:text-4xl"
      >
        Performance{" "}
        <span className="bg-gradient-to-r from-violet-300 to-cyan-200 bg-clip-text text-transparent">
          &amp;
        </span>{" "}
        security.
      </motion.h2>

      <div className="relative z-10 flex -translate-y-1 flex-col items-center">
        <div className="group flex cursor-pointer flex-col items-center">
          <Image
            src="/lock-top.png"
            alt=""
            width={50}
            height={50}
            className="translate-y-5 transition-transform duration-300 group-hover:translate-y-8"
          />
          <Image
            src="/lock-main.png"
            alt="Glowing lock illustration"
            width={84}
            height={84}
            className="relative z-10 h-[84px] w-[84px] object-contain drop-shadow-[0_0_24px_rgba(139,92,246,0.6)]"
          />
        </div>
        <span className="mt-6 rounded-full border border-violet-300/25 bg-slate-950/55 px-5 py-2 text-sm font-medium text-violet-100 shadow-lg shadow-violet-950/20 backdrop-blur-md">
          Encryption
        </span>
      </div>

      <p className="absolute bottom-10 z-10 px-5 text-center text-base text-slate-200 sm:text-lg">
        Secure your data with end-to-end encryption.
      </p>
    </section>
  );
};
