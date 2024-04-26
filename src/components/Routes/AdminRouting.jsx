// AdminRouting.jsx
import AdminLayout from "../Layout/AdminLayout";
import DashRouting from "./DashRouting";
import { Routes, Route } from "react-router-dom";

const AdminRouting = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashRouting />} />
      </Route>
    </Routes>
  );
};

export default AdminRouting;