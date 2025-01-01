"use client"
import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";


const Footer = () => {
    const socialLinks = [
        {
            name: 'facebook',
            link: 'https://www.facebook.com/MITR-Consultancy-100190372261098',
            icon: ICONS.facebook
        },
        {
            name: 'linkedin',
            link: 'https://www.facebook.com/MITR-Consultancy-100190372261098',
            icon: ICONS.linkedin
        },
        {
            name: 'twitter',
            link: 'https://www.facebook.com/MITR-Consultancy-100190372261098',
            icon: ICONS.twitter
        },
        {
            name: 'instagram',
            link: 'https://www.facebook.com/MITR-Consultancy-100190372261098',
            icon: ICONS.instagram
        },
    ];

    const footerLinks = [
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
        {
            label: "Contact Us",
            path: "/",
            action: () => {
                // router.push("/");
                const portfolioSection = document.getElementById("portfolio");
                portfolioSection?.scrollIntoView({ behavior: "smooth" });
            },
        },
    ];

    return (
        <div className="bg-primary-50 py-[42px] flex flex-col items-center justify-center gap-6 font-Inter mt-[151px]">
            <div className="flex items-center gap-5">
                <Image src={IMAGES.MITRConsoltancyLogo} alt="MITR Consultancy" className="w-[134px] h-[64px]" />
                <div className="w-[2px] h-[26px] bg-neutral-10/40"></div>
                {/* Social Links */}
                <div className="flex items-center gap-7">
                    {
                        socialLinks?.map((item) =>
                            <a key={item?.name} href={item.link} target="_blank" className="size-8 flex items-center justify-center">
                                <Image src={item.icon} alt={`MITR Consultancy - ${item?.name}`} />
                            </a>
                        )
                    }
                </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-5 md:gap-16 lg:gap-20">
                {
                    footerLinks.map((link, index) => (
                        <button key={index} onClick={link.action} className="text-neutral-20 text-lg font-medium hover:text-primary-10 transition duration-300">{link.label}</button>
                    ))
                }
            </div>

            <p className="text-neutral-20">© 2024 Mitr Consultancy </p>
        </div>
    );
};

export default Footer;