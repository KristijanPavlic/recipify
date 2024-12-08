"use client";

import { useEffect } from "react";
import CustomLink from "./components/CustomLink";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import "./globals.css";
import Hero from "./sections/HeroSection";
import DiscoverRecipies from "./sections/DiscoverRecipies";
import HowItWorks from "./sections/HowItWorks";

export default function Home() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--initial-vh", `${vh}px`);
  }, []);

  return (
    <div className="container m-auto px-4">
      <CustomLink href="#main-content" className="sr-only focus:not-sr-only">
        Skip to content
      </CustomLink>
      <Nav />
      <main id="main-content" className="relative">
        <Hero />
        <DiscoverRecipies />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
