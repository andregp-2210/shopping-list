import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { AuthUserContext } from "../context/auth-user";

import { UserProfileContextType } from "../types/user-profile";

const Login = () => {
  const { setUserToken } = useContext(
    AuthUserContext
  ) as UserProfileContextType;

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUserToken(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });
  
  return (
    <div>
      <button onClick={() => login()}>Sign in with Google 🚀 </button>
    </div>
  );
};

export { Login };
