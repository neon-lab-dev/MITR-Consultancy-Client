/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS, IMAGES } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import { useCurrentUser } from "@/redux/Features/Auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { TLoggedInUser } from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleNavigation = (id: string) => {
    setIsSidebarOpen(false);
    if (pathname === "/") {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      sessionStorage.setItem("scrollToSection", id);
      router.push("/");
    }
  };

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const navlinks = [
    {
      label: "Services",
      links: [
        {
          label: "Compliance Services",
          description: "ISO, DPDP, GDPR, SOC2",
          path: "/compliance-services",
        },
        {
          label: "Cybersecurity Services",
          description: "VAPT, Risk Assessment, Audits",
          path: "/security-services",
        },
        {
          label: "Software Development",
          description: "Web, App and custom software Development",
          action: () => handleNavigation("services"),
        },
        {
          label: "UI/UX Design",
          description: "Secure & user-friendly Application Interfaces",
          action: () => handleNavigation("services"),
        },
        {
          label: "Training Programs",
          description: "Cybersecurity, Compliance & Awareness",
          path: "/training-programmes",
        },
      ],
    },
    {
      label: "Security Solutions",
      links: [
        {
          label: "Antivirus",
          path: "/security-service/antivirus-service",
          description: "Malware threat protection",
        },
        {
          label: "EDR",
          path: "/security-service/edr-service",
          description: "Endpoint threat detection",
        },
        {
          label: "Firewall",
          path: "/security-service/firewall-service",
          description: "Network traffic control",
        },
        {
          label: "XDR",
          path: "/security-service/xdr-service",
          description: "Extended threat response",
        },
        {
          label: "SIEM",
          path: "/security-service/siem-service",
          description: "Security event monitoring",
        },
        {
          label: "DLP",
          path: "/security-service/dlp-service",
          description: "Data loss prevention",
        },
        {
          label: "VAPT",
          path: "/security-service/vapt-service",
          description: "Vulnerability assessment testing",
        },
      ],
    },
    {
      label: "Company",
      links: [
        {
          label: "About Us",
          path: "/about-us",
        },
        {
          label: "Careers",
          path: "/careers",
        },
        {
          label: "Privacy Policy",
          path: "/privacy-policy",
        },
        {
          label: "Terms and Conditions",
          path: "/terms-and-conditions",
        },
        {
          label: "Refund Policy",
          path: "/refund-policy",
        },
      ],
    },
  ];

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

  useEffect(() => {
  const handleClickOutsideDropdown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setActiveDropdown(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutsideDropdown);

  return () =>
    document.removeEventListener(
      "mousedown",
      handleClickOutsideDropdown
    );
}, []);



  const dropdownVariants: any = {
    initial: {
      opacity: 0,
      y: -15,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isSidebarOpen ? "visible" : "invisible"
      }`}
    >
      <div className="fixed inset-0 bg-neutral-185/50 transition-opacity duration-300"></div>

      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-full max-w-[290px] bg-neutral-40 text-white z-50 shadow-lg transform transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
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

           <div ref={dropdownRef} className="flex flex-col gap-8 relative p-4 mt-5">
                {navlinks?.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onClick={() =>
  setActiveDropdown((prev) =>
    prev === item.label ? null : item.label
  )
}

                    
                  >
                    <button
                      className={`flex items-center gap-1 font-semibold hover:text-primary-10 transition duration-300 cursor-pointer text-white`}
                    >
                      {item?.label}
                      <Image
                        src={ICONS.downArrowWhite}
                        alt="down arrow"
                        className={`size-7 mt-1 transition-transform duration-300 ${
                          activeDropdown === item.label
                            ? "rotate-0"
                            : "rotate-180"
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="absolute top-10 -left-0 bg-neutral-185 shadow-lg rounded-lg w-full p-5 z-50 flex flex-col gap-5"
                        >
                          {item.links.map((link: any, index: number) => {
                            if (link.action) {
                              return (
                                <button
                                  key={index}
                                  onClick={() => {
                                    link.action();
                                    setActiveDropdown(null);
                                    setIsSidebarOpen(false)
                                  }}
                                  className={`font-semibold hover:text-primary-10 transition duration-300 w-fit space-y-3 text-start text-white`}
                                >
                                  <div className="flex items-center gap-3">
                                    {link.label}
                                    <Image
                                      src={ICONS.rightArrow2}
                                      alt="MITRA Consultancy"
                                      className="size-5"
                                    />
                                  </div>
                                  {link?.description && (
                                    <p className="text-neutral-175 text-sm">
                                      {link?.description}
                                    </p>
                                  )}
                                </button>
                              );
                            }

                            if (link.path) {
                              return (
                                <Link
                                  key={index}
                                  href={link.path}
                                  onClick={() => {setActiveDropdown(null); setIsSidebarOpen(false)}}
                                  className={` font-semibold hover:text-primary-10 transition duration-300 w-fit space-y-3 text-start text-white`}
                                >
                                  <div className="flex items-center gap-3">
                                    {link.label}
                                    <Image
                                      src={ICONS.rightArrow2}
                                      alt="MITRA Consultancy"
                                      className="size-5"
                                    />
                                  </div>
                                  {link?.description && (
                                    <p className="text-neutral-175 text-sm">
                                      {link?.description}
                                    </p>
                                  )}
                                </Link>
                              );
                            }

                            return null; // ✅ prevents crashes
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

          <div className="mt-auto p-4 flex flex-col gap-3">
            {!user && (
              <Link href="/auth/get-started">
                <button className="border px-6 w-full h-[36px] font-Inter text-sm md:text-lg font-medium rounded justify-center">
                  Sign Up / Sign In
                </button>
              </Link>
            )}
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
