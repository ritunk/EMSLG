import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const AdminDashboard = () => {
  const { user } = useAuth();

  return <div>AdminDashboard {user && user.name}</div>;
};

export default AdminDashboard;
