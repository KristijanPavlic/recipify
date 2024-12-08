"use client";

interface HamburgerMenuBtnProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerMenuBtn({
  isOpen,
  toggleMenu,
}: HamburgerMenuBtnProps) {
  return (
    <button
      className="group flex items-center justify-center rounded-full border-none p-2 outline-none md:hidden"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <span className="sr-only">Menu</span>
      <div className="flex flex-col gap-2">
        <div
          className={`delay-30 h-[3px] w-7 rounded-full bg-[var(--text-nav)] transition-all duration-300 ease-in-out group-hover:w-8 group-hover:bg-[var(--primary)] ${
            isOpen ? "w-8 translate-y-[14px] rotate-45" : ""
          }`}
        ></div>
        <div
          className={`delay-30 h-[3px] w-5 rounded-full bg-[var(--text-nav)] transition-all duration-300 ease-in-out group-hover:w-8 group-hover:bg-[var(--primary)] ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`delay-30 h-[3px] w-8 rounded-full bg-[var(--text-nav)] transition-all duration-300 ease-in-out group-hover:bg-[var(--primary)] ${
            isOpen ? "-translate-y-[8px] -rotate-45" : ""
          }`}
        ></div>
      </div>
    </button>
  );
}
