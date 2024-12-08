"use client";

import { useState, useRef, useEffect } from "react";

import CustomLink from "./CustomLink";
import HamburgerMenuBtn from "./HamburgerMenuBtn";
import NavUserProfileBtn from "./NavUserProfileBtn";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-2 z-[999]"
      ref={navRef}
    >
      <CustomLink href="#main-content" className="sr-only focus:not-sr-only">
        Skip to content
      </CustomLink>
      <div className="flex flex-wrap items-center justify-between rounded-2xl bg-[var(--accent)] px-6 py-2 text-[var(--text-nav)] lg:px-8">
        <CustomLink
          href="/"
          aria-label="Home"
          className="text-xl font-semibold"
        >
          Recipify.
        </CustomLink>
        <HamburgerMenuBtn isOpen={isOpen} toggleMenu={toggleMenu} />
        <div
          className={`w-full overflow-hidden transition-[max-height] duration-500 md:w-auto ${
            isOpen ? "max-h-96" : "max-h-0"
          } md:flex md:max-h-none`}
        >
          <ul className="mt-4 flex flex-col items-center gap-4 text-center md:mt-0 md:flex-row md:gap-8">
            <li>
              <CustomLink
                href="/find-recipe"
                aria-label="Find Recipe"
                className="flex items-center justify-center rounded-xl bg-[var(--primary)] px-4 py-1 font-semibold hover:bg-[var(--text-nav)] hover:text-[var(--primary)]"
              >
                Find Recipe
              </CustomLink>
            </li>
            <li>
              <CustomLink href="/about" aria-label="About page">
                About
              </CustomLink>
            </li>
            <li>
              <CustomLink href="/contact" aria-label="Contact page">
                Contact
              </CustomLink>
            </li>
            <li>
              <NavUserProfileBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
