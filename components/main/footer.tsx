import {
  ArrowUpRightIcon,
  EnvelopeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import { CONTACT_EMAIL, FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 px-4 pb-8 pt-10 sm:px-8 sm:pt-12 lg:px-16"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/[0.08] bg-slate-950/45 backdrop-blur-sm">
        <section
          aria-labelledby="contact-title"
          className="relative isolate overflow-hidden border-b border-white/[0.08] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/[0.14] via-transparent to-cyan-400/[0.08]" />
          <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" />
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-3 py-1.5 text-xs font-medium text-violet-100">
                <SparklesIcon className="h-4 w-4 text-cyan-200" />
                Have a project in mind?
              </span>
              <h2
                id="contact-title"
                className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
              >
                Let&apos;s build something great.
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Tell me what you&apos;re working on. I&apos;d love to hear about
                your idea and explore how I can help.
              </p>
            </div>
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/30 transition hover:-translate-y-0.5 hover:shadow-cyan-950/30"
            >
              <EnvelopeIcon className="h-4 w-4" />
              Get in touch
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-5 text-xs text-slate-500">{CONTACT_EMAIL}</p>
        </section>

        <div className="px-6 py-8 sm:px-10">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {FOOTER_DATA.map((column) => {
              const isSocialColumn =
                column.title === "Community" ||
                column.title === "Social Media";

              return (
                <div key={column.title}>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                    {column.title}
                  </h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {column.data.map(({ icon: Icon, name, link }) => (
                      <li key={`${column.title}-${name}`}>
                        {isSocialColumn ? (
                          <span className="inline-flex items-center gap-2 text-sm text-slate-400">
                            {Icon && <Icon className="h-4 w-4" />}
                            <span>{name}</span>
                          </span>
                        ) : (
                          <Link
                            href={link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-200"
                          >
                            {Icon && <Icon className="h-4 w-4" />}
                            <span>{name}</span>
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 border-t border-white/[0.08] pt-5 text-center text-xs text-slate-500">
            &copy; MD. ROBIN MIA {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
