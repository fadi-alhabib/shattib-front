import { Outlet } from "react-router-dom";
import AdminNavBar from "../components/AdminNavBar";
import AdminSidePanel from "../components/AdminSidePanel";
import { ConfirmDeleteProvider } from "../context/ConfirmDeleteContext";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";

const AdminLayout = () => {
  return (
    <>
      <ConfirmDeleteProvider>
        <ConfirmDeleteModal />
        <AdminNavBar />
        <div className="flex">
          <AdminSidePanel />
          <div className="w-full ps-sidepanel pt-16">
            <Outlet />
          </div>
        </div>
      </ConfirmDeleteProvider>
    </>
  );
};

export default AdminLayout;
