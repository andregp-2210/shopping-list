import { TokenResponse } from "@react-oauth/google";

export type UserProfileType = {
  id: string;
  name: string;
  familyName: string;
  givenName: string;
  picture: string;
  email: string;
  verifiedEmail: boolean;
};

export type UserProfileContextType = {
  setUserToken: (userToken: TokenResponse) => void;
  resetProfile: () => void;
  userProfile: UserProfileType;
};
