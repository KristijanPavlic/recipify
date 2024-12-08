import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";

import { Montserrat_Alternates } from "next/font/google";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import "./globals.css";

export const metadata: Metadata = {
  title: "Recipify",
  description: "A recipe app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" dir="ltr">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={`${montserratAlternates.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
