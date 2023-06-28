import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { AuthUserProvider } from "./context/auth-user";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="606579861739-2ke0bredb7vsqefo0ld1e5hemcbeoemg.apps.googleusercontent.com">
      <AuthUserProvider>
        <App />
      </AuthUserProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
