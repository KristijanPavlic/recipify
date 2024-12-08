"use client";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { useCurrentUser } from "../hooks/getCurrentUser";
import getCurrentHours from "../functions/getCurrentHours";

export default function UserProfile() {
  const { isLoaded, isSignedIn, user } = useCurrentUser();

  return (
    <div className="container m-auto px-4">
      <Nav />
      <main className="relative mt-5 flex min-h-[100svh] flex-col items-start md:mt-10">
        {!isLoaded || !isSignedIn ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="z-10">
            <h1 className="my-8 text-3xl font-bold">Profile</h1>
            <h2 className="text-2xl">
              {getCurrentHours()}, {user?.firstName}
            </h2>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
