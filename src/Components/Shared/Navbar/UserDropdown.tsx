"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/assets";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { logout, useCurrentUser } from "@/redux/Features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { TLoggedInUser } from "./Navbar";



const UserDropdown = ({ btnStyle }: { btnStyle: string }) => {
    const user = useSelector(useCurrentUser) as TLoggedInUser;
    const dispatch = useDispatch();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const close = (e: MouseEvent) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    const userMenuItems = [
        { label: "My Profile", path: "/my-profile", },
    ];

    // Logout function
    const handleLogout = async () => {
        try {
          const response = await fetch(
            "https://mitr-backend.vercel.app/api/v1/logout"
          );
    
          if (response.ok) {
            dispatch(logout());
            toast.success(`See you again ${user?.name}`);
            router.push("/auth/get-started");
            window.location.reload();
          } else {
            toast.error("Logout failed");
          }
        } catch (err) {
          toast.error("Failed to log out. Please try again.");
          console.log(err);
        }
      };

    return (
        <div ref={dropDownRef} className="relative w-fit">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className={`border px-6 py-3 font-Inter text-lg font-medium rounded justify-center flex items-center gap-2 ${btnStyle}`}>
                    {user ? user?.name : "Sign Up / Sign In"}
                <Image
                    src={ICONS.downArrowBlue}
                    alt="Profile icon"
                    className={`size-6 transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}
                />

            </button>

            <div
                className={`${open ? "visible" : "invisible"
                    } absolute top-14 z-50 w-full space-y-1 bg-white py-3 rounded-xl flex flex-col`}
            >
                {userMenuItems.map((item, index) => (
                    <Link
                        href={item.path}
                        key={index}
                        className={`rounded-sm px-3 py-2 ${open ? "opacity-100 duration-500" : "opacity-0 duration-150"
                            } hover:bg-primary-gradient hover:text-primary-10 flex items-center gap-3 text-neutral-10`}
                        style={{
                            transform: `translateY(${open ? 0 : (index + 1) * 10}px)`,
                        }}
                    >
                        {item.label}
                    </Link>
                ))}

                {/* Logout button */}
                <button
                    onClick={handleLogout}
                    className={`rounded-sm px-3 py-2 ${open ? "opacity-100 duration-500" : "opacity-0 duration-150"
                        } hover:bg-primary-gradient hover:text-primary-10 flex items-center gap-3 text-neutral-10`}
                    style={{
                        transform: `translateY(${open ? 0 : (userMenuItems.length + 1) * 10
                            }px)`,
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default UserDropdown;
