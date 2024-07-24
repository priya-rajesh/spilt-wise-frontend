import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("isAuthenticated", isAuthenticated);
  if (isLoggedIn !== "true") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
