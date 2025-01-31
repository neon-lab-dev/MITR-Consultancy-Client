"use client";
import { usePathname } from "next/navigation";

const DashboardHeader = () => {
    const pathname = usePathname();
    const heading = pathname === "/admin/all-users" ? "All Users" : "Programmes"
    return (
        <div className="bg-white py-4 border-b border-neutral-10//40 w-full font-Inter flex items-center justify-between">
            <h2 className="text-neutral-45 text-2xl font-semibold leading-9">
                {heading}
            </h2>
            <div className="flex items-center gap-2">
                <div className="bg-primary-20 size-9 rounded-full flex items-center justify-center text-white font-semibold uppercase">RS</div>
                <p className="text-neutral-45 font-medium">Rahul Sutradhar</p>
            </div>
        </div>
    );
};

export default DashboardHeader;