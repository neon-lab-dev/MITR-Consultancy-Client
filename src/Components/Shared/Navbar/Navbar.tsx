"use client";
import { useState, useEffect } from "react";
import { IMAGES } from "@/assets";
import Image from "next/image";
import Container from "../Container/Container";
import Button from "@/Components/Reusable/Button/Button";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import HamburgerMenu from "./HamburgerMenu";
import { navlinks } from "./navlinks";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useCurrentUser } from "@/redux/Features/Auth/authSlice";
import UserDropdown from "./UserDropdown";

export type TLoggedInUser = {
  _id: string;
  name: string;
  role: "user" | "admin";
  email: string;
};

const Navbar = () => {
  const pathname = usePathname();
  const user = useSelector(useCurrentUser) as TLoggedInUser;
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const neutralPages = [
    "/cart",
    "/checkout",
    "/get-started",
    "/profile",
    "/my-profile",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy"
  ];

  const textColor = neutralPages.includes(pathname) || pathname.startsWith("/internship-programmes/") || pathname.startsWith("/auth/")
    ? "text-neutral-85"
    : "text-white";

  const btnStyle = neutralPages.includes(pathname) || pathname.startsWith("/internship-programmes/") || pathname.startsWith("/auth/")
    ? "text-primary-20 border-primary-20"
    : "text-white border-white";

  return (
    <div id="home">
      <div
        className={`fixed w-full h-fit top-0 z-50 transition-all duration-300 py-2 ${isScrolled ? "bg-neutral-40" : "backdrop-blur-sm bg-transparent"
          }`}
      >
        <Container>
          <div className="flex w-full justify-between items-center font-Inter">
            <Link href={"/"}>
              <Image
                src={IMAGES.MITRConsoltancyLogo}
                alt="MITR Consultancy"
                className="xl:w-[134px] xl:h-[64px] md:w-[90px] md:h-[45px] h-[36px] w-[72px]"
              />
            </Link>
            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-10">
              {navlinks.map((link, index) => (
                link?.action ? 
                <button
                  key={index}
                  onClick={link.action}
                  className={`text-lg font-medium hover:text-primary-10 transition duration-300 ${isScrolled && "text-white"} ${textColor}`}
                >
                  {link.label}
                </button>
                : <Link key={index} href={link.path} className={`text-lg font-medium hover:text-primary-10 transition duration-300  ${isScrolled && "text-white"} ${textColor}`}>{link.label}</Link>
              ))}
            </div>
            <div className="flex gap-6">
              
              {
                user ? 
                <UserDropdown btnStyle={btnStyle} />
                :
                <Link href={user ? "/my-profile" : "/auth/get-started"}>
                <button className={`border px-6 py-3 font-Inter text-lg font-medium rounded justify-center ${btnStyle}`}>
                Sign Up / Sign In
                  </button>
                  </Link>
              }
              <Button
                handleClick={() => setIsContactUsModalOpen(true)}
                variant="primary"
                title="Contact Us"
                classNames="w-[148px] xl:h-[54px] md:h-[46px] hidden md:flex md:text-lg"
              />
              {/* Hamburger Menu for Small Screens */}
              <div className="xl:hidden flex items-center">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <span className="text-white text-2xl">&#9776;</span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Sidebar */}
      <HamburgerMenu
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />

      {/* Contact Us Modal */}
      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default Navbar;
