"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-6">
      <nav className="mx-auto flex h-14 w-full items-center justify-between rounded-2xl border border-white/10 bg-[#08061b]/80 px-3 shadow-lg shadow-purple-950/20 backdrop-blur-xl sm:h-16 sm:px-5 lg:px-6">
        <Link
          href="#about-me"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap"
          aria-label="MD. ROBIN MIA home"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-300/20 bg-gradient-to-br from-violet-400/15 via-[#100b2b] to-cyan-300/10 text-xl font-black leading-none text-transparent shadow-[0_0_18px_rgba(139,92,246,0.18)] [background-clip:padding-box]"
          >
            <span className="bg-gradient-to-br from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent">
              R
            </span>
          </span>
          <span className="whitespace-nowrap text-[11px] font-semibold tracking-wide text-white sm:text-sm">
            MD. ROBIN MIA
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex lg:gap-1">
          {NAV_LINKS.map(({ title, link }) => (
            <Link
              key={title}
              href={link}
              className="rounded-full px-2.5 py-2 text-xs text-slate-300 transition hover:bg-white/10 hover:text-white lg:px-4 lg:text-sm"
            >
              {title}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 md:flex lg:gap-4">
          {SOCIALS.map(({ name, icon: Icon }) => (
            <span
              key={name}
              title={name}
              className="text-slate-300"
            >
              <Icon className="h-5 w-5" />
            </span>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-200 transition hover:bg-white/10 md:hidden"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="mx-auto mt-2 flex w-full max-w-7xl flex-col gap-1 rounded-2xl border border-white/10 bg-[#08061b]/95 p-3 shadow-xl backdrop-blur-xl md:hidden">
          {NAV_LINKS.map(({ title, link }) => (
            <Link
              key={title}
              href={link}
              className="rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {title}
            </Link>
          ))}
          <div className="flex gap-5 border-t border-white/10 px-4 py-4">
            {SOCIALS.map(({ name, icon: Icon }) => (
              <span
                key={name}
                title={name}
                className="text-slate-300"
              >
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
