import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const RoleBaseRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!requiredRole.includes(user.role)) {
    <Navigate to="/unauthorized" />;
  }

  return user ? children : <Navigate to="/login" />;
};

export default RoleBaseRoute;
