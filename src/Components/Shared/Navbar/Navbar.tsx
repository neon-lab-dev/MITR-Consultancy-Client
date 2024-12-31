"use client"
import { IMAGES } from "@/assets";
import Image from "next/image";
import Container from "../Container/Container";
import Button from "@/Components/Reusable/Button/Button";


const Navbar = () => {
    const navlinks = [
        {
            label: "Home",
            path: "/",
            action: () => {
                // router.push("/");
                const homeSection = document.getElementById("home");
                homeSection?.scrollIntoView({ behavior: "smooth" });
            },
        },
        {
            label: "Services",
            path: "/",
            action: () => {
                // router.push("/");
                const servicesSection = document.getElementById("services");
                servicesSection?.scrollIntoView({ behavior: "smooth" });
            },
        },
        {
            label: "About Us",
            path: "/",
            action: () => {
                // router.push("/");
                const aboutUsSection = document.getElementById("aboutUs");
                aboutUsSection?.scrollIntoView({ behavior: "smooth" });
            },
        },
        {
            label: "Portfolio",
            path: "/",
            action: () => {
                // router.push("/");
                const portfolioSection = document.getElementById("portfolio");
                portfolioSection?.scrollIntoView({ behavior: "smooth" });
            },
        },
    ]
    return (
        <div id="home" className="bg-neutral-40 bg-opacity-50">
            
            <Container>
                <div className="flex justify-between items-center font-Inter py-8">
                    <Image src={IMAGES.MITRConsoltancyLogo} alt="MITr Consultancy" className="w-[134px] h-[64px]" />

                    <div className="flex items-center gap-10">
                        {
                            navlinks.map((link, index) => (
                                <button key={index} onClick={link.action} className="text-white text-lg font-medium hover:text-primary-10 transition duration-300">{link.label}</button>
                            ))
                        }
                    </div>

                    <Button variant="primary" title="Contact Us"/>
                </div>
                
            </Container>
        </div>
    );
};

export default Navbar;