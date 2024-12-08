import { ReactNode } from "react";

export default function SectionContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="sticky top-16 z-10 flex min-h-[100svh] flex-col items-center justify-center gap-12 rounded-2xl bg-[var(--background)]">
      {children}
    </div>
  );
}
