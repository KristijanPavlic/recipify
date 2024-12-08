import Link from "next/link";
import { cn } from "@/lib/utils";

interface CustomLinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  "aria-label"?: string;
}

const CustomLink = ({
  className,
  children,
  href,
  target,
  rel,
  "aria-label": ariaLabel,
}: CustomLinkProps) => {
  // Ensure safe usage of target="_blank"
  const safeRel = target === "_blank" ? "noopener noreferrer" : rel;

  return (
    <Link
      href={href}
      target={target}
      prefetch={true}
      rel={safeRel}
      aria-label={ariaLabel}
      className={cn(
        "text-lg font-medium transition-all duration-300 ease-in-out hover:text-[var(--primary)]",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
