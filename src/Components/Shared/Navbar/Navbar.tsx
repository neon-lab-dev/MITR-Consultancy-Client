/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useRef } from "react";
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Container from "../Container/Container";
import Button from "@/Components/Reusable/Button/Button";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import HamburgerMenu from "./HamburgerMenu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useCurrentUser } from "@/redux/Features/Auth/authSlice";
import UserDropdown from "./UserDropdown";
import { useCart } from "@/providers/CartProvider/CartProvider";
import { motion, AnimatePresence } from "framer-motion";
import { CgArrowTopRight } from "react-icons/cg";

export type TLoggedInUser = {
  _id: string;
  name: string;
  role: "user" | "admin";
  email: string;
};

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector(useCurrentUser) as TLoggedInUser;
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartData } = useCart();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const neutralPages = [
    "/cart",
    "/checkout",
    "/get-started",
    "/profile",
    "/my-profile",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/payment-success",
  ];

  const textColor =
    neutralPages.includes(pathname) ||
    pathname.startsWith("/internship-programmes/") ||
    pathname.startsWith("/auth/")
      ? "text-neutral-85"
      : "text-white";

  const btnStyle =
    neutralPages.includes(pathname) ||
    pathname.startsWith("/internship-programmes/") ||
    pathname.startsWith("/auth/")
      ? "text-primary-20 border-primary-20"
      : "text-white border-white";

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
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      sessionStorage.setItem("scrollToSection", id);
      router.push("/");
    }
  };

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

  const newNavlinks = [
    {
      label: "Services",
      links: [
        {
          label: "Compliance Services",
          description: "ISO, DPDP, GDPR, SOC2",
          path: "compliance-services",
        },
        {
          label: "Cybersecurity Services",
          description: "VAPT, Risk Assessment, Audits",
          path: "security-services",
        },
        {
          label: "Software Development",
          description: "Secure Applications & Compliance-ready Systems",
          pataction: () => handleNavigation("services"),
        },
        {
          label: "UI/UX Design",
          description: "Secure & user-friendly Application Interfaces",
          action: () => handleNavigation("services"),
        },
        {
          label: "Training Programs",
          description: "Cybersecurity, Compliance & Awareness",
          path: "internship-programmes",
        },
      ],
    },
    {
      label: "Security Solutions",
      links: [
        {
          label: "Antivirus",
          path: "security-service/antivirus-service",
          description: "Malware threat protection",
        },
        {
          label: "EDR",
          path: "security-service/edr-service",
          description: "Endpoint threat detection",
        },
        {
          label: "Firewall",
          path: "security-service/firewall-service",
          description: "Network traffic control",
        },
        {
          label: "XDR",
          path: "security-service/xdr-service",
          description: "Extended threat response",
        },
        {
          label: "SIEM",
          path: "security-service/siem-service",
          description: "Security event monitoring",
        },
        {
          label: "DLP",
          path: "security-service/dlp-service",
          description: "Data loss prevention",
        },
        {
          label: "VAPT",
          path: "security-service/vapt-service",
          description: "Vulnerability assessment testing",
        },
      ],
    },
    {
      label: "Company",
      links: [
        {
          label: "About Us",
          path: "about-us",
        },
        {
          label: "Careers",
          path: "careers",
        },
        {
          label: "Privacy Policy",
          path: "privacy-policy",
        },
        {
          label: "Terms and Conditions",
          path: "terms-and-conditions",
        },
        {
          label: "Refund Policy",
          path: "refund-policy",
        },
      ],
    },
  ];

  return (
    <div id="home">
      <div
        className={`fixed w-full h-fit top-0 z-50 transition-all duration-300 pb-2 ${
          isScrolled
            ? "bg-neutral-40 pt-2"
            : "backdrop-blur-sm bg-transparent pt-5"
        }`}
      >
        <Container>
          <div className="flex w-full justify-between items-center font-Inter">
            <Link href={"/"}>
              <Image
                src={IMAGES.MITRConsoltancyLogo}
                alt="MITRA Consultancy"
                className="xl:w-[80px] w-[72px]"
              />
              <p className="text-neutral-130 text-xs font-semibold pt-1">
                From code to{" "}
                <span className="text-primary-110">compliance</span>
              </p>
            </Link>
            {/* Desktop Nav */}

            <div className="flex items-center gap-6">
              <div className="hidden xl:flex items-center gap-10 relative">
                {newNavlinks?.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    ref={dropdownRef}
                  >
                    <button
                      className={`flex items-center gap-1 font-semibold hover:text-primary-10 transition duration-300 ${
                        isScrolled ? "text-white" : textColor
                      }`}
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
                          className="absolute top-10 -left-0 bg-neutral-185 shadow-lg rounded-lg w-[280px] p-5 z-50 flex flex-col gap-5"
                        >
                          {item.links.map((link: any, index: number) => {
                            if (link.action) {
                              return (
                                <button
                                  key={index}
                                  onClick={() => {
                                    link.action();
                                    setActiveDropdown(null);
                                  }}
                                  className={`font-semibold hover:text-primary-10 transition duration-300 w-fit space-y-3 text-start ${
                                    isScrolled ? "text-white" : textColor
                                  }`}
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
                                  href={`/${link.path}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className={` font-semibold hover:text-primary-10 transition duration-300 w-fit space-y-3 text-start ${
                                    isScrolled ? "text-white" : textColor
                                  }`}
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

              {pathname !== "/" &&
                pathname !== "/compliance-services" &&
                pathname !== "/security-services" &&
                pathname !== "/cart" &&
                pathname !== "/auth/get-started" &&
                pathname !== "/checkout" &&
                pathname !== "/auth/verify-otp" &&
                pathname !== "/privacy-policy" &&
                pathname !== "/refund-policy" &&
                pathname !== "/terms-and-conditions" &&
                pathname !== "/payment-success" &&
                pathname !== "/careers" &&
                pathname !== "/about-us" &&
                !pathname.startsWith("/security/") &&
                !pathname.startsWith("/security-service/") && (
                  <>
                    <Link href={"/cart"} className="relative">
                      <Image
                        src={ICONS.cart}
                        alt="cart-icon"
                        className="size-8"
                      />
                      <div className="size-4 rounded-full bg-primary-20 text-white flex items-center justify-center absolute -top-1 -right-2 text-[9px]">
                        {cartData?.length}
                      </div>
                    </Link>

                    {user ? (
                      <UserDropdown btnStyle={btnStyle} />
                    ) : (
                      <Link
                        href="/auth/get-started"
                        className="hidden md:block"
                      >
                        <button
                          className={`border px-6 py-3 font-Inter font-medium rounded justify-center ${btnStyle}`}
                        >
                          Sign Up / Sign In
                        </button>
                      </Link>
                    )}
                  </>
                )}

              {!pathname.startsWith("/internship-programmes") &&
                pathname !== "/my-profile" && (
                  <Button
                    handleClick={() => setIsContactUsModalOpen(true)}
                    variant="primary"
                    title="Connect Us"
                    classNames="w-[198px] xl:h-[54px] md:h-[46px] hidden xl:flex"
                    icon={<CgArrowTopRight size={24} />}
                    iconPosition="right"
                  />
                )}

              {/* Hamburger Menu for Small Screens */}
              <div className="xl:hidden flex items-center bg-primary-110 p-3 rounded-xl">
                <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <Image
                    src={ICONS.hamburgerMenu}
                    alt="menu icon"
                    className="size-7"
                  />
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
