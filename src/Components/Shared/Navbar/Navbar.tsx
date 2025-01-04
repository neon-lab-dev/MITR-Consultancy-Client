"use client";
import { useState, useEffect } from "react";
import { IMAGES } from "@/assets";
import Image from "next/image";
import Container from "../Container/Container";
import Button from "@/Components/Reusable/Button/Button";
import ContactUs from "@/Components/ContactUs/ContactUs";

const Navbar = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.getElementById("home")?.offsetHeight || 0;
      setIsScrolled(window.scrollY > heroSectionHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = [
    {
      label: "Home",
      action: () =>
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Services",
      action: () =>
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "About Us",
      action: () =>
        document
          .getElementById("aboutUs")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Portfolio",
      action: () =>
        document
          .getElementById("portfolio")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <div>
      <div
        id="home"
        className={`fixed w-full h-fit top-0 z-50 transition-all duration-300 ${
          isSidebarOpen ? "opacity-0" : "opacity-100 duration-500"
        }  ${
          isScrolled
            ? "bg-neutral-40 bg-opacity-75 shadow-md"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <Container>
          <div
            className={`flex w-full justify-between items-center font-Inter ${
              isScrolled ? "py-2" : "py-6"
            }`}
          >
            <Image
              src={IMAGES.MITRConsoltancyLogo}
              alt="MITR Consultancy"
              className="xl:w-[134px] xl:h-[64px] md:w-[90px] md:h-[45px] h-[36px] w-[72px]"
            />
            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-10">
              {navlinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.action}
                  className="text-white text-lg font-medium hover:text-primary-10 transition duration-300"
                >
                  {link.label}
                </button>
              ))}
              {/* Contact Us Button */}
            </div>
            <div className="flex gap-6">
              <Button
                handleClick={() => setIsContactUsModalOpen(true)}
                variant="primary"
                title="Contact Us"
                classNames="  xl:w-[200px] w-[148px] xl:h-[54px] md:h-[46px] hidden md:flex  md:text-lg"
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
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-[250px] bg-neutral-40 bg-opacity-75 text-white z-50 shadow-lg transition-transform transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <Image
              src={IMAGES.MITRConsoltancyLogo}
              alt="MITR Consultancy"
              className="h-[36px] w-[72px]"
            />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white text-2xl"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col gap-4 p-4">
            {navlinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  link.action();
                  setIsSidebarOpen(false); // Close sidebar after navigation
                }}
                className="text-lg font-medium hover:text-primary-10 transition duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-auto p-4">
            <Button
              handleClick={() => {
                setIsContactUsModalOpen(true);
                setIsSidebarOpen(false); // Close sidebar when opening modal
              }}
              variant="primary"
              title="Contact Us"
              classNames="md:h-[46px] h-[36px] text-sm md:text-lg w-full flex item-center justify-center"
            />
          </div>
        </div>
      </div>

      {/* Contact Us Modal */}
      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default Navbar;
