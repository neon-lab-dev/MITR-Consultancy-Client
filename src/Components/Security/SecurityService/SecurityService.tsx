import { ICONS, IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import React from "react";
import SecurityServiceCard from "./SecurityServiceCard";

const SecurityService = () => {
  return (
    <div className="font-Inter relative">
      <Image
        src={IMAGES.secureCompliance}
        alt=""
        className="w-full h-full absolute z-0"
      />

      <Container>
        <div className="relative py-10 xl:py-[100px]">
          <h1
            className={`font-bold text-neutral-10 text-lg md:text-2xl xl:text-[40px] 2xl:text-[48px] leading-6 md:leading-[49.68px] capitalize text-center`}
          >
            Security Services by{" "}
            <span className="text-secondary-20">MITRA Consultancy</span>
          </h1>

          <div className="space-y-5 xl:space-y-[100px] w-full relative mt-[60px]">
            <div className="hidden xl:block absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 z-0">
              <Image
                src={IMAGES.security}
                alt="security"
                className=" opacity-50"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-5 xl:gap-0 items-center justify-between max-w-full xl:max-w-[85%] mx-auto">
              <SecurityServiceCard
                icon={ICONS.mailLock}
                title="Email Security"
                description="Defend against email phishing and malware attacks effectively."
                path="/security/email-security"
              />
              <SecurityServiceCard
                icon={ICONS.endpointSecurity}
                title="Endpoint Security"
                description="Secure all endpoint devices against advanced cyber threats proactively."
                path="/security/endpoint-security"
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-5 xl:gap-0 items-center justify-between  max-w-full xl:max-w-[75%] mx-auto">
              <SecurityServiceCard
                icon={ICONS.cloudSecurity}
                title="Cloud Security"
                description="Protect sensitive data in cloud environments with robust measures."
                path="/security/cloud-security"
              />
              <SecurityServiceCard
                icon={ICONS.vaptSecurity}
                title="VAPT Security"
                description="Identify and remediate vulnerabilities through comprehensive testing."
                path="/security/vapt-security"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-5 xl:gap-0 items-center justify-between  max-w-full xl:max-w-[30%] mx-auto">
              <SecurityServiceCard
                icon={ICONS.networkSecurity}
                title="Network Security"
                description="PSafeguard your network infrastructure from cyber threats comprehensively."
                path="/security/network-security"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SecurityService;
