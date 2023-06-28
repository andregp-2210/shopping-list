import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Login } from "./screens/login";

const UnauthenticatedApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export { UnauthenticatedApp };
