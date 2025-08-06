/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS, IMAGES } from "@/assets";

export type SecuritySlug = "email-security" | "endpoint-security" | "cloud-security" | "vapt-security" | "network-security";
export const allSecurityData:Record<SecuritySlug, any> = {
  // Email Security Data
  "email-security": {
    heroDetails: {
      page: "Email Security",
      heroImg: IMAGES.emailSecurityHero,
      heading: "Email Security for Your Business",
      subHeading: "Safeguarding your business against modern and evolving digital cyber threats.",
    },

    // Why security
    whySecurityMatters: {
      heading: "Why Email Security Matters?",
      image: IMAGES.emailSecurityImportance,
      pointers: [
        {
          title: "91%",
          description: "Cyber attacks start with a phishing email",
        },
        {
          title: "$Billions lost",
          description:
            "Business Email Compromise (BEC) losses exceeded billions globally",
        },
        {
          title: "Data Leaks",
          description:
            "Regulatory penalties (e.g., SEBI, RBI, GDPR) can result from data leaks via email",
        },
        {
          title: "Human Error",
          description:
            "Human error is the leading cause of email-related breaches",
        },
      ],
    },

    // Common security threats
    commonSecurityThreats: {
      heading: "Common Email Threats",
      image: IMAGES.emailCommonThreats,
      pointers: [
        {
          title: "Phishing",
          description:
            "Decorative emails tricking users into revealing sensitive data",
        },
        {
          title: "Spear Phishing",
          description:
            "Targeted phishing attacks aimed at specific individuals (e.g., CFOs)",
        },
        {
          title: "Business Email Compromise (BEC)",
          description:
            "Attackers impersonate executives or vendors to request fund transfers",
        },
        {
          title: "Malware/Ransomware",
          description: "Malicious attachments or links that infect systems",
        },
        {
          title: "Spoofing & Email Forgery",
          description:
            "False sender identities to gain trust or impersonate internal contacts",
        },
        {
          title: "Data Leakage",
          description:
            "Accidental or malicious exposure of confidential information via email",
        },
      ],
    },

    // Key features
    keyFeatures: {
      heading: "Key Features of Our Email Security Services",
      pointers: [
        {
          title: "Email GatewayProtection",
          descriptions: [
            "Filters out spam, malware, and malicious links before reaching inboxes",
            "Advanced threat detection (sandboxing, heuristics)",
          ],
        },
        {
          title: "Phishing & Impersonation Protection",
          descriptions: [
            "AI-powered detection of spoofed domains and fake senders",
            "Real-time alerts for suspicious activity ",
          ],
        },
        {
          title: "Email Encryption",
          descriptions: [
            "End-to-end encryption for sensitive content",
            "Supports compliance with SEBI, RBI, GDPR, HIPAA, etc.",
          ],
        },
        {
          title: "Data Loss Prevention (DLP)",
          descriptions: [
            "Prevents sending confidential information outside the organization",
            "Custom policies (PAN, Aadhaar, financial data, etc.) ",
          ],
        },
        {
          title: "User Awareness & Training",
          descriptions: [
            "Regular phishing simulation campaigns",
            "Employee cybersecurity training modules",
          ],
        },
        {
          title: "Email Backup & Archiving",
          descriptions: [
            "Secure and searchable cloud-based email storage",
            "Ensures business continuity and compliance",
          ],
        },
      ],
    },

    // Compliance & Regulatory Alignment
    complianceAndRegulatoryAlignment: {
      heading: "Compliance & Regulatory Alignment",
      subHeading: "Our email security solutions support compliance with,",
      pointers: [
        {
          title:
            "SEBI Cybersecurity Framework",
        },
        {
          title: "RBI IT & Cybersecurity Guidelines",
        },
        {
          title: " ISO 27001",
        },
        {
          title: "GDPR / HIPAA / PCI-DSS (for international clients)",
        },
      ],
    },

    // Deployment Options
    deploymentOptions: {
      heading: "Deployment Options",
      image: IMAGES.developmentSection,
      pointers: [
        {
          title: "Cloud-Based Security",
          description: "e.g., Microsoft 365, Google Workspace",
        },
        {
          title: "On-Premise/Hybrid Setups",
          description: "Complete Enterprise level relationship",
        },
        {
          title: "Integration with Existing Mail Servers",
          description: "End to end integration service",
        },
      ],
    },

    whyChooseMITRAConsultancy: {
      heading: "Why Choose MITRA Consultancy?",
      pointers: [
        {
          title: "Industry expertise in BFSI & regulatory compliance",
        },
        {
          title: "Tailored solutions for businesses of all sizes",
        },
        {
          title: "Support across Mumbai, Delhi NCR, and pan-India",
        },
        {
          title: "Vendor-agnostic approach",
          description:
            "Work with leading platforms such as Microsoft, Google, Cisco, Fortinet, Mimecast, Proofpoint, more",
        },
        {
          title: "Certified cybersecurity professionals",
        },
      ],
    },
  },

  //   Endpoint Security Data
  "endpoint-security": {
    heroDetails: {
      page: "Endpoint Security",
      heroImg: IMAGES.endpointSecurityHero,
      heading: "Endpoint Security Solutions",
      subHeading:
        "Comprehensive Protection for Devices Against Threats and Unauthorized Access",
    },

    // Why security
    whySecurityMatters: {
      heading: "Why Endpoint Security Matters?",
      image: IMAGES.emailSecurityImage,
      pointers: [
        {
          title: "Decentralized Workforces",
          description:
            "With remote work becoming the norm, protecting devices outside the office firewall is critical.",
        },
        {
          title: "Rising Cyber Threats",
          description:
            "Sophisticated attacks like zero-day exploits and fileless malware bypass traditional antivirus.",
        },
        {
          title: "Compliance Requirements",
          description:
            "Regulations like GDPR, HIPAA, and ISO demand strong endpoint protection.",
        },
        {
          title: "Data Protection",
          description:
            "Endpoints are often where data is created and accessed—making them a prime target.",
        },
      ],
    },

    // Common security threats
    commonSecurityThreats: {
      heading: "How Our Endpoint Security Works",
      description:
        "Mitra Consultancy’s solution is agent-based, meaning a lightweight security agent is installed on every endpoint to:",
      image: IMAGES.emailSecurityImage,
      pointers: [
        {
          title: "Real-Time Monitoring",
          description: "Monitor system activity in real-time",
        },
        {
          title: "Threat Detection",
          description: "Detect suspicious behavior or malware",
        },
        {
          title: "Policy Enforcement",
          description: "Enforce corporate policies",
        },
        {
          title: "Auto Response",
          description: "Automatically respond to incidents",
        },
      ],
    },

    // Key features
    keyFeatures: {
      heading: "Key Features of Our Endpoint Security Services",
      pointers: [
        {
          title: "Endpoint Protection",
          descriptions: [
            "Antivirus, anti-malware, and firewall",
            "Device control (USB restrictions, printers, etc.)",
            "Application whitelisting",
            "Web filtering",
          ],
        },
        {
          title: "EDR",
          descriptions: [
            "Advanced threat detection",
            "Real-time incident response",
            "Root cause analysis",
            "Threat hunting capabilities",
          ],
        },
        {
          title: "Data Loss Prevention",
          descriptions: [
            "Protects sensitive information from being leaked",
            "Blocks unauthorized file transfers and emails",
            "Monitors data in use, at rest, and in motion",
          ],
        },
        {
          title: "Patch Management",
          descriptions: [
            "Keeps operating systems and applications up to date",
            "Reduces vulnerabilities from outdated software",
          ],
        },
        {
          title: "File Encryption",
          descriptions: [
            "Encrypts data stored on endpoints",
            "Prevents unauthorized access to lost or stolen devices",
          ],
        },
        {
          title: "Mobile Device Management",
          descriptions: [
            "Controls access from mobile devices",
            "Enforces policies on Android and iOS",
            "Remote wipe and lock capabilities",
          ],
        },
        {
          title: "Multi-Factor Authentication",
          descriptions: [
            "Adds an extra layer of identity protection",
            "Ensures only authorized users access your systems",
          ],
        },
      ],
    },

    // Compliance & Regulatory Alignment
    complianceAndRegulatoryAlignment: {
      heading: "Endpoint Security Tools We Support",
      pointers: [
        {
          title: "Microsoft Defender for Endpoint",
          logo: ICONS.endpointSecurity,
        },
        {
          title: "SentinelOne",
          logo: ICONS.endpointSecurity,
        },
        {
          title: "Sophos Intercept X",
          logo: ICONS.endpointSecurity,
        },
        {
          title: "CrowdStrike Falcon",
          logo: ICONS.endpointSecurity,
        },
        {
          title: "Bitdefender GravityZone",
          logo: ICONS.endpointSecurity,
        },
        {
          title: "Trend Micro Apex One",
          logo: ICONS.endpointSecurity,
        },
      ],
    },

    // Deployment Options
    deploymentOptions: {
      heading: "Our Approach",
      image: IMAGES.emailSecurityImage,
      pointers: [
        {
          title: "Assessment",
          description: "Evaluate your current endpoint security posture",
        },
        {
          title: "Deployment",
          description: "Install agent and enforce policies across devices",
        },
        {
          title: "Monitoring",
          description: "Real-time threat detection and remediation",
        },
        {
          title: "Reporting",
          description: "Provide detailed insights and compliance reports",
        },
        {
          title: "Optimization",
          description: "Fine-tune for emerging threats",
        },
      ],
    },

    // Why Choose MITRA Consultancy
    whyChooseMITRAConsultancy: {
      heading: "Benefits of Choosing Mitra Consultancy",
      pointers: [
        {
          title: "360° Protection",
          description:
            "Covers all types of endpoints: Windows, Mac, Linux, iOS, Android",
        },
        {
          title: "Real-Time Monitoring",
          description: "Instant alerts for suspicious behavior",
        },
        {
          title: "Regulatory Compliance",
          description: "Helps meet GDPR, HIPAA, PCI-DSS, ISO requirements",
        },
        {
          title: "Zero-Day Threat Defense",
          description: "AI-based detection of new and unknown threats",
        },
        {
          title: "Seamless Integration",
          description: "Compatible with your existing IT infrastructure",
        },
        {
          title: "24/7 Support",
          description: "Expert response and support anytime",
        },
      ],
    },
  },

  //   Cloud Security Data
  "cloud-security": {
    heroDetails: {
      page: "Cloud Security",
      heroImg: IMAGES.cloudSecurityHero,
      heading: "Cloud Security at MITRA Consultancy",
      subHeading:
        "Comprehensive cloud protection ensuring data privacy, compliance, and threat prevention for businesses.",
    },

    // Why security
    whySecurityMatters: {
      heading: "Why Cloud Security is Important?",
      image: IMAGES.cloudSecurity1,
      pointers: [
        {
          title: "Data Protection",
          description:
            "Protects sensitive data stored in cloud platforms from breaches and leaks.",
        },
        {
          title: "Business Continuity",
          description:
            "Maintains business continuity by mitigating risks of downtime and attacks.",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Ensures compliance with industry standards and regulations like GDPR, HIPAA, and ISO 27001.",
        },
        {
          title: "Customer Trust",
          description:
            "Builds trust with customers by demonstrating strong data protection practices.",
        },
      ],
    },

    // Common security threats
    commonSecurityThreats: {
      heading: "How Our Cloud Security Works",
      description:
        "Mitra Consultancy’s solution is agent-based, meaning a lightweight security agent is installed on every endpoint to:",
      image: IMAGES.cloudSecurity4,
      pointers: [
        {
          title: "Real-Time Monitoring",
          description: "Monitor system activity in real-time",
        },
        {
          title: "Threat Detection",
          description: "Detect suspicious behavior or malware",
        },
        {
          title: "Policy Enforcement",
          description: "Enforce corporate policies",
        },
        {
          title: "Auto Response",
          description: "Automatically respond to incidents",
        },
      ],
    },

    // Key features
    keyFeatures: {
      heading: "Our Cloud Security Service",
      pointers: [
        {
          title: "Cloud Security Assessments",
          descriptions: [
            "Evaluate your existing cloud infrastructure for vulnerabilities.",
            "Perform gap analysis against best practices and compliance standards.",
          ],
        },
        {
          title: "Identity & Access Management",
          descriptions: [
            "Enforce least privilege access.",
            "Implement Multi-Factor Authentication (MFA) and role-based access controls.",
          ],
        },
        {
          title: "Data Encryption & Protection",
          descriptions: [
            "Encrypt data at rest and in transit.",
            "Key management services to securely handle encryption keys.",
          ],
        },
        {
          title: "Cloud Workload Protection",
          descriptions: [
            "Protect VMs, containers, and serverless functions.",
            "Implement runtime protection and vulnerability shielding.",
          ],
        },
        {
          title: "Cloud Firewall & Network Security",
          descriptions: [
            "Configure cloud-native firewalls and security groups.",
            "Implement micro-segmentation to restrict lateral movement.",
          ],
        },
        {
          title: "Compliance & Governance",
          descriptions: [
            "Assist in meeting regulatory requirements.",
            "Audit trails and continuous compliance monitoring.",
          ],
        },
        {
          title: "Security Automation & Monitoring",
          descriptions: [
            "Use SIEM, SOAR, and threat intelligence to detect and respond to incidents.",
            "24x7 monitoring of cloud environments.",
          ],
        },
      ],
    },

    // Compliance & Regulatory Alignment
    complianceAndRegulatoryAlignment: {
      heading: "Technologies & Tools We Use",
      pointers: [
        {
          title:
            "Cloud-native security tools (AWS Security Hub, Azure Security Center, Google Security Command Center)",
        },
        {
          title: "CASB (Cloud Access Security Brokers) solutions",
        },
        {
          title: "Encryption & key management tools (AWS KMS, Azure Key Vault)",
        },
        {
          title: "IAM platforms and MFA integrations",
        },
        {
          title: "Cloud-based SIEM and monitoring solutions",
        },
      ],
    },

    // Deployment Options
    deploymentOptions: {
      heading: "Our Approach",
      image: IMAGES.cloudSecurity3,
      pointers: [
        {
          title: "Assess",
          description:
            "Understand your cloud architecture and security posture.",
        },
        {
          title: "Design",
          description:
            "Develop tailored security strategies aligned to your workloads.",
        },
        {
          title: "Implement",
          description: "Deploy best-in-class security controls.",
        },
        {
          title: "Manage & Monitor",
          description:
            "Ensure ongoing protection through continuous monitoring and optimization.",
        },
      ],
    },

    // Why Choose MITRA Consultancy
    whyChooseMITRAConsultancy: {
      heading: "Why Choose MITRA Consultancy?",
      pointers: [
        {
          title: "Expertise across AWS, Azure, and GCP environments.",
        },
        {
          title: "Proven methodologies to secure cloud workloads.",
        },
        {
          title: "End-to-end solutions from assessment to incident response.",
        },
        {
          title: "Dedicated support with clear reporting and transparency.",
        },
      ],
    },
  },

  // VAPT Security Data
  "vapt-security": {
    heroDetails: {
      page: "VAPT Security",
      heroImg: IMAGES.vaptSecurityHero,
      heading: "Vulnerability Assessment & Penetration Testing (VAPT)",
      subHeading: "Secure Today. Stay Resilient Tomorrow.",
    },

    // Why security
    whySecurityMatters: {
      heading: "Types of VAPT Services Offered",
      image: IMAGES.vaptSecurity2,
      pointers: [
        {
          title: "Web Application Testing",
          description: "OWASP Top 10, SSRF, RCE, XSS, SQLi",
        },
        {
          title: "API Security Testing",
          description: "Token security, rate limiting, broken auth, IDOR",
        },
        {
          title: "Network Penetration Testing",
          description:
            "Firewall bypass, open ports, SMB vulnerabilities, DNS spoofing",
        },
        {
          title: "Cloud Security Assessment",
          description:
            "AWS, Azure, GCP – IAM, bucket misconfigurations, exposed keys",
        },
        {
          title: "Mobile App Testing",
          description:
            "Android/iOS static & dynamic analysis, insecure storage, root detection",
        },
        {
          title: "Wireless Network Testing",
          description: "Rogue APs, weak encryption (WEP/WPA2), MITM",
        },
        {
          title: "Social Engineering Simulations",
          description: "Phishing, pretexting, vishing (on request)",
        },
      ],
    },

    // Common security threats
    commonSecurityThreats: {
      heading: "Compliance Support",
      image: IMAGES.vaptSecurity1,
      pointers: [
        {
          title: "ISO 27001",
          description: "ISMS vulnerability management",
        },
        {
          title: "SOC 2",
          description: "Security & Confidentiality controls",
        },
        {
          title: "PCI DSS",
          description: "Requirement 11 - regular testing",
        },
        {
          title: "GDPR",
          description: "Article 32 - Security of processing",
        },
        {
          title: "SEBI / RBI",
          description: "Mandatory for financial institutions",
        },
        {
          title: "CERT-In Guidelines",
          description: "National cyber compliance mandates",
        },
      ],
    },

    // Key features
    keyFeatures: {
      heading: "Engagement Models",
      pointers: [
        {
          title: "One-Time Assessment",
          descriptions: [
            "Ideal for compliance or internal audit readiness.",
            "Provides a snapshot of current security posture.",
            "Includes detailed reporting and remediation plan.",
          ],
        },
        {
          title: "Quarterly / Half-Yearly Testing",
          descriptions: [
            "Periodic testing aligned with compliance and regulatory needs.",
            "Helps track improvements and identify new risks.",
            "Supports continuous security improvement lifecycle.",
          ],
        },
        {
          title: "Managed Security Testing as a Service (STaaS)",
          descriptions: [
            "Ongoing security testing managed by experts.",
            "Flexible scheduling and reporting as per business needs.",
            "Cost-effective solution for continuous threat coverage.",
          ],
        },
        {
          title: "Pre-Product Launch Security Testing",
          descriptions: [
            "Identify and resolve vulnerabilities before go-live.",
            "Ensure customer data and functionality are protected.",
            "Reduce the risk of post-launch breaches or incidents.",
          ],
        },
        {
          title: "Zero Trust / Red Team Engagements",
          descriptions: [
            "Simulates real-world attacks to test internal defenses.",
            "Evaluates organizational readiness against advanced threats.",
            "Supports Zero Trust architecture validation.",
          ],
        },
      ],
    },

    // Compliance & Regulatory Alignment
    complianceAndRegulatoryAlignment: {
      heading: "Tools & Techniques We Use",
      pointers: [
        { title: "Burp Suite Pro" },
        { title: "Nessus" },
        { title: "Metasploit" },
        { title: "Nmap" },
        { title: "Nikto" },
        { title: "Acunetix" },
        { title: "OWASP ZAP" },
        { title: "SQLmap" },
        { title: "Hydra" },
        { title: "Wireshark" },
        { title: "AWS Security Hub" },
        { title: "GCP Security Command Center" },
        { title: "Azure Defender" },
        { title: "Custom Scripts" },
        { title: "Manual Techniques" },
      ],
    },

    // Deployment Options
    deploymentOptions: {
      heading: "Our VAPT Approach",
      description:
        "We follow industry-standard frameworks like OWASP, NIST, MITRE ATT&CK, and PTES to deliver a structured, risk-based assessment:",
      image: IMAGES.vaptSecurity3,
      pointers: [
        {
          title: "Scoping",
          description: "Requirement Gathering & Scoping",
        },
        {
          title: "Discovery",
          description: "Information Gathering",
        },
        {
          title: "Scanning",
          description: "Vulnerability Scanning",
        },
        {
          title: "Testing",
          description: "Manual Penetration Testing",
        },
        {
          title: "Reporting",
          description: "Reporting & Remediation Plan",
        },
        {
          title: "Validation",
          description: "Retesting & Validation",
        },
      ],
    },

    // Why Choose MITRA Consultancy
    whyChooseMITRAConsultancy: {
      heading: "Deliverables",
      pointers: [
        { title: "Executive Summary" },
        { title: "Detailed Technical Findings" },
        { title: "Risk Matrix with CVSS Scores" },
        { title: "Proof-of-Concept Screenshots" },
        { title: "Remediation Steps and Best Practices" },
        { title: "Compliance Mapping" },
        { title: "Retesting Certificate" },
      ],
    },
  },

  // Network Security Data
  "network-security": {
    heroDetails: {
      page: "Network Security",
      heroImg: IMAGES.networkSecurityHero,
      heading: "Network Security at MITRA Consultancy",
      subHeading:
        "Safeguarding networks with advanced threat detection and secure access controls.",
    },

    // Why security
    whySecurityMatters: {
      heading: "Why Network Security Matters?",
      image: IMAGES.networkSecurity1,
      pointers: [
        {
          title: "Protect Sensitive Data",
          description:
            "Prevent data breaches that could compromise customer trust and your reputation.",
        },
        {
          title: "Ensure Business Continuity",
          description: "Minimize downtime from attacks or internal failures.",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Stay compliant with data protection laws like GDPR, HIPAA, PCI DSS.",
        },
        {
          title: "Reduce Costs",
          description:
            "Avoid massive costs associated with data breaches, penalties, and recovery.",
        },
      ],
    },

    // Common security threats
    commonSecurityThreats: {
      heading: "How Our Network Security Works",
      description:
        "Mitra Consultancy’s network security solution safeguards your infrastructure by continuously monitoring and protecting network traffic to prevent breaches and attacks.",
      image: IMAGES.networkSecurity4,
      pointers: [
        {
          title: "Traffic Monitoring",
          description:
            "Continuously monitor network traffic for unusual activities.",
        },
        {
          title: "Intrusion Detection",
          description:
            "Identify and alert on potential network intrusions or attacks.",
        },
        {
          title: "Access Control",
          description:
            "Enforce strict access policies to secure network resources.",
        },
        {
          title: "Automated Mitigation",
          description:
            "Automatically respond to threats by isolating or blocking malicious traffic.",
        },
      ],
    },

    // Key features
    keyFeatures: {
      heading: "Our Network Security Services",
      pointers: [
        {
          title: "Network Vulnerability Assessment",
          descriptions: [
            "Comprehensive scanning to identify weaknesses in your infrastructure.",
            "Penetration testing to simulate attacks and uncover potential threats.",
          ],
        },
        {
          title: "Firewall & Perimeter Security",
          descriptions: [
            "Deployment and management of advanced firewalls.",
            "Intrusion detection & prevention systems (IDS/IPS).",
          ],
        },
        {
          title: "Endpoint Security",
          descriptions: [
            "Protection for computers, mobile devices, and servers against malware and ransomware.",
          ],
        },
        {
          title: "Secure Network Design & Segmentation",
          descriptions: [
            "Design of secure topologies.",
            "Segmentation to limit the spread of threats.",
          ],
        },
        {
          title: "VPN & Remote Access Security",
          descriptions: [
            "Implement secure Virtual Private Networks for remote employees.",
            "Zero Trust Network Access (ZTNA) strategies.",
          ],
        },
        {
          title: "Continuous Monitoring & Incident Response",
          descriptions: [
            "24x7 network monitoring.",
            "Rapid response teams to mitigate breaches.",
          ],
        },
        {
          title: "Security Policy Development & Compliance",
          descriptions: [
            "Help in creating policies & procedures.",
            "Support for compliance audits.",
          ],
        },
      ],
    },

    // Compliance & Regulatory Alignment
    complianceAndRegulatoryAlignment: {
      heading: "Technologies & Tools We Use",
      pointers: [
        {
          title: "Next-Generation Firewalls (Fortinet, Palo Alto, Cisco)",
        },
        {
          title: "SIEM & SOC platforms (Splunk, IBM QRadar)",
        },
        {
          title: "Anti-malware / EDR solutions (CrowdStrike, SentinelOne)",
        },
        {
          title: "VPN solutions (IPSec, SSL VPN)",
        },
        {
          title: "Encryption protocols & secure access controls",
        },
      ],
    },

    // Deployment Options
    deploymentOptions: {
      heading: "Our Approach",
      image: IMAGES.networkSecurity3,
      pointers: [
        {
          title: "Consult",
          description:
            "Understand your current infrastructure, risks, and business goals.",
        },
        {
          title: "Assess",
          description: "Perform security assessments and gap analyses.",
        },
        {
          title: "Implement",
          description: "Deploy customized solutions.",
        },
        {
          title: "Monitor & Improve",
          description:
            "Continuous monitoring with periodic reviews to adapt to new threats.",
        },
      ],
    },

    // Why Choose MITRA Consultancy
    whyChooseMITRAConsultancy: {
      heading: "Why Choose Mitra Consultancy?",
      pointers: [
        { title: "Experienced cybersecurity professionals." },
        { title: "Vendor-neutral solutions that best fit your needs." },
        { title: "Transparent processes & clear communication." },
        {
          title:
            "Proven track record of securing businesses across industries.",
        },
      ],
    },
  },
};
