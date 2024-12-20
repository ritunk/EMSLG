// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { EmployeeButtons } from "../../utils/EmployeeHelper";
// import DataTable from "react-data-table-component";
// import { columns } from "../../utils/EmployeeHelper";

// const List = () => {
//   const [employees, setEmployees] = useState([]);
//   const [empLoading, setEmpLoading] = useState(false);

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       setEmpLoading(true);
//       try {
//         const response = await axios.get("http://localhost:5000/api/employee", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });

//         if (response.data.success) {
//           let sno = 1;

//           const data = await response.data.employees.map((emp) => ({
//             _id: emp._id,
//             sno: sno++,
//             dep_name: emp.department.dep_name,
//             name: emp.userId.name,
//             dob: new Date(emp.dob).toDateString(),

//             profileImage: (
//               <img
//                 width={40}
//                 className="rounded-full"
//                 src={`http://localhost:5000/public/uploads/${emp.userId.profileImage}`}
//               />
//             ),
//             action: <EmployeeButtons _id={emp._id} />,
//           }));

//           console.log(data);

//           setEmployees(data);
//         }
//       } catch (error) {
//         console.log(error);
//         if (error.response && !error.response.data.success) {
//           alert(error.response.data.error);
//         }
//       } finally {
//         setEmpLoading(false);
//       }
//     };
//     fetchEmployees();
//   }, []);

//   return (
//     <>
//       {empLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <div className="p-6">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold">Manage Employees</h3>
//           </div>

//           <div className="flex justify-between items-center">
//             <input
//               type="text"
//               placeholder="Search By Emp Name"
//               className="px-4 py-0.5 border"
//             />
//             <Link
//               to="/admin-dashboard/add-employee"
//               className="px-4 py-1 bg-teal-600 rounded text-white"
//             >
//               Add New Employee
//             </Link>
//           </div>

//           <div>
//             <DataTable columns={columns} data={employees} pagination />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default List;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EmployeeButtons } from "../../utils/EmployeeHelper";
import DataTable from "react-data-table-component";
import { columns } from "../../utils/EmployeeHelper";

const List = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [empLoading, setEmpLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      setEmpLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/employee", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (response.data.success) {
          let sno = 1;

          const data = response.data.employees.map((emp) => ({
            _id: emp._id,
            sno: sno++,
            dep_name: emp.department.dep_name,
            name: emp.userId.name,
            dob: new Date(emp.dob).toDateString(),
            profileImage: (
              <img
                width={40}
                className="rounded-full"
                src={`http://localhost:5000/public/uploads/${emp.userId.profileImage}`}
                alt="Profile"
              />
            ),
            action: <EmployeeButtons _id={emp._id} />,
          }));

          setEmployees(data);
          setFilteredEmployees(data); // Set filteredEmployees to initial data
        }
      } catch (error) {
        console.log(error);
        if (error.response && !error.response.data.success) {
          alert(error.response.data.error);
        }
      } finally {
        setEmpLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  // Update filteredEmployees whenever searchTerm or employees changes
  useEffect(() => {
    const filteredData = employees.filter((emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filteredData);
  }, [searchTerm, employees]);

  // Handle input change for the search box
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      {empLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Employees</h3>
          </div>

          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search By Emp Name"
              className="px-4 py-0.5 border"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Link
              to="/admin-dashboard/add-employee"
              className="px-4 py-1 bg-teal-600 rounded text-white"
            >
              Add New Employee
            </Link>
          </div>

          <div>
            <DataTable columns={columns} data={filteredEmployees} pagination />
          </div>
        </div>
      )}
    </>
  );
};

export default List;
