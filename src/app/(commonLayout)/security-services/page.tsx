import { IMAGES } from "@/assets";
import ComplianceAssessment from "@/Components/CybersecurityCompliance/ComplianceAssessment/ComplianceAssessment";
import ComplianceSolutions from "@/Components/CybersecurityCompliance/ComplianceSolutions/ComplianceSolutions";
import MitrasEdge from "@/Components/Security/MitrasEdge/MitrasEdge";
import SecurityHero from "@/Components/Security/SecurityHero/SecurityHero";
import SecurityService from "@/Components/Security/SecurityService/SecurityService";
import Container from "@/Components/Shared/Container/Container";
import FAQ from "@/Components/Shared/FAQ/FAQ";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};
const SecurityPage = () => {
  const faqsData: FAQItem[] = [
    {
      question:
        "What are the common types of cyber threats that businesses face?",
      answer:
        "Businesses face threats such as phishing attacks, ransomware, malware, insider threats, and DDoS attacks. At MITRA Consultancy, we help identify and mitigate these risks with proactive strategies.",
    },
    {
      question: "Do you provide end-to-end cybersecurity solutions?",
      answer:
        "Yes, we offer comprehensive cybersecurity services—from risk assessment and strategy planning to implementation, monitoring, and incident response—to ensure complete protection.",
    },
    {
      question: "Which industries are most at risk of cyberattacks?",
      answer:
        "Industries like healthcare, finance, e-commerce, and education are top targets. We tailor our security strategies to meet the specific needs and regulatory requirements of each sector.",
    },
    {
      question: "How long does a typical cybersecurity assessment take?",
      answer:
        "The duration depends on your infrastructure size and complexity. A basic audit may take a few days, while in-depth assessments for large organizations can span several weeks.",
    },
    {
      question:
        "Do you offer vulnerability assessments and penetration testing?",
      answer:
        "Absolutely. We conduct both vulnerability scans and advanced penetration testing to identify weak points before attackers can exploit them.",
    },
    {
      question: "Can you work with our existing IT or security team?",
      answer:
        "Yes, we frequently collaborate with internal teams to enhance their security posture through strategic consulting, audits, and tool integration.",
    },
    {
      question: "What cybersecurity frameworks and standards do you follow?",
      answer:
        "We follow industry-standard frameworks like NIST, ISO 27001, and CIS controls to ensure robust, compliant, and scalable security implementations.",
    },
    {
      question: "Do you provide post-incident response support?",
      answer:
        "Yes, our team provides 24/7 incident response support, including threat containment, forensic analysis, and system recovery, ensuring business continuity.",
    },
  ];

  const images = [
    {
      image: IMAGES.emailSecurity,
      size: "w-16 md:w-32 lg:w-48 xl:w-52",
    },
    {
      image: IMAGES.endpointSecurity2,
      size: "w-16 md:w-32 lg:w-48 xl:w-64",
    },
    {
      image: IMAGES.cloudSecurity2,
      size: "w-16 md:w-32 lg:w-48 xl:w-64",
    },
    {
      image: IMAGES.networkSecurity2,
      size: "w-16 md:w-32 lg:w-48 xl:w-[220px]",
    },
  ];

  return (
    <div>
      <SecurityHero />
      {/* Images */}
      <div className="w-full  mt-10 border-b pb-8">
        <Container>
          <div className="flex justify-between items-center gap-4 z-10">
            {images?.map((image, index) => (
              <Image
                key={index}
                src={image.image}
                alt="MITRA Consultancy"
                className={`${image.size}`}
              />
            ))}
          </div>
        </Container>
      </div>
      <ComplianceSolutions heading="Security Solutions Across Sectors" />
      <SecurityService />
      <ComplianceAssessment />
      <MitrasEdge />
      <FAQ faqsData={faqsData} />
    </div>
  );
};

export default SecurityPage;
