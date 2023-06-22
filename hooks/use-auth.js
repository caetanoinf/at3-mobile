import { useCallback } from "react";
import { auth } from "../firebase";
import { useSession } from "../contexts";

export function useAuth() {
  const session = useSession();

  const signIn = useCallback(({ email, password }) => {
    return auth.signInWithEmailAndPassword(email, password);
  });

  const signUp = useCallback(async ({ email, password, name }) => {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    await auth.currentUser.updateProfile({ displayName: name });
    return response;
  });

  const signOut = useCallback(() => {
    return auth.signOut();
  });

  return {
    authenticating: session.authenticating,
    authenticatedUser: session.authenticatedUser,
    signIn,
    signUp,
    signOut,
  };
}
