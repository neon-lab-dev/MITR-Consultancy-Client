import { IMAGES } from "@/assets";

export const services = [
  {
    id: 1,
    title: (
      <h2
        className={`font-extrabold text-neutral-185 text-[30px] leading-normal capitalize`}
      >
        1. Cyber <span className="text-primary-10">Security</span>
      </h2>
    ),
    tabs: [
      "VAPT & Testing",
      "SIEM / SOC",
      "EDR / XDR",
      "Network Security",
      "Data Protection (DLP)",
      "Email Security",
      "ISO 27001 / 27701",
      "GDPR / DPDP",
      "Security Audits",
    ],
    data: [
      {
        key: "VAPT & Testing",
        image: IMAGES.vaptTesting,
        description:
          "Identify security vulnerabilities across applications, systems, and networks before they can be exploited. Our structured testing and clear remediation guidance help reduce risk and strengthen your security posture.",
      },
      {
        key: "SIEM / SOC",
        image: IMAGES.siemSoc,
        description:
          "Gain centralized visibility into security events across your organization. We help detect, analyze, and respond to threats in real time—minimizing impact and downtime.",
      },
      {
        key: "EDR / XDR",
        image: IMAGES.edrXdr,
        description:
          "Protect endpoints and systems with advanced threat detection and response. Continuous monitoring helps stop attacks early and prevent lateral movement across environments.",
      },
      {
        key: "Network Security",
        image: IMAGES.networkSecurityImage,
        description:
          "Secure your network infrastructure against unauthorized access and intrusions. We help maintain safe, reliable connectivity while continuously monitoring for emerging threats.",
      },
      {
        key: "Data Protection (DLP)",
        image: IMAGES.dataProtection,
        description:
          "Safeguard sensitive business and customer data from leaks and misuse. Our DLP solutions help control data movement across users, devices, and platforms.",
      },
      {
        key: "Email Security",
        image: IMAGES.emailSecurity,
        description:
          "Defend against phishing, spam, and email-based malware attacks. Reduce human risk by stopping malicious emails before they reach your users.",
      },
      {
        key: "ISO 27001 / 27701",
        image: IMAGES.iso27001Image,
        description:
          "Prepare for and maintain compliance with global information security and privacy standards. We support audits, documentation, and continuous improvement for long-term compliance readiness.",
      },
      {
        key: "GDPR / DPDP",
        image: IMAGES.gdprDpdp,
        description:
          "Ensure compliance with global and Indian data protection regulations. Reduce regulatory risk while building trust through responsible data handling practices.",
      },
      {
        key: "Security Audits",
        image: IMAGES.securityAudits,
        description:
          "Evaluate your current security posture with expert-led assessments. Identify gaps, risks, and priorities through clear, actionable audit reports.",
      },
    ],
  },
  {
    id: 2,
    title: (
      <h2 className="font-extrabold text-neutral-185 text-[30px] leading-normal">
        2. Develop
        <span className="text-primary-10">ment</span>
      </h2>
    ),
    tabs: [
      "Mobile App Development",
      "Backend Development",
      "Frontend Development",
      "Full Stack Web Solutions",
      "Web Development",
      "Custom Software Solutions",
    ],
    data: [
      {
        key: "Mobile App Development",
        image: IMAGES.mobileAppDevelopment,
        description:
          "Build fast, reliable mobile apps users love to use. From MVPs to scalable products, we turn ideas into high-performing Android and iOS apps.Built for growth, performance, and real users.",
      },
      {
        key: "Backend Development",
        image: IMAGES.backendDevelopmentImage,
        description:
          "Power your applications with secure, scalable backend systems. We design server-side architectures that handle growth without breaking.Reliable foundations for long-term success.",
      },
      {
        key: "Frontend Development",
        image: IMAGES.frontendDevelopmentImage,
        description:
          "Create interfaces that feel intuitive, fast, and accessible. We focus on usability, performance, and clean interactions.Because great experiences drive conversions.",
      },
      {
        key: "Full Stack Web Solutions",
        image: IMAGES.fullStackDevelopment,
        description:
          "One team, one solution—from frontend to backend. We build fully connected web systems that work seamlessly together.Less complexity. Faster delivery.",
      },
      {
        key: "Web Development",
        image: IMAGES.webDevelopmentImage,
        description:
          "Design and develop responsive websites aligned with business goals. Optimized for speed, usability, and clarity.Websites built to convert visitors into customers.",
      },
      {
        key: "Custom Software Solutions",
        image: IMAGES.customSoftwareImage,
        description:
          "Software built around your exact business needs. From SaaS platforms to internal tools, we tailor every solution.Flexible, scalable, and future-ready.",
      },
    ],
  },
  {
    id: 3,
    title: (
      <h2 className="font-extrabold text-neutral-185 text-[30px] leading-normal">
        3. Des
        <span className="text-primary-10">ign</span>
      </h2>
    ),
    tabs: [
      "UI/UX Design",
      "Graphic Design",
      "3D Design Walkthroughs",
      "CGI Works",
      "Brand Folios",
      "Product Design",
    ],
    data: [
      {
        key: "UI/UX Design",
        image: IMAGES.uiUxDesign,
        description:
          "Design experiences users understand instantly. We combine research, usability, and visual clarity to reduce friction.Better UX means better adoption.",
      },
      {
        key: "Graphic Design",
        image: IMAGES.graphicsDesign,
        description:
          "Visuals that communicate clearly and elevate your brand. From identities to digital assets, we design with purpose.Design that supports trust and recognition.",
      },
      {
        key: "3D Design Walkthroughs",
        image: IMAGES.design3D,
        description:
          "Bring concepts to life with immersive 3D experiences. Perfect for showcasing spaces, products, and ideas before execution.Clarity before commitment.",
      },
      {
        key: "CGI Works",
        image: IMAGES.cgiWorks,
        description:
          "High-quality CGI, renders, and animations that tell your story. We help ideas feel real, engaging, and memorable.Visuals that leave an impact.",
      },
      {
        key: "Brand Folios",
        image: IMAGES.brandFolios,
        description:
          "Showcase your brand with confidence and clarity. We design portfolios that highlight value, not just visuals.Built to impress and convert.",
      },
      {
        key: "Product Design",
        image: IMAGES.productDesign,
        description:
          "From concept to launch, we design products users love. Focused on usability, feasibility, and business outcomes.Designed for real-world success.",
      },
    ],
  },
];
