import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  if (loading === false) {
    if (isAuthenticated === false) {
      return <Navigate to="/login" />;
    }
    if (isAdmin === true && user.role === "user") {
      return <Navigate to="/login" />;
    }
    return children;
  }
  return null;
};

export default ProtectedRoute;
