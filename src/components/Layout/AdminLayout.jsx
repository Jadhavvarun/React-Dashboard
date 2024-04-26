// AdminLayout.jsx
import SideNav from "../Admin/SideNav";
import Sidebar from "../Admin/Sidebar";
import DashboardData from "../Admin/DashboardData";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-screen">
        <Sidebar />
      </div>
      <div className="flex flex-col ml-16">
        <div className="fixed top-0 left-16 right-0">
          <SideNav />
        </div>
        <div>
          <DashboardData />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
