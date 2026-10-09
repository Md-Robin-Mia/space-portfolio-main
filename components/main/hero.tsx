import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section
      id="about-me"
      className="relative isolate min-h-[calc(100svh-5rem)] w-full overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[68px] z-0 overflow-hidden sm:top-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute -top-52 left-1/2 h-auto w-[210%] max-w-none -translate-x-1/2 rotate-180 object-cover md:-top-[420px] md:left-0 md:w-full md:translate-x-0 md:h-[calc(100%+5rem)]"
        >
          <source src="/videos/blackhole.mp4" type="video/mp4" />
        </video>
      </div>
      <HeroContent />
    </section>
  );
};
