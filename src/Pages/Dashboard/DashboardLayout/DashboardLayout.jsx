import { Outlet } from "react-router-dom";
import { DashboardNavbar } from "../../../components/DashboardNavbar/DashboardNavbar";


const DashboardLayout = () => {
    return (
        <div className="flex">
            <DashboardNavbar></DashboardNavbar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;