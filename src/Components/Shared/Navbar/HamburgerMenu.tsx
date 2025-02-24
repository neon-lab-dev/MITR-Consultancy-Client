import { IMAGES } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import { useCurrentUser } from "@/redux/Features/Auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { TLoggedInUser } from "./Navbar";

interface HamburgerMenuProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  setIsContactUsModalOpen: (isOpen: boolean) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
  setIsContactUsModalOpen,
}) => {
  const user = useSelector(useCurrentUser) as TLoggedInUser;
  const router = useRouter();
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedSection = sessionStorage.getItem("scrollToSection");
    if (storedSection) {
      setTimeout(() => {
        document
          .getElementById(storedSection)
          ?.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollToSection");
      }, 300);
    }
  }, [pathname]);

  // Handle navigation & close sidebar
  const handleNavigation = (id: string) => {
    setIsSidebarOpen(false); // Close sidebar

    if (pathname === "/") {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      sessionStorage.setItem("scrollToSection", id);
      router.push("/");
    }
  };

  const navlinks = [
    { label: "Home", action: () => handleNavigation("home") },
    { label: "Services", action: () => handleNavigation("services") },
    { label: "About Us", action: () => handleNavigation("aboutUs") },
    { label: "Portfolio", action: () => handleNavigation("portfolio") },
    { label: "Training Programmes", path: "/internship-programmes" },
  ];

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <div className={`fixed inset-0 z-50 ${isSidebarOpen ? "visible" : "invisible"}`}>
      {/* Overlay (click outside to close) */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"></div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-2/3 max-w-[250px] bg-neutral-40 text-white z-50 shadow-lg transform transition-transform duration-500 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between p-4">
            <Image
              src={IMAGES.MITRConsoltancyLogo}
              alt="MITRA Consultancy"
              className="h-[36px] w-[72px]"
            />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white text-2xl"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col gap-6 p-4">
            {navlinks.map((link, index) =>
              link.action ? (
                <button
                  key={index}
                  onClick={link.action}
                  className="text-start text-lg font-medium hover:text-primary-10 transition duration-300"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={index}
                  href={link.path}
                  className="text-lg font-medium hover:text-primary-10 transition duration-300"
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="mt-auto p-4 flex flex-col gap-3">
            {
              !user && 
              <Link href="/auth/get-started">
            <button className={`border px-6 w-full h-[36px] font-Inter text-sm md:text-lg font-medium rounded justify-center`}>
              Sign Up / Sign In
            </button>
            </Link>
            }
            <Button
              handleClick={() => {
                setIsContactUsModalOpen(true);
                setIsSidebarOpen(false);
              }}
              variant="primary"
              title="Contact Us"
              classNames="md:h-[46px] h-[36px] text-sm md:text-lg w-full flex items-center justify-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
