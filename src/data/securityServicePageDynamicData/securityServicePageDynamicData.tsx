"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS, IMAGES } from "@/assets";

export type SecuritySlug =
  | "antivirus-service"
  | "siem-service"
  | "edr-service"
  | "dlp-service"
  | "firewall-service"
  | "vapt-service"
  | "xdr-service";
export const allSecurityData: Partial<Record<SecuritySlug, any>> = {
  // Email Security Data
  "antivirus-service": {
    heroDetails: {
      badgeText: "Antivirus Service",
      title: (
        <p>
          Proactive Protection Against{" "}
          <span className="text-primary-110">Malware Risks</span>
        </p>
      ),
      description:
        "Protects systems from malware by preventing, detecting, and removing threats that can impact device security and data integrity.",
      image: IMAGES.antivirusHero,
    },

    aboutService: {
      badgeText: "Antivirus Service",
      title: "MITRA’s Antivirus Solutions",
      description:
        "MITRA provides proactive antivirus protection that secures devices, detects threats early, and protects organizational data from everyday malware risks.",
      image: IMAGES.antivirusAbout,
    },
    reasonsSection: {
      heading: "Reasons to get ",
      highlightWord: "MITRA’s Antivirus Solutions",
      cards: [
        {
          title: "Secure Endpoints",
          image: IMAGES.edrReason1,
          description:
            "Protect all devices from malware, ransomware, and unauthorized access.",
        },
        {
          title: "Protect Sensitive Data",
          image: IMAGES.edrReason2,
          description:
            "Safeguard critical business and customer data across systems and endpoints.",
        },
        {
          title: "Preserve Data Privacy",
          image: IMAGES.edrReason3,
          description:
            "Ensure data confidentiality and compliance with industry security standards.",
        },
        {
          title: "Support Business Continuity",
          image: IMAGES.edrReason4,
          description:
            "Minimize downtime and keep operations running during security incidents.",
        },
        {
          title: "Continuous Protection",
          image: IMAGES.edrReason5,
          description:
            "Real-time monitoring across all systems with automated scans running continuously.",
        },
        {
          title: "Access & Phishing Protection",
          image: IMAGES.edrReason6,
          description:
            "Prevent unauthorized access and defend against phishing and social engineering attacks.",
        },
      ],
    },
    coreFeaturesSection: {
      heading: "Core Components of ",
      highlightWord: "MITRA’s Antivirus Solutions",
      items: [
        {
          title: "Real-time scanning",
          description:
            "Maintain continuous protection across devices through background monitoring that helps identify threats as they emerge.",
          icon: ICONS.shield,
        },
        {
          title: "Automatic Updates",
          description:
            "Ensure security controls remain current and effective against evolving threats without manual intervention.",
          icon: ICONS.clock,
        },
        {
          title: "Built-In Firewall",
          description:
            "Strengthen device and network security by controlling unauthorized access and reducing exposure to external attacks.",
          icon: ICONS.clockLock,
        },
        {
          title: "Phishing Protection",
          description:
            "Reduce the risk of credential theft and data compromise by blocking malicious websites and deceptive communication attempts.",
          icon: ICONS.shield,
        },
        {
          title: "Malware Detection & Removal",
          description:
            "Identify, isolate, and remove malicious software to protect system integrity and prevent disruption to business operations.",
          icon: ICONS.fireSecurity,
        },
      ],
    },
   protectionSection: {
  heading: "How MITRA Fortifies",
  highlightWord: "Your Digital Devices",
  cards: [
    {
      title: "Proactive Threat Detection & Prevention",
      image: IMAGES.edrReason1,
      description: "Identifies and blocks threats before they damage systems.",
    },
    {
      title: "Timely Threat Removal & Ongoing Updates",
      image: IMAGES.edrReason2,
      description: "Removes malware quickly with continuous security updates.",
    },
    {
      title: "Comprehensive Protection of Digital Assets",
      image: IMAGES.edrReason3,
      description: "Safeguards devices, data, networks, and sensitive information.",
    },
  ],
},

  },
  "siem-service": {
    heroDetails: {
      badgeText: "SIEM Service",
      title: (
        <p>
          <span className="text-primary-110">Centralized Security</span>{" "}
          Intelligence
        </p>
      ),
      description:
        "SIEM (Security Information and Event Management) enables organizations to collect, correlate, and analyze security data across their IT environment. By centralizing event visibility and supporting timely investigation, SIEM helps improve threat detection, response, and overall security oversight.",
      image: IMAGES.siemHero,
    },

    aboutService: {
      badgeText: "SIEM Service",
      title: "MITRA’s SIEM Solutions",
      description:
        "MITRA provides SIEM services that centralize security event monitoring and correlation to improve visibility, detect threats early, and enable timely investigation.",
      image: IMAGES.siemAbout,
    },
    reasonsSection: {
      heading: "Reasons to get ",
      highlightWord: "MITRA’s SIEM Solutions",
      cards: [
        {
          title: "Enhanced Threat Detection",
          image: IMAGES.edrReason1,
          description:
            "Identify potential security threats by correlating events in environment.",
        },
        {
          title: "Timely Incident Response",
          image: IMAGES.edrReason2,
          description:
            "Faster detection and response through correlated security insights.",
        },
        {
          title: "Compliance Oversight",
          image: IMAGES.edrReason3,
          description:
            "Support regulatory requirements through monitoring, and audit-ready reporting.",
        },
        {
          title: "Unified Security Visibility",
          image: IMAGES.edrReason4,
          description:
            "Gain a single, consolidated view of security events across systems, networks, and applications.",
        },
        {
          title: "Optimized Operations",
          image: IMAGES.edrReason5,
          description:
            "Improve operational efficiency by reducing noise and prioritizing high-impact security events.",
        },
        {
          title: "Structured Deployment",
          image: IMAGES.edrReason6,
          description:
            "Ensure consistent implementation and continuous management with expert-led SIEM operations.",
        },
      ],
    },
    coreFeaturesSection: {
      heading: "Core Components of ",
      highlightWord: "MITRA’s SIEM Solutions",
      items: [
        {
          title: "Data Aggregation & Correlation",
          description:
            "Centralize and correlate security logs from servers, network devices, and applications to identify meaningful security signals.",
          icon: ICONS.dashboardBrowsing,
        },
        {
          title: "Real-Time Monitoring & Alerting",
          description:
            "Continuously monitor security events and generate timely alerts to support rapid identification of anomalies.",
          icon: ICONS.dashboardSpeed,
        },
        {
          title: "Incident Investigation & Response",
          description:
            "Support structured investigation and response through correlated event data and detailed security logs.",
          icon: ICONS.Search,
        },
        {
          title: "Compliance & Reporting",
          description:
            "Maintain compliance readiness through structured logging and reporting aligned with regulatory and internal requirements.",
          icon: ICONS.alertCircle,
        },
        {
          title: "Advanced Analytics",
          description:
            "Apply analytical techniques across diverse data sources to improve threat identification and contextual understanding.",
          icon: ICONS.discoverCircle,
        },
      ],
    },
     protectionSection: {
      heading: "How MITRA Fortifies",
      highlightWord: "Your Security Operations",
      cards: [
        {
          title: "Structured Deployment & Integration",
          image: IMAGES.edrReason1,
        },
        {
          title: "Continuous Monitoring via SOC",
          image: IMAGES.edrReason2,
        },
        {
          title: "Security & Compliance Enablement",
          image: IMAGES.edrReason3,
        },
      ],
    },
  },
  "edr-service": {
    heroDetails: {
      badgeText: "Endpoint Detection and Response (EDR) Service",
      title: (
        <p>
          <span className="text-primary-110">Visibility</span> and{" "}
          <span className="text-primary-110">Protection</span>Across Every
          Endpoint
        </p>
      ),
      description:
        "MITRA provides EDR services that enable continuous endpoint monitoring, effective threat response, and risk reduction aligned with your infrastructure and business needs.",
      image: IMAGES.erdHero,
    },
    aboutService: {
      badgeText: "EDR Service",
      title: "MITRA’s EDR Solutions",
      description:
        "MITRA delivers structured EDR services with the right tools, continuous monitoring, and practical configurations to strengthen endpoint security.",
      image: IMAGES.erdAbout,
    },
    reasonsSection: {
      heading: "Reasons to get ",
      highlightWord: "MITRA’s EDR Solutions",
      cards: [
        {
          title: "Early Threat Identification",
          image: IMAGES.edrReason1,
          description: "Detect suspicious activity before threats escalate",
        },
        {
          title: "Timely Incident Response",
          image: IMAGES.edrReason2,
          description: "Quickly contain and respond to security incidents",
        },
        {
          title: "Expert-Led Approach",
          image: IMAGES.edrReason3,
          description: "Security strategies aligned with business needs",
        },
        {
          title: "Improved Security Resilience",
          image: IMAGES.edrReason4,
          description: "Strengthen defenses against evolving cyber threats.",
        },
        {
          title: "Minimized Business Impact",
          image: IMAGES.edrReason5,
          description: "Reduce downtime and limit operational disruption",
        },
        {
          title: "Practical, Scalable Protection",
          image: IMAGES.edrReason6,
          description:
            "Security solutions designed to grow with your organization",
        },
      ],
    },
    coreFeaturesSection: {
      heading: "Core Components of ",
      highlightWord: "MITRA’s EDR Solutions",
      items: [
        {
          title: "Holistic Endpoint Security",
          description:
            "Secure endpoints using carefully selected tools and structured configurations aligned with your organization’s risk profile.",
          icon: ICONS.shield,
        },
        {
          title: "Continuous Monitoring",
          description:
            "Maintain ongoing visibility into endpoint activity to identify potential threats early and support timely response.",
          icon: ICONS.clock,
        },
        {
          title: "Effective Incident Response",
          description:
            "Respond to security incidents through a clear, methodical process covering investigation, containment, and remediation.",
          icon: ICONS.lockSync,
        },
        {
          title: "Seamless Integration",
          description:
            "Align endpoint security controls with your existing systems to support a unified, multi-layered security approach.",
          icon: ICONS.connect,
        },
        {
          title: "Behavioral Analysis",
          description:
            "Identify abnormal activity patterns that may bypass traditional controls, enabling earlier risk detection.",
          icon: ICONS.fingerPrint,
        },
      ],
    },
    protectionSection: {
      heading: "How MITRA Fortifies",
      highlightWord: "Your Endpoint Security",
      cards: [
        {
          title: "Expert Tool Selection & Secure Setup",
          image: IMAGES.edrReason1,
        },
        {
          title: "Continuous Monitoring & Threat Response",
          image: IMAGES.edrReason2,
        },
        {
          title: "Data Protection & Operational Continuity",
          image: IMAGES.edrReason3,
        },
      ],
    },
  },
  "dlp-service": {
    heroDetails: {
      badgeText: "DLP Service",
      title: (
        <p>
          <span className="text-primary-110">Data Loss Prevention</span> (DLP)
          Services
        </p>
      ),
      description:
        "MITRA delivers DLP services designed to help organizations identify, monitor, and control the movement of sensitive data across their environment. By applying structured policies and controls, we help reduce the risk of unauthorized access, transmission, or data leakage while supporting regulatory and operational requirements.",
      image: IMAGES.dlpHero,
    },
    aboutService: {
      badgeText: "DLP Service",
      title: "MITRA’s DLP Solutions",
      description:
        "MITRA provides DLP services that identify, monitor, and protect sensitive data across on-premises and cloud environments using intelligent classification and contextual analysis.",
      image: IMAGES.dlpAbout,
    },
    reasonsSection: {
      heading: "Reasons to get ",
      highlightWord: "MITRA’s DLP Solutions",
      cards: [
        {
          title: "Continuous Data Protection",
          image: IMAGES.edrReason1,
          description:
            "Protect sensitive data at all times through continuous monitoring and intelligent data controls.",
        },
        {
          title: "Compliance Alignment",
          image: IMAGES.edrReason2,
          description:
            "Ensure data handling practices align with regulatory and organizational compliance requirements.",
        },
        {
          title: "Reputation Risk Mitigation",
          image: IMAGES.edrReason3,
          description:
            "Minimize the impact of data incidents by preventing data leakage.",
        },
        {
          title: "Reduced Financial Exposure",
          image: IMAGES.edrReason4,
          description:
            "Minimize the impact of data incidents by preventing data leakage..",
        },
        {
          title: "Controlled Data Visibility",
          image: IMAGES.edrReason5,
          description:
            "Maintain visibility into sensitive data while controlling how and where it is accessed.",
        },
        {
          title: "Timely Incident Response",
          image: IMAGES.edrReason6,
          description:
            "Enable faster investigation and response to data-related security incidents.",
        },
      ],
    },
    coreFeaturesSection: {
      heading: "Core Components of ",
      highlightWord: "MITRA’s DLP Solutions",
      items: [
        {
          title: "Intelligent Data Classification",
          description:
            "Apply intelligent classification methods to identify and categorize sensitive data at scale, supporting consistent and accurate data protection.",
          icon: ICONS.dashboardBrowsing,
        },
        {
          title: "Data Flow Visibility",
          description:
            "Gain clear visibility into how data moves from origin to destination, enabling better control and governance across environments.",
          icon: ICONS.fileScript,
        },
        {
          title: "Contextual Data Matching",
          description:
            "Detect sensitive data patterns without relying on exact matches, improving accuracy while reducing false positives.",
          icon: ICONS.validationApproval,
        },
        {
          title: "Custom Detection Frameworks",
          description:
            "Define tailored dictionaries and detection rules to align data protection controls with organizational and regulatory requirements.",
          icon: ICONS.Search,
        },
        {
          title: "Comprehensive Scanning Coverage",
          description:
            "Scan data across cloud platforms, collaboration tools, and shared environments to ensure consistent protection.",
          icon: ICONS.fingerPrint,
        },
      ],
    },
   protectionSection: {
      heading: "How MITRA Protects",
      highlightWord: "Your Data & Brand",
      cards: [
        {
          title: "Alerting & Data Protection Controls",
          image: IMAGES.edrReason1,
        },
        {
          title: "Compliance Alignment & Risk Reduction",
          image: IMAGES.edrReason2,
        },
        {
          title: "Reputation Risk Mitigation",
          image: IMAGES.edrReason3,
        },
      ],
    },
  },
  "firewall-service": {
    heroDetails: {
      badgeText: "Firewall Service",
      title: (
        <p>
          Intelligent Control for{" "}
          <span className="text-primary-110">Network Security</span>
        </p>
      ),
      description: (
        <div>
          <p>
            MITRA delivers firewall services designed to control, monitor, and
            secure network traffic across your organization.
          </p>{" "}
          <p>
            Our approach focuses on enforcing security policies that protect
            internal systems from unauthorized access while maintaining reliable
            and efficient network operations.
          </p>
        </div>
      ),
      image: IMAGES.firewallHero,
    },

    aboutService: {
      badgeText: "Firewall Service",
      title: "MITRA’s Firewall Solutions",
      description:
        "MITRA provides structured firewall services that secure networks by controlling traffic, enforcing security policies, and protecting systems across on-premise, cloud, and hybrid environments.",
      image: IMAGES.firewallAbout,
    },
    reasonsSection: {
      heading: "Reasons to get MITRA’s",
      highlightWord: "Firewall Solutions",
      cards: [
        {
          title: "Strong Security Controls",
          image: IMAGES.edrReason1,
          description:
            "Apply layered controls to strengthen network security and reduce exposure to threats.",
        },
        {
          title: "Proactive Threat Prevention",
          image: IMAGES.edrReason2,
          description:
            "Detect and prevent malicious activity before it affects systems or operations.",
        },
        {
          title: "Security Policy Alignment",
          image: IMAGES.edrReason3,
          description:
            "Align firewall configurations with compliance requirements and security policies.",
        },
        {
          title: "Controlled Content Access",
          image: IMAGES.edrReason4,
          description:
            "Restrict access to unsafe or unauthorized content based on defined rules.",
        },
        {
          title: "Network Segmentation",
          image: IMAGES.edrReason5,
          description:
            "Isolate network segments to limit threat movement and contain incidents.",
        },
        {
          title: "Policy-Based Traffic Filtering",
          image: IMAGES.edrReason6,
          description:
            "Filter network traffic using security policies to allow trusted communication.",
        },
      ],
    },
    coreFeaturesSection: {
      heading: "Core Components of ",
      highlightWord: "MITRA’s Firewall Solutions",
      items: [
        {
          title: "Traffic Monitoring",
          description:
            "Maintain visibility into network traffic to understand data flow, identify anomalies, and support timely security decisions.",
          icon: ICONS.cctvCamera,
        },
        {
          title: "Rule-Based Filtering",
          description:
            "Control network traffic using clearly defined policies based on factors such as source, destination, and protocol.",
          icon: ICONS.filter,
        },
        {
          title: "Network Segmentation",
          description:
            "Segment networks into controlled zones to limit lateral movement and improve internal traffic security.",
          icon: ICONS.cellularNetwork,
        },
        {
          title: "Content Filtering",
          description:
            "Enforce organizational policies by restricting access to specific websites or content categories.",
          icon: ICONS.filterVertical,
        },
        {
          title: "Threat Prevention",
          description:
            "Reduce exposure to malware and unauthorized access through layered network protection controls.",
          icon: ICONS.doorLock,
        },
      ],
    },
    protectionSection: {
      heading: "How MITRA Fortifies",
      highlightWord: "Your Endpoint Security",
      cards: [
        {
          title: "Network Traffic Visibility & Control",
          image: IMAGES.edrReason1,
        },
        {
          title: "Prevention of Unauthorized Access",
          image: IMAGES.edrReason2,
        },
        {
          title: "Security Strengthening & Compliance Support",
          image: IMAGES.edrReason3,
        },
      ],
    },
  },
  "vapt-service": {
    heroDetails: {
      badgeText: "VAPT Service",
      title: (
        <p>
          Identifying and Addressing{" "}
          <span className="text-primary-110">Security Gaps</span>
        </p>
      ),
      description:
        "Vulnerability Assessment and Penetration Testing (VAPT) enables organizations to systematically identify, validate, and prioritize security weaknesses across systems and applications. MITRA’s VAPT services combine structured assessments with controlled testing to uncover exploitable gaps and support informed remediation. This approach helps reduce risk, improve resilience, and strengthen the overall security posture.",
      image: IMAGES.firewallHero,
    },

    aboutService: {
      badgeText: "VAPT Service",
      title: "MITRA’s VAPT Solutions",
      description:
        "MITRA provides VAPT services that identify vulnerabilities across systems, networks, and applications to support effective remediation and stronger security controls.",
      image: IMAGES.vaptAbout,
    },
    reasonsSection: {
      heading: "Reasons to get MITRA’s",
      highlightWord: "Firewall Solutions",
      cards: [
        {
          title: "Preventive Security Controls",
          image: IMAGES.edrReason1,
          description:
            "Identify and address vulnerabilities early to prevent potential security incidents before exploitation.",
        },
        {
          title: "Compliance Alignment",
          image: IMAGES.edrReason2,
          description:
            "Support regulatory and security standards through structured vulnerability assessment.",
        },
        {
          title: "Lowered Breach Risk",
          image: IMAGES.edrReason3,
          description:
            "Reduce the likelihood of security breaches by proactively identifying and mitigating weaknesses.",
        },
        {
          title: "Stronger Security Posture",
          image: IMAGES.edrReason4,
          description:
            "Enhance overall security resilience by improving controls across systems, networks, and applications.",
        },
        {
          title: "Security Coverage",
          image: IMAGES.edrReason5,
          description:
            "Assess security across the entire environment, ensuring comprehensive visibility.",
        },
        {
          title: "Guided Remediation Support",
          image: IMAGES.edrReason6,
          description:
            "Provide clear, actionable recommendations to prioritize fixes and strengthen defenses effectively.",
        },
      ],
    },
    coreFeaturesSection: {
      heading: "Core Components of ",
      highlightWord: "MITRA’s VAPT Solutions",
      items: [
        {
          title: "Vulnerability Assessment",
          description:
            "Maintain visibility into network traffic to understand data flow, identify anomalies, and support timely security decisions.",
          icon: ICONS.dashboardSpeed,
        },
        {
          title: "Penetration Testing",
          description:
            "Control network traffic using clearly defined policies based on factors such as source, destination, and protocol.",
          icon: ICONS.autoConversations,
        },
        {
          title: "Comprehensive Coverage",
          description:
            "Segment networks into controlled zones to limit lateral movement and improve internal traffic security.",
          icon: ICONS.validationApproval,
        },
        {
          title: "Tailored Testing Approaches",
          description:
            "Enforce organizational policies by restricting access to specific websites or content categories.",
          icon: ICONS.Search,
        },
        {
          title: "Automated Scanning Tools",
          description:
            "Leverages advanced scanning technologies to efficiently detect known and emerging vulnerabilities at scale.",
          icon: ICONS.fingerPrint,
        },
      ],
    },
    protectionSection: {
      heading: "How MITRA Fortifies",
      highlightWord: "Your Security Defenses",
      cards: [
        {
          title: "Proactive Threat Identification",
          image: IMAGES.edrReason1,
        },
        {
          title: "Real-World Attack Simulation",
          image: IMAGES.edrReason2,
        },
        {
          title: "Guided Remediation",
          image: IMAGES.edrReason3,
        },
      ],
    },
  },
  "xdr-service": {
    heroDetails: {
      badgeText: "Extended Detection and Response (XDR) Service",
      title: (
        <p>
          <span className="text-primary-110">Security Visibility</span>
          {""}for a Rapidly Evolving Threat Landscape
        </p>
      ),
      description:
        "MITRA delivers XDR services designed to provide unified visibility across endpoints, networks, and cloud environments. By correlating signals from multiple security layers, our approach helps organizations detect complex threats earlier and respond more effectively.",
      image: IMAGES.xdrHero,
    },

    aboutService: {
      badgeText: "XDR Service",
      title: "MITRA’s XDR Solutions",
      description:
        "MITRA’s XDR extends security visibility across endpoints, networks, and cloud environments, enabling unified threat detection, investigation, and response through continuous monitoring.",
      image: IMAGES.xdrAbout,
    },
    reasonsSection: {
      heading: "Reasons to get MITRA’s",
      highlightWord: "XDR Solutions",
      cards: [
        {
          title: "Improved Threat Visibility",
          image: IMAGES.edrReason1,
          description:
            "Centralized visibility across networks and cloud environments.",
        },
        {
          title: "Timely Incident Response",
          image: IMAGES.edrReason2,
          description:
            "Faster detection and response through correlated security insights.",
        },
        {
          title: "Improved SOC Efficiency",
          image: IMAGES.edrReason3,
          description:
            "Reduced alert fatigue and faster investigations for security teams.",
        },
        {
          title: "Simplified Operations",
          image: IMAGES.edrReason4,
          description:
            "Unified security management that reduces complexity and overhead.",
        },
        {
          title: "Enhanced Security Posture",
          image: IMAGES.edrReason5,
          description:
            "Stronger defenses through improved coverage across security layers.",
        },
        {
          title: "Proactive Deployment",
          image: IMAGES.edrReason6,
          description:
            "Expert-led implementation with continuous monitoring and support.",
        },
      ],
    },
    coreFeaturesSection: {
      heading: "Core Components of ",
      highlightWord: "MITRA’s XDR Solutions",
      items: [
        {
          title: "Unified Security Visibility",
          description:
            "Gain a consolidated view across endpoints, networks, email, and cloud environments to support informed security decisions.",
          icon: ICONS.irisScan,
        },
        {
          title: "Centralized Threat Detection",
          description:
            "Bring detection, investigation, and response into a single, coordinated workflow to improve efficiency.",
          icon: ICONS.Search,
        },
        {
          title: "Automation-Supported Security",
          description:
            "Use intelligent automation to enhance threat identification while reducing manual effort for security teams.",
          icon: ICONS.access,
        },
        {
          title: "Simplified Security Operations",
          description:
            "Reduce operational complexity by consolidating multiple security controls into a unified approach.",
          icon: ICONS.filterVertical,
        },
        {
          title: "Cross-Domain Threat Correlation",
          description:
            "Analyze signals across security layers to identify threats faster and with greater accuracy.",
          icon: ICONS.alert,
        },
      ],
    },
    protectionSection: {
      heading: "How MITRA Protects",
      highlightWord: "Your Brand",
      cards: [
        {
          title: "Structured Implementation & Configuration",
          image: IMAGES.edrReason1,
        },
        {
          title: "Continuous Monitoring & Operational Support",
          image: IMAGES.edrReason2,
        },
        {
          title: "Business Enablement Through Security",
          image: IMAGES.edrReason3,
        },
      ],
    },
  },
};
