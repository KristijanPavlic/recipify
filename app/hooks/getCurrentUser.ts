import { useUser } from "@clerk/nextjs";

/**
 * A custom hook to retrieve the current user's authentication status and details.
 *
 * @returns {Object} - An object containing `isLoaded`, `isSignedIn`, and `user`.
 */
export const useCurrentUser = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const userFirstName = user?.firstName ? user.firstName : "";
  const userLastName = user?.lastName ? user.lastName[0] + "." : "";

  return {
    isLoaded,
    isSignedIn,
    user,
    userFirstName,
    userLastName,
  };
};
