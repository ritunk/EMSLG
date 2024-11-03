import axios from "axios";
import { useNavigate } from "react-router-dom";

export const fetchDepartments = async () => {
  let departments;

  try {
    const response = await axios.get("http://localhost:5000/api/department", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.data.success) {
      departments = response.data.departments;
    }
  } catch (error) {
    console.log(error);
    if (error.response && !error.response.data.success) {
      alert(error.response.data.error);
    }
  }

  return departments;
};

export const getEmployees = async (id) => {
  let employees;

  try {
    const response = await axios.get(
      `http://localhost:5000/api/employee/department/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(response);
    if (response.data.success) {
      employees = response.data.employees;
    }
  } catch (error) {
    console.log(error);
    if (error.response && !error.response.data.success) {
      console.log(error.response.data.error);
    }
  }

  return employees;
};

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
    width: "70px",
  },

  {
    name: "Name",
    selector: (row) => row.name,
    width: "130px",
  },
  {
    name: "Image",
    selector: (row) => row.profileImage,
    width: "100px",
  },
  {
    name: "Department",
    selector: (row) => row.dep_name,
  },
  {
    name: "DOB",
    selector: (row) => row.dob,
  },

  {
    name: "Action",
    selector: (row) => row.action,
    center: true,
  },
];

export const EmployeeButtons = ({ _id }) => {
  const navigate = useNavigate();

  return (
    <div className="flex space-x-1">
      <button
        className="px-4 py-1 bg-teal-600 text-white"
        onClick={() => navigate(`/admin-dashboard/employees/${_id}`)}
      >
        View
      </button>
      <button
        className="px-4 py-1 bg-blue-500 text-white"
        onClick={() => navigate(`/admin-dashboard/employees/edit/${_id}`)}
      >
        Edit
      </button>
      <button
        className="px-4 py-1 bg-green-500 text-white"
        onClick={() => navigate(`/admin-dashboard/employees/salary/${_id}`)}
      >
        Salary
      </button>
      <button className="px-4 py-1 bg-red-500 text-white">Leave</button>
    </div>
  );
};
