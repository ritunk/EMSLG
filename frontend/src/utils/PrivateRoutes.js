import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

const privateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/login"></Navigate>;
};

export default privateRoutes;
