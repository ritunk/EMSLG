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

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },

  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Image",
    selector: (row) => row.profileImage,
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
  },
];

export const EmployeeButtons = ({ _id }) => {
  const navigate = useNavigate();

  const handleDelete = async (_id) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/department/${_id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.success) {
          onDepartmentDelete(_id);
        }
      } catch (error) {
        console.log(error);
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      }
    }
  };
  return (
    <div className="flex space-x-3">
      <button
        className="px-4 py-1 bg-teal-600 text-white"
        onClick={() => navigate(`/admin-dashboard/department/${_id}`)}
      >
        View
      </button>
      <button className="px-4 py-1 bg-blue-500 text-white">Edit</button>
      <button className="px-4 py-1 bg-green-500 text-white">Salary</button>
      <button className="px-4 py-1 bg-Yellow-500 text-white">Leave</button>
    </div>
  );
};
