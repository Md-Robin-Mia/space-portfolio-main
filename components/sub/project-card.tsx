import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src?: string;
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  link?: string;
  number: string;
};

export const ProjectCard = ({
  src,
  title,
  category,
  description,
  technologies,
  link,
  number,
}: ProjectCardProps) => {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950/55 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-white/[0.06] hover:shadow-violet-950/20"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-950/60">
        {src ? (
          <Image
            src={src}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950 via-slate-900 to-cyan-950">
            <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-violet-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="relative w-[78%] rounded-2xl border border-white/15 bg-slate-950/55 p-5 shadow-2xl backdrop-blur">
              <div className="mb-5 flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-300/80" />
                <span className="h-2 w-2 rounded-full bg-amber-200/80" />
                <span className="h-2 w-2 rounded-full bg-emerald-200/80" />
                <span className="ml-auto text-[10px] text-slate-500">
                  WORDPRESS
                </span>
              </div>
              <div className="h-2 w-2/3 rounded-full bg-white/70" />
              <div className="mt-3 h-2 w-1/2 rounded-full bg-white/20" />
              <div className="mt-6 grid grid-cols-3 gap-2">
                <span className="h-12 rounded-lg border border-white/10 bg-white/[0.06]" />
                <span className="h-12 rounded-lg border border-white/10 bg-white/[0.06]" />
                <span className="h-12 rounded-lg border border-white/10 bg-white/[0.06]" />
              </div>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent md:bg-gradient-to-r md:from-slate-950/15 md:to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/65 px-3 py-1 text-xs font-medium tracking-wide text-slate-200 backdrop-blur-md">
          {number} / {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-base font-semibold leading-snug text-white sm:text-lg"
          >
            {title}
          </h3>
          {link && (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition group-hover:border-cyan-200/25 group-hover:bg-cyan-200/10">
              <ArrowUpRightIcon className="h-4 w-4 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-200" />
            </span>
          )}
        </div>
        <p
          className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400 sm:text-sm"
        >
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
        {link ? (
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200/80 transition hover:text-cyan-100"
          >
            View project
            <ArrowUpRightIcon className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        ) : (
          <span className="mt-3 text-[11px] text-slate-500">Project concept</span>
        )}
      </div>
    </article>
  );
};
