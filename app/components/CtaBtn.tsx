import CustomLink from "./CustomLink";
/* import { cn } from "@/lib/utils"; */

interface CtaBtnProps {
  /* className?: string; */
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string | undefined;
}

export default function CtaBtn({
  /* className, */
  children,
  icon,
  href,
}: CtaBtnProps) {
  return (
    <CustomLink
      href={href ?? "/"}
      className="group relative m-auto flex w-fit items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--accent)] px-4 py-2 transition-opacity hover:text-[var(--text-nav)]"
    >
      <span className="absolute inset-0 z-0 translate-y-full bg-[var(--primary)] transition-transform duration-300 ease-in-out group-hover:translate-y-0"></span>
      <span className="relative z-10 flex items-center gap-2 transition-all duration-300 ease-in-out group-hover:gap-6">
        {children}
        <span className="material-symbols-outlined">{icon}</span>
      </span>
    </CustomLink>
  );
}
