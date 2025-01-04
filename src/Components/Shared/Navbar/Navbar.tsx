"use client";
import { useState, useEffect } from "react";
import { IMAGES } from "@/assets";
import Image from "next/image";
import Container from "../Container/Container";
import Button from "@/Components/Reusable/Button/Button";
import ContactUs from "@/Components/ContactUs/ContactUs";
import HamburgerMenu from "./HamburgerMenu";
import { navlinks } from "./navlinks";

const Navbar = () => {
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

  return (
    <div id="home">
      <div
        className={`fixed w-full h-fit top-0 z-50 transition-all duration-300 py-2 ${isScrolled ? "bg-neutral-40 bg-opacity-75" : "bg-transparent"
          }`}
      >
        <Container>
          <div className="flex w-full justify-between items-center font-Inter">
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
            </div>
            <div className="flex gap-6">
              <Button
                handleClick={() => setIsContactUsModalOpen(true)}
                variant="primary"
                title="Contact Us"
                classNames="xl:w-[200px] w-[148px] xl:h-[54px] md:h-[46px] hidden md:flex md:text-lg"
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
