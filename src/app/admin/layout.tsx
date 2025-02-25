import DashboardHeader from "@/Components/AdminDashboard/DashboardHeader/DashboardHeader";
import DashboardSidebar from "@/Components/AdminDashboard/DashboardSidebar/DashboardSidebar";
import { ReactNode } from "react";


const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex">
            <DashboardSidebar />
            <div className="w-full flex flex-col gap-8 px-8">
                <DashboardHeader />
                <div className="">
                {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;