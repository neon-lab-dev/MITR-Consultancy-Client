/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ICONS, IMAGES } from "@/assets";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "../Container/Container";
import Marquee from "react-fast-marquee";

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
    // {
    //   name: "twitter",
    //   link: "https://www.facebook.com/MITR-Consultancy-100190372261098",
    //   icon: ICONS.twitter,
    // },
    {
      name: "instagram",
      link: "https://www.instagram.com/_mitr_consultancy/?hl=en",
      icon: ICONS.instagram,
    },
  ];

  const quickLinks:any = [
    // {
    //   heading: "Quick Links",
    //   links: [
    //     {
    //       label: "Home",
    //       path: "/",
    //     },
    //     {
    //       label: "About Us",
    //       path: "/about-us",
    //     },
    //     {
    //       label: "Terms and Conditions",
    //       path: "/terms-and-conditions",
    //     },
    //     {
    //       label: "Privacy Policy",
    //       path: "/privacy-policy",
    //     },
    //     {
    //       label: "Refund & Cancellation policy",
    //       path: "/refund-cancellation-policy",
    //     },
    //   ],
    // },
    {
      heading: "Cybersecurity & Compliance Services",
      links: [
        {
          label: "Managed Security Services (MSSP)",
          path: "/compliance-services",
        },
        {
          label: "VAPT Services",
          path: "/security/vapt-security",
        },
        {
          label: "GRC & Compliance (ISO 27001, SOC 2)",
          path: "/security/email-security",
        },
        {
          label:
            "Cloud & Infrastructure Security, Risk Assessment & Gap Analysis",
          path: "/security/cloud-security",
        },
      ],
    },
    {
      heading: "Security Products (via MSSP Partners)",
      links: [
        {
          label: "Endpoint Detection & Response (EDR)",
          path: "/compliance-services",
        },
        {
          label: "Data Loss Prevention (DLP)",
          path: "/security/vapt-security",
        },
        {
          label: "SIEM & SOC Monitoring",
          path: "/security/email-security",
        },
        {
          label: "Identity & Access Managment",
          path: "/security/cloud-security",
        },
      ],
    },
    {
      heading: "Industrial Training Programs",
      links: [
        {
          label: "Full Stack Web Development",
          path: "/internship-programmes/67a19b646269f19097fb2bfa",
        },
        {
          label: "Frontend Development",
          path: "/internship-programmes/67a19f7a7ce841729b59f52c",
        },
        {
          label: "Backend Development",
          path: "/internship-programmes/67a18b9b5f74e79df59625c1",
        },
        {
          label: "App Development",
          path: "/internship-programmes/68722c26e620583ce87f130d",
        },
        {
          label: "Cyber Security Mastery Program",
          path: "/internship-programmes/6864409a80f98f62637e7e04",
        },
        {
          label: "UX/UI Design",
          path: "/internship-programmes/67a1a75225335e95874bb562",
        },
      ],
    },
    {
      heading: "Technology & Development",
      links: [
        {
          label: "Website Development",
          path: "",
        },
        {
          label: "Mobile App Development",
          path: "",
        },
        {
          label: "UX/UI Design",
          path: "",
        },
        {
          label: "Custom Software Development",
          path: "",
        },
      ],
    },
    {
      heading: "Contact Details",
      links: [
        {
          label:
            "No: 1190/1, FD 94, 4th Floor, HSR Layout, Sector 3, 22nd Cross Road, Bengaluru 560102, Karnataka.",
          path: "",
          icon: ICONS.locationWhite,
        },
        {
          label: "3rd Floor, Astha Building, Nageswar Colony, Boring Road, Chauraha, Patna 800008",
          path: "",
          icon: ICONS.locationWhite,
        },
        {
          label: "+91 - 8210464851",
          path: "tel:+91 - 8210464851",
          icon: ICONS.phone,
        },
        {
          label: "business@mitraconsultancy.co.in",
          path: "mailto:business@mitraconsultancy.co.in",
          icon: ICONS.email,
        },
      ],
    },
  ];

  return (
    <div className="bg-neutral-185">
      <Container>
        {/* mt-[151px] */}
        <div className="flex flex-col gap-6 font-Inter py-10 text-neutral-130">
          {/* Company info and social links */}
          <div className="flex flex-col gap-9 max-w-[350px]">
            <div>
              <Link href="/">
                <Image
                  src={IMAGES.MITRConsoltancyLogo}
                  alt="MITRA Consultancy"
                  className="w-32"
                />
              </Link>
              <p className="mt-4">
                MITRA Consultancy provides development, design, cybersecurity,
                compliance, and 3-month training programs for digital success.
              </p>

              <div className="flex items-center gap-4 md:gap-6 mt-7">
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
          </div>

          <div className="flex flex-col lg:flex-row gap-14 lg:gap-0 justify-between w-full mt-8">
            {quickLinks?.map((item:any) => (
              <div key={item?.heading} className="max-w-[170px]">
                <h1 className="font-semibold">{item?.heading}</h1>

                <div className="mt-5 flex flex-col gap-4">
                  {item?.links?.map((link:any) =>
                    link?.path ? (
                      <a
                        key={link?.label}
                        href={link?.path}
                        className="hover:underline flex gap-3"
                      >
                        {link?.icon && (
                          <Image src={link?.icon} alt="" className="size-5" />
                        )}
                        {link.label}
                      </a>
                    ) : (
                      <div key={link?.label} className="flex gap-3">
                        {link?.icon && (
                          <Image src={link?.icon} alt="" className="size-5" />
                        )}
                        <p>{link.label}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          <hr className="border border-primary-10 my-4" />
          <div className="flex flex-col lg:flex-row gap-5 items-start md:items-center justify-center">
            <p className="text-start md:text-center">
              © All Rights Reserved by MITRA Consultancy 2026{" "}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-center">
              <Link
                href="/privacy-policy"
                className="flex items-center gap-2 hover:underline"
              >
                <div className="size-1 rounded-full bg-white"></div>
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="flex items-center gap-2 hover:underline"
              >
                <div className="size-1 rounded-full bg-white"></div>
                Terms ans Conditions
              </Link>
            </div>
          </div>

          {/* Contact Us Modal */}
        </div>
      </Container>
      <Marquee speed={60} gradient={false} pauseOnHover>
        <h2 className="text-white text-3xl md:text-5xl font-extrabold whitespace-nowrap">
          Code To Compliance * Code To Compliance * Code To Compliance * Code To
          Compliance * Code To Compliance * Code To Compliance * Code To
          Compliance * Code To Compliance
        </h2>
      </Marquee>
      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default Footer;
