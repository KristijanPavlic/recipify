import { cn } from "@/lib/utils";

interface HeadingsProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading1({ children, className }: HeadingsProps) {
  return (
    <h1
      className={cn(
        "text-3xl font-bold leading-[1.6] text-[var(--primary)] md:text-5xl md:leading-[1.6] lg:text-6xl lg:leading-[1.6] xl:text-8xl xl:leading-[1.4]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function Heading2({ children, className }: HeadingsProps) {
  return (
    <h1
      className={cn(
        "text-xl font-bold text-[var(--primary)] md:text-xl lg:text-2xl xl:text-3xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export function Heading3({ children, className }: HeadingsProps) {
  return <h1 className={cn("text-2xl", className)}>{children}</h1>;
}
