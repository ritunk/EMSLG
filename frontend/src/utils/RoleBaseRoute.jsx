import React from "react";
import { useAuth } from "../context/authContext";

const RoleBaseRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    <div>Loading...</div>;
  }

  return <div>RoleBaseRoute</div>;
};

export default RoleBaseRoute;
