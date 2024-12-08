import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useCurrentUser } from "../hooks/getCurrentUser";

import CustomLink from "./CustomLink";

export default function NavUserProfileBtn() {
  const { isLoaded, isSignedIn, userFirstName, userLastName } =
    useCurrentUser();

  return (
    <>
      <SignedOut>
        <div className="flex items-center pb-2 pr-1 text-lg font-medium transition-all duration-300 ease-in-out hover:text-[var(--primary)] md:pb-0">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex items-center pr-1 text-lg font-medium">
          {isLoaded && isSignedIn ? (
            <div className="flex items-center pr-1 text-lg font-medium">
              <CustomLink href="/profile" aria-label="User profile page">
                {`${userFirstName} ${userLastName}`}
              </CustomLink>
              <div className="ml-4 flex items-center transition-all duration-300 ease-in-out hover:text-[var(--primary)]">
                <UserButton />
              </div>
            </div>
          ) : (
            <div>Loading profile...</div>
          )}
        </div>
      </SignedIn>
    </>
  );
}
