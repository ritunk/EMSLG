import React from "react";
import { useAuth } from "../context/authContext";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Adminsidebar from "../components/adminsidebar";
import Navbar from "../components/Navbar";
import AdminSummary from "../components/AdminSummary";
const AdminDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex">
      {/* AdminDashboard {user && user.name} */}
      <Adminsidebar />
      <div className="flex-1 ml-64 bg-gray-100 h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
