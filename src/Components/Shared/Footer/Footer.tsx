"use client";
import { ICONS, IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "../Container/Container";

const Footer = () => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] = useState(false);
  const socialLinks = [
    {
      name: "facebook",
      link: "https://www.facebook.com/MITR-Consultancy-100190372261098",
      icon: ICONS.facebook,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/company/mitr-consulting/",
      icon: ICONS.linkedin,
    },
    {
      name: "twitter",
      link: "https://www.facebook.com/MITR-Consultancy-100190372261098",
      icon: ICONS.twitter,
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/_mitr_consultancy/?hl=en",
      icon: ICONS.instagram,
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
        setIsContactUsModalOpen(true);
      },
    },
  ];

  const footerLinks2 = [
    {
      label: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      label: "Terms And Conditions",
      path: "/terms-and-conditions",
    },
    {
      label: "Refund Policy",
      path: "/refund-policy",
    },
  ];

  const quickLinks = [
    {
      heading: "Quick Links",
      links: [
        {
          label: "About Us",
          path: "/about-us",
        },
        {
          label: "Terms and Conditions",
          path: "/terms-and-conditions",
        },
        {
          label: "Privacy Policy",
          path: "/privacy-policy",
        },
        {
          label: "Refund & Cancellation policy",
          path: "/refund-cancellation-policy",
        },
        {
          label: "Client Grievance Redressal Mechanism",
          path: "/client-grievance-mechanism",
        },
      ],
    },
    {
      heading: "Cyber Security Services",
      links: [
        {
          label: "Compliance Services",
          path: "/compliance-services",
        },
        {
          label: "Security Services",
          path: "/compliance-services",
        },
        {
          label: "VAPT Security",
          path: "/compliance-services",
        },
        {
          label: "Email Security",
          path: "/compliance-services",
        },
        {
          label: "Cloud Security",
          path: "/compliance-services",
        },
        {
          label: "Network Security",
          path: "/compliance-services",
        },
        {
          label: "Endpoint Security",
          path: "/compliance-services",
        },
      ],
    },
    {
      heading: "Industrial Training Programs",
      links: [
        {
          label: "Frontend Development",
          path: "/internship-programmes",
        },
        {
          label: "Backend Development",
          path: "/internship-programmes",
        },
        {
          label: "UX/UI Design",
          path: "/internship-programmes",
        },
      ],
    },
  ];

  return (
    <div className="bg-primary-50">
      <Container>
        <div className="flex flex-col gap-6 font-Inter mt-[151px] py-10">
          <div className="flex items-center justify-start gap-5">
            <Image
              src={IMAGES.MITRConsoltancyLogo}
              alt="MITRA Consultancy"
              className="w-[68px] h-[33px]"
            />
            <div className="w-[2px] h-[26px] bg-neutral-10/40"></div>
            {/* Social Links */}
            <div className="flex items-center gap-4 md:gap-7">
              {socialLinks?.map((item) => (
                <a
                  key={item?.name}
                  href={item.link}
                  target="_blank"
                  className="size-8 flex items-center justify-center"
                >
                  <Image
                    src={item.icon}
                    alt={`MITRA Consultancy - ${item?.name}`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-between w-full mt-8">
            {/* Address */}
            <div className="flex flex-col gap-9 max-w-[350px]">
              <div>
                <h1 className="text-neutral-10 font-semibold">
                  Registered Office
                </h1>
                <p className="text-neutral-20 mt-[10px]">
                  Mitra Creative Studio
                  <br />
                  3rd Floor, Sai Corporate Tower,Opp. Maurya Lok Complex, Fraser
                  Road, Patna – 800001, <br /> Bihar, India
                </p>
              </div>
              <div>
                <h1 className="text-neutral-10 font-semibold">
                  Registered Office
                </h1>
                <p className="text-neutral-20 mt-[10px]">
                  Other Address
                  <br />
                  3rd Floor, Sai Corporate Tower,Opp. Maurya Lok Complex, Fraser
                  Road, Patna – 800001, <br /> Bihar, India
                </p>
              </div>
            </div>

            {quickLinks?.map((item) => (
              <div key={item?.heading}>
                <h1 className="text-neutral-10 font-semibold">
                  {item?.heading}
                </h1>
                <div className="mt-5 flex flex-col gap-4">
                  {item?.links?.map((link) => (
                    <Link
                      key={link?.label}
                      href={link?.path}
                      className="text-neutral-10 hover:underline"
                    >
                      {link?.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <hr className="border border-neutral-neutral my-4" />
          <p className="text-neutral-20 text-xs md:text-base text-center">
            © All Rights Reserved by MITRA Consultancy 2025{" "}
          </p>

          {/* Contact Us Modal */}
        </div>
      </Container>
      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default Footer;
