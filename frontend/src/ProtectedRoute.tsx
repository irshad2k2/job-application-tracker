import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const authenticated = localStorage.getItem("authenticated");
  if (authenticated === "true") {
    return <>{children}</>;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default ProtectedRoute;
