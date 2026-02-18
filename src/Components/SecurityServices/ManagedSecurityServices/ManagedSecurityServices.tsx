import { IMAGES } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import Link from "next/link";
import { CgArrowTopRight } from "react-icons/cg";

const ManagedSecurityServices = () => {
  const managedSecurityServices = [
    {
      title: "Antivirus",
      description:
        "Protects systems from common malware and malicious activity through continuous threat detection.",
      link: "/security-service/antivirus-service",
      image: IMAGES.antivirus,
      col: "md:col-span-3",
    },
    {
      title: "EDR",
      description:
        "Monitors endpoint activity to detect, investigate, and respond to advanced security threats.",
      link: "/security-service/edr-service",
      image: IMAGES.edr,
      col: "md:col-span-1",
    },
    {
      title: "Firewall",
      description:
        "Monitors endpoint activity to detect, investigate, and respond to advanced security threats.",
      link: "/security-service/firewall-service",
      image: IMAGES.firewall,
      col: "md:col-span-1",
    },
    {
      title: "XDR",
      description:
        "Protects systems from common malware and malicious activity through continuous threat detection.",
      link: "/security-service/xdr-service",
      image: IMAGES.xdr,
      col: "md:col-span-3",
    },
    {
      title: "SIEM",
      description:
        "Protects systems from common malware and malicious activity through continuous threat detection.",
      link: "/security-service/siem-service",
      image: IMAGES.siem,
      col: "md:col-span-3",
    },
    {
      title: "DLP",
      description:
        "Monitors endpoint activity to detect, investigate, and respond to advanced security threats.",
      link: "/security-service/dlp-service",
      image: IMAGES.dlp,
      col: "md:col-span-1",
    },
    {
      title: "VAPT",
      description:
        "Protects systems from common malware and malicious activity through continuous threat detection.",
      link: "/security-service/vapt-service",
      image: IMAGES.vapt,
      col: "md:col-span-4",
    },
  ];

  return (
    <div className="bg-neutral-190 py-14 font-satoshi">
      <Container>
        <h1
          className={`font-black text-neutral-185 text-lg md:text-2xl xl:text-[40px] 2xl:text-[52px] 
          leading-6 md:leading-[65px] max-w-[800px] mx-auto text-center`}
        >
          Managed Security Services by{" "}
          <span className="text-primary-10">MITRA Consultancy</span>
        </h1>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {managedSecurityServices.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden h-[284px] ${service.col}`}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 lg:group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content Wrapper */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Title */}
                <h3
                  className="
        text-white font-extrabold text-[22px] md:text-[26px] lg:text-[30px]
        transition-transform duration-500 ease-out
        lg:group-hover:-translate-y-[120px]
      "
                >
                  {service.title}
                </h3>

                {/* Description + Link */}
                <div
                  className="
        mt-3
        transition-all duration-500 ease-out

        /* Mobile & Tablet: visible */
        translate-y-0 opacity-100 static

        /* Desktop hover behavior */
        lg:absolute lg:bottom-8 lg:left-8 lg:right-8
        lg:translate-y-6 lg:opacity-0
        lg:group-hover:translate-y-0 lg:group-hover:opacity-100
      "
                >
                  <p className="text-neutral-130 font-medium max-w-[280px]">
                    {service.description}
                  </p>

                  <Link
                    href={service.link}
                    className="mt-4 inline-flex items-center gap-3 text-neutral-130 font-medium"
                  >
                    Know more
                    <div className="bg-neutral-180 size-6 rounded-full flex items-center justify-center text-primary-10">
                      <CgArrowTopRight />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ManagedSecurityServices;
