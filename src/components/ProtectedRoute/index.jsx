import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const authkey = localStorage.getItem("authkey");

  if (!authkey && ["/mediumprofile", "/devtoprofile"].includes(pathname)) {
    return <Navigate to="/" />;
  }
  return <Element />;
};
