import React, { useContext } from "react";

import { AuthUserContext } from "./context/auth-user";

import { UserProfileContextType } from "./types/user-profile";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./unauthenticated-app";

function App() {
  const { userProfile } = useContext(AuthUserContext) as UserProfileContextType;

  // const logOut = () => {
  //   googleLogout();
  // };
  if (userProfile.name) {
    return (
      <main>
          <AuthenticatedApp />
      </main>
    );
  }
  return <UnauthenticatedApp />;
}
export default App;
