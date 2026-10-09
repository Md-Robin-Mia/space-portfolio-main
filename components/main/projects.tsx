import { SparklesIcon } from "@heroicons/react/24/outline";

import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="px-4 pb-20 pt-0 sm:px-8 sm:pb-24 lg:px-16 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/[0.08] px-4 py-2">
            <SparklesIcon className="h-4 w-4 text-cyan-200" />
            <span className="text-sm text-violet-100">Selected work</span>
          </div>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Projects I&apos;ve worked on
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            A few examples of ideas brought to life with thoughtful design and
            modern web technology.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              src={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
