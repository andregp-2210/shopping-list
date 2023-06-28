import axios from "axios";
import * as React from "react";
import { TokenResponse } from "@react-oauth/google";

import { UserProfileContextType, UserProfileType } from "../types/user-profile";

type AuthUserProviderProps = {
  children: React.ReactNode;
};

export const AuthUserContext =
  React.createContext<UserProfileContextType | null>(null);

const AuthUserProvider: React.FC<AuthUserProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<TokenResponse>();
  const [profile, setProfile] = React.useState<UserProfileType>({
    name: "",
    picture: "",
    email: "",
    familyName: "",
    givenName: "",
    id: "",
    verifiedEmail: false,
  });

  const setUserToken = (userToken: TokenResponse) => {
    setUser(userToken);
  };

  const resetProfile = () => {
    setProfile({
      name: "",
      picture: "",
      email: "",
      familyName: "",
      givenName: "",
      id: "",
      verifiedEmail: false,
    });
  };

  React.useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  return (
    <AuthUserContext.Provider value={{ userProfile: profile, setUserToken, resetProfile }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export {AuthUserProvider};
