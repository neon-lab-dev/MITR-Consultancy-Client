"use client";
import { ICONS } from "@/assets";
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};
const SecurityFaq = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number>(0);
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
  const handleClick = (index: number) =>
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? -1 : index));

  return (
    <div className="bg-neutral-190 pb-[80px] font-Inter">
      <h1
        className={`font-bold text-neutral-185 text-[52px] md:text-[140px] 2xl:text-[248px]  
        }`}
      >
        FAQs
      </h1>
      <p className="text-base md:text-lg">Frequently Asked Questions</p>
      <Container>
        <div className="mt-20">
          <div className="flex gap-6 flex-col items-center justify-center w-full mt-9 md:mt-10 xl:mt-20">
            {faqsData.map((faq, index) => (
              <article
                key={index}
                className=" bg-neutral-190 rounded p-8 max-w-[956px] mx-auto"
              >
                <div
                  className="flex gap-2 cursor-pointer items-center justify-between w-full"
                  onClick={() => handleClick(index)}
                >
                  <h1 className="text-neutral-185 font-semibold text-xs md:text-base xl:text-xl">
                    {faq.question}
                  </h1>
                  <Image
                    src={ICONS.downArrow}
                    alt="right-arrow"
                    className={`transition-transform duration-300 ${
                      isAccordionOpen === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <div
                  className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                    isAccordionOpen === index
                      ? "grid-rows-[1fr] opacity-100 mt-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="text-neutral-185 overflow-hidden text-xs md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SecurityFaq;
