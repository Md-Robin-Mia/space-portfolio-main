import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <Experience />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
