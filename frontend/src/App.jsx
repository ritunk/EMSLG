import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import PrivateRoutes from "./utils/PrivateRoutes.jsx";
import RoleBaseRoute from "./utils/RoleBaseRoute";
import AdminSummary from "./components/AdminSummary.jsx";
import DepartmentList from "./components/department/DepartmentList.jsx";
import AddDepartment from "./components/department/AddDepartment.jsx";
import EditDepartment from "./components/department/EditDepartment.jsx";
import List from "./components/employee/List.jsx";
import Add from "./components/employee/Add.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/admin-dashboard"></Navigate>}
        ></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoutes>
              <RoleBaseRoute requiredRole={["admin"]}>
                <AdminDashboard />
              </RoleBaseRoute>
            </PrivateRoutes>
          }
        >
          <Route index element={<AdminSummary />}></Route>
          <Route
            path="/admin-dashboard/departments"
            element={<DepartmentList />}
          ></Route>
          <Route
            path="/admin-dashboard/add-department"
            element={<AddDepartment />}
          ></Route>
          <Route path="/admin-dashboard/add-employee" element={<Add />}></Route>
          <Route
            path="/admin-dashboard/department/:id"
            element={<EditDepartment />}
          ></Route>

          <Route path="/admin-dashboard/employees" element={<List />}></Route>
        </Route>
        <Route
          path="/employee-dashboard"
          element={<EmployeeDashboard />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
