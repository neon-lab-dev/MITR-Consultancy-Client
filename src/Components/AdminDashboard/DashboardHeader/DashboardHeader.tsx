"use client";
import { TLoggedInUser } from "@/Components/Shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/Features/Auth/authSlice";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DashboardHeader = () => {
    const user = useSelector(useCurrentUser) as TLoggedInUser;
    const pathname = usePathname();
    const heading = pathname === "/admin/all-users" ? "All Users" : "Programmes"

    const [initials, setInitials] = useState<string>("");
    
        useEffect(() => {
            const extractedInitials = (() => {
                const shortName = user?.name || "Your Name";
                const nameParts = shortName.split(" ");
                return nameParts.length > 1
                    ? nameParts[0][0] + nameParts[1][0]
                    : nameParts[0]?.[0] || "";
            })();
    
            setInitials(extractedInitials.toUpperCase());
        }, [user?.name]);
    return (
        <div className="bg-white py-4 border-b border-neutral-10//40 w-full font-Inter flex items-center justify-between">
            <h2 className="text-neutral-45 text-2xl font-semibold leading-9">
                {heading}
            </h2>
            <div className="flex items-center gap-2">
                <div className="bg-primary-20 size-9 rounded-full flex items-center justify-center text-white font-semibold uppercase">{initials}</div>
                <p className="text-neutral-45 font-medium">{user?.name}</p>
            </div>
        </div>
    );
};

export default DashboardHeader;