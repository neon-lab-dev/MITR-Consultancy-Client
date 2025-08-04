"use client";
import React, { useState } from "react";
import Heading from "../../Reusable/Heading/Heading";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import OurServiceCard from "./OurServiceCard";
import Container from "../../Shared/Container/Container";

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
        "We craft visual identities, marketing assets, and digital-first designs that elevate brands-delivering logos, brand systems, print collaterals, and high-performance creatives across every channel.",
      details:
        "Craft intuitive user interfaces, enhance user journeys, boost engagement, ensure brand consistency, optimize usability, design wireframes, and prototype experiences for websites, mobile apps, SaaS tools, and enterprise-level applications.",
    },
    {
      icon: ICONS.uiUx,
      title: "3D Design Walkthroughs ",
      description:
        "Transforming blueprints into breathtaking realities with expert architectural design and immersive 3D walkthroughs that sell your vision before it's built.",
      details:
        "Craft intuitive user interfaces, enhance user journeys, boost engagement, ensure brand consistency, optimize usability, design wireframes, and prototype experiences for websites, mobile apps, SaaS tools, and enterprise-level applications.",
    },
    {
      icon: ICONS.uiUx,
      title: "CGI works",
      description:
        "We bring ideas to life through cutting-edge CGI -delivering photorealistic visuals, product renders, architectural walkthroughs, and immersive 3D animations that captivate and convert",
      details:
        "Craft intuitive user interfaces, enhance user journeys, boost engagement, ensure brand consistency, optimize usability, design wireframes, and prototype experiences for websites, mobile apps, SaaS tools, and enterprise-level applications.",
    },
    {
      icon: ICONS.uiUx,
      title: "Brand Folios",
      description:
        "Get your brand folio crafted to impress, connect, and convert all your potential business clients and customers, all in one powerful design",
      details:
        "Craft intuitive user interfaces, enhance user journeys, boost engagement, ensure brand consistency, optimize usability, design wireframes, and prototype experiences for websites, mobile apps, SaaS tools, and enterprise-level applications.",
    },
  ];
  const securityServices = [
    {
      icon: ICONS.uiUx,
      title: "Compliance Services",
      description:
        "Comprehensive solutions to meet industry regulations, including GDPR, HIPAA, and PCI DSS, ensuring data security and legal compliance.",
      details:
        "Craft intuitive user interfaces, enhance user journeys, boost engagement, ensure brand consistency, optimize usability, design wireframes, and prototype experiences for websites, mobile apps, SaaS tools, and enterprise-level applications.",
    },
    {
      icon: ICONS.uiUx,
      title: "Security Services",
      description:
        "Comprehensive security suite offering vulnerability assessments, penetration testing, and continuous threat monitoring to detect and mitigate risks proactively",
      details:
        "Craft intuitive user interfaces, enhance user journeys, boost engagement, ensure brand consistency, optimize usability, design wireframes, and prototype experiences for websites, mobile apps, SaaS tools, and enterprise-level applications.",
    },
  ];

  const [activeTab, setActiveTab] = useState("Cyber Security");
  const tabButtons = ["Cyber Security", "Development", "Design"];

  return (
    <div id="services" className="relative pb-[128px]  bg-white section">
      <Image
        src={IMAGES.gradientBg}
        alt="MITRA Consultancy Services"
        className="w-full h-full object-cover rounded-b-[50px] absolute z-0"
      />
      <div className="relative z-20 pt-[100px]">
        <Container>
          <Heading
            align="center"
            subHeading="Services"
            heading="Our List of Services"
            description="Discover our diverse range of top-quality services, tailored to meet your needs with excellence."
          />
          <div className="flex items-center gap-6 justify-center mt-14">
            {tabButtons?.map((button) => (
              <button
                key={button}
                onClick={() => setActiveTab(button)}
                className={`px-6 py-3 font-medium leading-5 rounded-lg ${
                  activeTab === button
                    ? "text-white bg-primary-10"
                    : "text-primary-10 bg-white"
                }`}
              >
                {button}
              </button>
            ))}
          </div>
          {activeTab === "Cyber Security" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[46px] mt-[62px]">
              {securityServices.map((service, index) => (
                <OurServiceCard key={index} {...service} />
              ))}
            </div>
          )}
          {activeTab === "Development" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[46px] mt-[62px]">
              {developmentServices.map((service, index) => (
                <OurServiceCard key={index} {...service} />
              ))}
            </div>
          )}
          {activeTab === "Design" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[46px] mt-[62px]">
              {designServices.map((service, index) => (
                <OurServiceCard key={index} {...service} />
              ))}
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default OurServices;
