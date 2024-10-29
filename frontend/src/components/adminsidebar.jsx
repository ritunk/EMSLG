import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendar,
  FaCalendarAlt,
  FaCog,
  FaMoneyBillWave,
  FaTachometerAlt,
} from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Adminsidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-teal-600 h-12 flex items-center justify-center">
        <h3>Employee MS</h3>
      </div>
      <div className="px-4">
        <NavLink
          to="/admin-dashboard"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : " "
            } flex items-center space-x-4 block py-2.5 px-4 rounded`
          }
          end
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin-dashboard/employees"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : " "
            } flex items-center space-x-4 block py-2.5 px-4 rounded`
          }
        >
          <FaUsers />
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard/departments"
          className={({ isActive }) =>
            `${
              isActive ? "bg-teal-500" : " "
            } flex items-center space-x-4 block py-2.5 px-4 rounded`
          }
        >
          <FaBuilding />
          <span>Departments</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded"
        >
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded"
        >
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>

        <NavLink
          to="/admin-dashboard"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded"
        >
          <FaCog />
          <span>Setting</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Adminsidebar;
