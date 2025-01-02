"use client";
import { useState, useEffect } from "react";
import { IMAGES } from "@/assets";
import Image from "next/image";
import Container from "../Container/Container";
import Button from "@/Components/Reusable/Button/Button";
import ContactUs from "@/Components/ContactUs/ContactUs";

const Navbar = () => {
    const [isContactUsModalOpen, setIsContactUsModalOpen] = useState<boolean>(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSectionHeight = document.getElementById("home")?.offsetHeight || 0;
            setIsScrolled(window.scrollY > heroSectionHeight - 100); // Adjust for better timing
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navlinks = [
        { label: "Home", action: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
        { label: "Services", action: () => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }) },
        { label: "About Us", action: () => document.getElementById("aboutUs")?.scrollIntoView({ behavior: "smooth" }) },
        { label: "Portfolio", action: () => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" }) },
    ];

    return (
        <div>
            <div id="home"
        className={`fixed w-full h-fit top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-neutral-40 bg-opacity-90 shadow-md" : "bg-transparent backdrop-blur-sm"}`}>
                <Container>
                    <div className={`flex justify-between items-center font-Inter ${isScrolled ? "py-2" : "py-6"}`}>
                        <Image
                            src={IMAGES.MITRConsoltancyLogo}
                            alt="MITR Consultancy"
                            className="xl:w-[134px] xl:h-[64px] md:w-[90px] md:[45px] h-[36px] w-[72px]"
                        />
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
                        <Button handleClick={() => setIsContactUsModalOpen(true)} variant="primary" title="Contact Us" />
                    </div>
                </Container>
            </div>
            <ContactUs isContactUsModalOpen={isContactUsModalOpen} setIsContactUsModalOpen={setIsContactUsModalOpen} />
        </div>
    );
};

export default Navbar;
