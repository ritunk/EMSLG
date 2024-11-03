import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/EmployeeDashboard/Sidebar";

const EmployeeDashboard = () => {
  return (
    <div className="flex">
      {/* AdminDashboard {user && user.name} */}
      <Sidebar />
      <div className="flex-1 ml-64 bg-gray-100 h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
