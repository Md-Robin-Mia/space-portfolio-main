import Image from "next/image";
import type { IconType } from "react-icons";

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  icon?: IconType;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  icon: Icon,
}: SkillDataProviderProps) => {
  return (
    <div
      className="group flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-2 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-200/25 hover:bg-white/[0.07]"
    >
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]"
      >
        {Icon ? (
          <Icon
            aria-hidden="true"
            className="h-8 w-8 text-slate-100 transition duration-300 group-hover:scale-110"
          />
        ) : (
          <Image
            src={`/skills/${src}`}
            width={width}
            height={height}
            alt=""
            className="h-9 w-9 object-contain transition duration-300 group-hover:scale-110"
          />
        )}
      </span>
      <span className="text-[11px] font-medium leading-4 text-slate-300 transition group-hover:text-white">
        {name}
      </span>
    </div>
  );
};
