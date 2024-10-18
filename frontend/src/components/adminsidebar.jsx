import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const Adminsidebar = () => {
  return (
    <div>
      <div>
        <h3>Employee MS</h3>
      </div>
      <div>
        <NavLink to="/admin-dashboard">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin-dashboard">
          <FaUsers />
          <span>Employees</span>
        </NavLink>

        <NavLink to="/admin-dashboard">
          <FaUsers />
          <span>Leaves</span>
        </NavLink>

        <NavLink to="/admin-dashboard">
          <FaUsers />
          <span>Salary</span>
        </NavLink>

        <NavLink to="/admin-dashboard">
          <FaUsers />
          <span>Department</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Adminsidebar;
