/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useEffect, useRef, useState } from "react";
import Heading from "../../Reusable/Heading/Heading";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import OurServiceCard from "./OurServiceCard";
import Container from "../../Shared/Container/Container";
// At the top of your file
// @ts-ignore
// const mixitup = (await import("mixitup")).default;

const OurServices = () => {
  const developmentServices = [
    {
      icon: ICONS.appDevelopment,
      title: "Mobile App Development",
      description:
        "Android, iOS, and cross-platform apps that function flawlessly and engage users.",
      details:
        "Develop native and hybrid apps, ensure performance optimization, seamless UI/UX, offline capabilities, push notifications, secure backend integration, cross-platform support, and consistent updates for long-term scalability and user retention.",
    },
    {
      icon: ICONS.backendDevelopment,
      title: "Backed Development",
      description:
        "Scalable, secure server-side systems built for reliability and efficiency.",
      details:
        "Design robust APIs, implement authentication, handle databases, manage business logic, ensure uptime, follow best security practices, integrate cloud services, scale microservices, and support real-time communication and data consistency.",
    },
    {
      icon: ICONS.frontendDevelopment,
      title: "Frontend Development",
      description:
        "Modern, intuitive interfaces crafted for speed, engagement, and accessibility.",
      details:
        "Build responsive layouts, follow accessibility standards, apply performance optimizations, write clean modular code, use modern frameworks, manage state effectively, ensure SEO-readiness, and deliver pixel-perfect, user-first interface designs.",
    },
    {
      icon: ICONS.softwareDevelopment,
      title: "Full Stack Web Solutions",
      description:
        "Integrated development from frontend to backend — one solution, fully connected.",
      details:
        "Deliver end-to-end solutions, connect frontend and backend seamlessly, use REST/GraphQL APIs, integrate databases, deploy to cloud, handle authentication, test thoroughly, maintain code quality, and ensure full-cycle development ownership.",
    },
    {
      icon: ICONS.webDevelopment,
      title: "Web Development",
      description:
        "Custom-designed, responsive websites aligned with user experience and business goals.",
      details:
        "Design responsive websites, implement custom features, integrate CMS, optimize for SEO, ensure fast loading, deploy securely, manage hosting, analyze traffic, and align visual strategy with business conversion goals.",
    },
    {
      icon: ICONS.customSoftware,
      title: "Custom Software Solutions",
      description:
        "Tailored software, SaaS, and scalable solutions for unique business needs.",
      details:
        "Develop custom software applications, SaaS platforms, internal tools, and enterprise systems tailored to specific business workflows. Ensure scalability, security, cloud integration, and seamless user experience while aligning with strategic objectives.",
    },
  ];
  const designServices = [
    {
      icon: ICONS.uiUx,
      title: "Ui/UX Design",
      description:
        "We create user-friendly and visually stunning designs that make your product stand out.",
      details:
        "Craft intuitive user interfaces, enhance user journeys, boost engagement, ensure brand consistency, optimize usability, design wireframes, and prototype experiences for websites, mobile apps, SaaS tools, and enterprise-level applications.",
    },
    {
      icon: ICONS.uiUx,
      title: "Graphic Design",
      description:
        "Crafting identities, assets, and digital designs to elevate brands.",
      details:
        "We craft visual identities, marketing assets, and digital-first designs that elevate brands-delivering logos, brand systems, print collaterals, and high-performance creatives across every channel.",
    },
    {
      icon: ICONS.uiUx,
      title: "3D Design Walkthroughs ",
      description:
        "Transforming blueprints with expert design and immersive 3D walkthroughs.",
      details:
        "Transforming blueprints into breathtaking realities with expert architectural design and immersive 3D walkthroughs that sell your vision before it's built.",
    },
    {
      icon: ICONS.uiUx,
      title: "CGI works",
      description: "Bringing ideas to life with CGI, renders, and animations.",
      details:
        "We bring ideas to life through cutting-edge CGI -delivering photorealistic visuals, product renders, architectural walkthroughs, and immersive 3D animations that captivate and convert.",
    },
    {
      icon: ICONS.uiUx,
      title: "Brand Folios",
      description:
        "Design a brand folio to impress, connect, and convert clients.",
      details:
        "Get your brand folio crafted to impress, connect, and convert all your potential business clients and customers, all in one powerful designs.",
    },
     {
    icon: ICONS.uiUx,
    title: "Product Design",
    description:
      "From concept to creation—designing products that users love.",
    details:
      "We shape physical and digital products from ideation to execution—combining UX, UI, and design thinking to build user-centered, market-ready products that drive real-world impact.",
  },
  ];
  const securityServices = [
    {
      icon: ICONS.complainceService,
      path : "/compliance-services",
      title: "Compliance Services",
      description:
        "Comprehensive suite for assessments, penetration testing, and threat monitoring.",
      details:
        "Comprehensive solutions to meet industry regulations, including GDPR, HIPAA, and PCI DSS, ensuring data security and legal compliance.",
    },
    {
      icon: ICONS.securityService,
      path : "/security-services",
      title: "Security Services",
      description:
        "Security suite with assessments, testing, and threat monitoring.",
      details:
        "Comprehensive security suite offering vulnerability assessments, penetration testing, and continuous threat monitoring to detect and mitigate risks proactively.",
    },
    {
      icon: ICONS.emailSecurity2,
      path : "/security/email-security",
      title: "Email Security",
      description:
        "Protect your organization from phishing, spam, and email-based attacks.",
      details:
        "Advanced email filtering, encryption, threat detection, and phishing prevention to safeguard communications and sensitive data.",
    },
    {
      icon: ICONS.endpointSecurity5,
      path : "/security/endpoint-security",
      title: "Endpoint Security",
      description:
        "Secure endpoints with antivirus, firewall, and device control solutions.",
      details:
        "Comprehensive endpoint protection including malware defense, device management, intrusion detection, and continuous monitoring across all user devices.",
    },
    {
      icon: ICONS.networkSecurity5,
      path : "/security/network-security",
      title: "Network Security",
      description:
        "Protect your network infrastructure from unauthorized access and threats.",
      details:
        "Implement firewalls, intrusion prevention systems, secure VPNs, and network segmentation to ensure secure and reliable data flow.",
    },
    {
      icon: ICONS.vaptSecurity4,
      path : "/security/vapt-security",
      title: "VAPT Security",
      description:
        "Identify and remediate vulnerabilities with penetration testing and assessments.",
      details:
        "Perform vulnerability assessments and penetration testing to detect security flaws, validate defenses, and enhance overall security posture.",
    },
  ];

  const [activeTab, setActiveTab] = useState(".cyber");
  const mixerRef = useRef(null);

  useEffect(() => {
    let mixerInstance: any;

    const initMixitup = async () => {
      if (!mixerRef.current) return;

      const mixitup = (await import("mixitup")).default;

      mixerInstance = mixitup(mixerRef.current, {
        selectors: {
          target: ".mix",
        },
        animation: {
          duration: 400,
        },
      });

      mixerInstance.filter(".cyber");
    };

    initMixitup();

    return () => {
      if (mixerInstance) {
        mixerInstance.destroy();
      }
    };
  }, []);

  const allServices = [
    ...securityServices.map((s) => ({ ...s, category: "cyber" })),
    ...developmentServices.map((s) => ({ ...s, category: "dev" })),
    ...designServices.map((s) => ({ ...s, category: "design" })),
  ];

  return (
    <div
      id="services"
      className="relative pb-16 xl:pb-[128px] bg-white section h-full"
    >
      <Image
        src={IMAGES.gradientBg}
        alt="MITRA Consultancy Services"
        className="w-full h-full object-cover rounded-b-3xl xl:rounded-b-[50px] absolute z-0"
      />
      <div className="relative z-20 pt-[100px]">
        <Container>
          <Heading
            align="center"
            subHeading="Services"
            heading="Our Core Offerings"
            description="Discover our diverse range of top-quality services, tailored to meet your needs with excellence."
          />
          <div className="w-full mt-14 overflow-x-auto custom-section-scrollbar flex justify-center ">
            <div className="flex items-center gap-2 md:gap-6 justify-center w-full md:min-w-max px-4">
              {[
                { label: "Cyber Security", filter: ".cyber" },
                { label: "Development", filter: ".dev" },
                { label: "Design", filter: ".design" },
              ].map((btn) => (
                <button
                  key={btn.label}
                  data-filter={btn.filter}
                  onClick={() => setActiveTab(btn.filter)}
                  className={`px-3 md:px-6 py-1 md:py-3 font-medium text-xs md:text-base leading-5 rounded-lg transition-colors duration-300 whitespace-nowrap ${
                    activeTab === btn.filter
                      ? "text-white bg-primary-10"
                      : "text-primary-10"
                  }`}
                >
                  {btn.label}
                </button>
              ))}   
            </div>
          </div>

          <div
            ref={mixerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[62px]"
          >
            {allServices.map((service, index) => (
              <div key={index} className={`mix ${service.category}`}>
                <OurServiceCard {...service} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurServices;
