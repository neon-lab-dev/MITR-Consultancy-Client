"use client";
import { useState } from "react";
import Heading from "../../Reusable/Heading/Heading";
import Container from "../Container/Container";
import Image from "next/image";
import { ICONS } from "@/assets";

// Define FAQ type
type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = ({ faqsData }: { faqsData?: FAQItem[] }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number>(0);

  const faqs: FAQItem[] = [
    {
      question: "What services does MITRA Consultancy offer?",
      answer:
        "MITRA Consultancy offers expert web and app development, UI/UX design, cybersecurity and compliance solutions, along with exclusive 3-month online training programs for students — your all-in-one destination for building, securing, and growing in the digital world.",
    },
    {
      question: "Do you provide end-to-end development services?",
      answer:
        "Yes, we offer end-to-end development services. From conceptualization and design to development, deployment, and maintenance, we ensure a seamless experience for our clients.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We work with clients across various industries, including e-commerce, education, healthcare, finance, and more. Our expertise allows us to adapt to the unique needs of each industry.",
    },

    {
      question: "Why is email security crucial for businesses today?",
      answer:
        "Email remains the primary entry point for cyberattacks like phishing and BEC scams. Our email security services protect your organization from malicious emails, data breaches, and compliance violations through advanced filtering, encryption, and real-time monitoring.",
    },
    {
      question:
        "How do your security services protect our network, endpoints, and cloud infrastructure?",
      answer:
        "MITRA Consultancy offers layered security solutions including firewall protection, endpoint detection and response (EDR), and cloud access security broker (CASB) tools. This ensures comprehensive protection across your network, devices, and cloud environments.",
    },
    {
      question: "What is VAPT, and why does my company need it?",
      answer:
        "Vulnerability Assessment and Penetration Testing (VAPT) identifies and exploits security weaknesses before attackers can. It’s essential for maintaining strong defenses, meeting compliance requirements, and proactively securing applications, networks, and cloud systems.",
    },
    {
      question:
        "How do your cybersecurity services help us meet regulatory compliance?",
      answer:
        "Our security solutions are designed with compliance in mind — whether it’s GDPR, HIPAA, ISO, or local data protection laws. We help implement policies, controls, and audits to ensure you meet all regulatory requirements confidently.",
    },
    {
      question: "Can you work with my existing development team?",
      answer:
        "Yes, we can collaborate with your existing team to complement their efforts. Whether you need assistance with frontend, backend, or UI/UX, we’re here to help.",
    },
  ];

  const handleClick = (index: number) =>
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? -1 : index));

  return (
    <div className="bg-white py-[80px] font-Inter">
      <Container>
        <div>
          <Heading
            align="center"
            subHeading="FAQ’S"
            heading="Find Quick Answers to Common Questions"
          />

          <div className="flex gap-6 flex-col items-center justify-center w-full mt-9 md:mt-10 xl:mt-20">
            {(faqsData ?? faqs).map((faq, index) => (
              <article
                key={index}
                className="shadow-faq-box-shadow bg-white rounded p-8 max-w-[956px] mx-auto"
              >
                <div
                  className="flex gap-2 cursor-pointer items-center justify-between w-full"
                  onClick={() => handleClick(index)}
                >
                  <h1 className="text-neutral-10 font-semibold text-xs md:text-base xl:text-xl">
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
                  <p className="text-neutral-20 overflow-hidden text-xs md:text-base">
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

export default FAQ;
