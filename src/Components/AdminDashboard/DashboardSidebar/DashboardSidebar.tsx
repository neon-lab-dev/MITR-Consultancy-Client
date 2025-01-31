"use client"
import { IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebar = () => {
    const pathname = usePathname();
    const isActive = (path: string): boolean => pathname === path;

    const adminMenus = [
        { name: "Dashboard", link: "/admin" },
        { name: "All Users", link: "/admin/all-users" },
        { name: "Programmes", link: "/admin/programmes" },
    ];
    return (
        <div className="w-60 min-w-60 h-screen px-4 py-6 font-Inter flex flex-col justify-between sticky left-0 top-0 bg-neutral-45">
            <div>
                <Link href={"/"}>
                    <Image
                        src={IMAGES.MITRConsoltancyLogo}
                        alt="MITR Consultancy"
                        className="xl:w-[134px] xl:h-[64px] md:w-[90px] md:h-[45px] h-[36px] w-[72px]"
                    />
                </Link>
                <div className="mt-10">
                    <ul className="flex flex-col gap-2">
                        {adminMenus.map((menu) => (
                            <li
                                key={menu.link}
                                className={`px-3 py-2 ${isActive(menu.link)
                                    ? "bg-blue-900/30 text-primary-10 rounded-lg"
                                    : "text-white"
                                    }`}
                            >
                                <Link href={menu.link}>{menu.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button className="bg-primary-20 hover:bg-primary-10/90 py-[10px] px-4 text-white text-sm leading-5 font-semibold w-full rounded-lg text-center flex items-center gap-2 justify-center">
                {/* <Image src={ICONS.logout} alt="logout-icon" className="size-[18px]" /> */}
                Logout
            </button>
        </div>
    );
};

export default DashboardSidebar;