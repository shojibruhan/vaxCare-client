import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/dashboard/Navbar";
import Sidebar from "../pages/dashboard/Sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log(toggleSidebar);
  };

  return (
    // <div className="drawer lg:drawer-open bg-white">
    <div className="min-h-screen bg-white drawer lg:drawer-open">
      {/* Mobile Drawer Checkbox  */}
      <input
        id="drawer-toggle"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={toggleSidebar}
      />
      {/* Page Content  */}
      <div className="p-4 xl:ml-80">
        <Navbar sidebarOpen={sidebarOpen} />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
      {/* sidebar */}
      <Sidebar />
    </div>
  );
};

export default DashboardLayout;
