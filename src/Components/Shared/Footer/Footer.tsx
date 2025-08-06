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

  const quickLinks = [
    {
      heading: "Quick Links",
      links: [
        {
          label: "Home",
          path: "/",
        },
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
          path: "/security-services",
        },
        {
          label: "VAPT Security",
          path: "/security/vapt-security",
        },
        {
          label: "Email Security",
          path: "/security/email-security",
        },
        {
          label: "Cloud Security",
          path: "/security/cloud-security",
        },
        {
          label: "Network Security",
          path: "/security/network-security",
        },
        {
          label: "Endpoint Security",
          path: "/security/endpoint-security",
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
  ];

  return (
    <div className="bg-primary-50">
      <Container>
        <div className="flex flex-col gap-6 font-Inter mt-[151px] py-10">
          <div className="flex justify-between w-full mt-8">
            {/* Address */}
            <div className="flex flex-col gap-9 max-w-[350px]">
              <div>
                <Link href="/">
                  <Image
                    src={IMAGES.MITRConsoltancyLogo}
                    alt="MITRA Consultancy"
                    className="w-32"
                  />
                </Link>
                <p className="text-neutral-20 mt-4">
                 MITRA Consultancy provides development, design, cybersecurity, compliance, and 3-month training programs for digital success.
                </p>

                <div className="flex items-center gap-4 md:gap-7 mt-7">
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
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-neutral-20 text-xs md:text-base text-center">
              © All Rights Reserved by MITRA Consultancy 2025{" "}
            </p>

            <div className="flex items-center gap-6">
              <a href="tel:+918210464851" className="flex items-center gap-2 hover:underline">
                <Image src={ICONS.phone} alt="" className="size-5" />
                <p className="text-neutral-20 text-xs md:text-base text-center">
                  +91 8210464851
                </p>
              </a>
              <a href="mailto:business@mitraconsultancy.co.in" className="flex items-center gap-2 hover:underline">
                <Image src={ICONS.email} alt="" className="size-5" />
                <p className="text-neutral-20 text-xs md:text-base text-center">
                  business@mitraconsultancy.co.in
                </p>
              </a>
            </div>
          </div>

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
