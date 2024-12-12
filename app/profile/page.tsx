"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { useCurrentUser } from "../hooks/getCurrentUser";
import getCurrentHours from "../functions/getCurrentHours";
import { Heading2, Heading3 } from "../components/Headings";

export default function UserProfile() {
  const { isLoaded, isSignedIn, user } = useCurrentUser();

  return (
    <div className="container m-auto px-4">
      <Nav />
      <main className="relative mt-5 flex min-h-[60svh] flex-col items-start md:mt-10">
        {!isLoaded || !isSignedIn ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="z-10">
            <Heading2 className="mb-6 mt-10">Profile</Heading2>
            <Heading3>
              {getCurrentHours()}, {user?.firstName}
            </Heading3>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
