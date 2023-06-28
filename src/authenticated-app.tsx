import { Routes, BrowserRouter, Route } from "react-router-dom";

const AuthenticatedApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<div>app screen</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export { AuthenticatedApp };
