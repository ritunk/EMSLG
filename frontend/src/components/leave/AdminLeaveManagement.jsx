// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AdminLeaveManagement = () => {
//   const [leaves, setLeaves] = useState([]);

//   useEffect(() => {
//     const fetchLeaves = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/leave", {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         });
//         console.log(response.data);
//         setLeaves(response.data.leaves);
//       } catch (error) {
//         console.error("Failed to fetch leaves", error);
//       }
//     };
//     fetchLeaves();
//   }, []);

//   const handleStatusUpdate = async (leaveId, status) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/api/leave/update`,
//         { leaveId, status },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       if (response.data.success) {
//         alert(`Leave ${status.toLowerCase()} successfully`);
//         setLeaves(
//           leaves.map((leave) =>
//             leave._id === leaveId ? { ...leave, status } : leave
//           )
//         );
//       }
//     } catch (error) {
//       alert("Failed to update leave status");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Leave Management</h2>
//       <ul className="space-y-4">
//         {leaves.map((leave) => (
//           <li
//             key={leave._id}
//             className="p-4 bg-white shadow-md rounded-lg flex justify-between items-center"
//           >
//             <div className="text-lg font-medium">{leave.reason}</div>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-500">{leave.status}</span>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => handleStatusUpdate(leave._id, "Approved")}
//                   className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
//                 >
//                   Approve
//                 </button>
//                 <button
//                   onClick={() => handleStatusUpdate(leave._id, "Rejected")}
//                   className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//                 >
//                   Reject
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminLeaveManagement;

import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminLeaveManagement = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/leave", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log(response.data);
        setLeaves(response.data.leaves);
      } catch (error) {
        console.error("Failed to fetch leaves", error);
      }
    };
    fetchLeaves();
  }, []);

  const handleStatusUpdate = async (leaveId, status) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/leave/update`,
        { leaveId, status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        alert(`Leave ${status.toLowerCase()} successfully`);
        setLeaves(
          leaves.map((leave) =>
            leave._id === leaveId ? { ...leave, status } : leave
          )
        );
      }
    } catch (error) {
      alert("Failed to update leave status");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Leave Management
      </h2>
      <ul className="space-y-4">
        {leaves.map((leave) => (
          <li
            key={leave._id}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <p className="text-lg font-medium text-gray-700">
              <span className="font-bold">Employee Name:</span>{" "}
              {leave.employeeId?.userId?.name || "N/A"}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Email:</span>{" "}
              {leave.employeeId?.userId?.email || "N/A"}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Department:</span>{" "}
              {leave.employeeId?.department?.dep_name || "N/A"}
            </p>
            <p className="text-lg text-gray-700">
              <span className="font-bold">Reason:</span> {leave.reason}
            </p>
            <p
              className={`text-lg font-semibold ${
                leave.status === "Approved"
                  ? "text-green-600"
                  : leave.status === "Rejected"
                  ? "text-red-600"
                  : "text-yellow-600"
              }`}
            >
              <span className="font-bold">Status:</span> {leave.status}
            </p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => handleStatusUpdate(leave._id, "Approved")}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Approve
              </button>
              <button
                onClick={() => handleStatusUpdate(leave._id, "Rejected")}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Reject
              </button>
              <button
                onClick={() => handleStatusUpdate(leave._id, "Pending")}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Mark as Pending
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminLeaveManagement;
