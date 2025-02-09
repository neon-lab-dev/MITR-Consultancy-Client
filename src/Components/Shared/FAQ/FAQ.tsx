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

const FAQ = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<number>(0);

  const faqs: FAQItem[] = [
    {
      question: "What services does MITR Consultancy offer?",
      answer: "At MITR Consultancy, we specialize in a range of digital solutions, including web application development, frontend and backend development, UI/UX design, and more. Our goal is to deliver user-friendly, high-performing, and visually stunning digital products.",
    },
    {
      question: "Do you provide end-to-end development services?",
      answer: "Yes, we offer end-to-end development services. From conceptualization and design to development, deployment, and maintenance, we ensure a seamless experience for our clients.",
    },
    {
      question: "What industries do you serve?",
      answer: "We work with clients across various industries, including e-commerce, education, healthcare, finance, and more. Our expertise allows us to adapt to the unique needs of each industry.",
    },
    {
      question: "How long does it take to develop a web application?",
      answer: "The development timeline depends on the project’s complexity and scope. Simple applications can take a few weeks, while more complex projects may take several months. We provide a detailed timeline after assessing your requirements.",
    },
    {
      question: "Do you offer UI/UX design as a standalone service?",
      answer: "Absolutely! If you’re only looking for UI/UX design services, our expert team can help create engaging and user-friendly interfaces that align with your brand.",
    },
    {
      question: "Can you work with my existing development team?",
      answer: "Yes, we can collaborate with your existing team to complement their efforts. Whether you need assistance with frontend, backend, or UI/UX, we’re here to help.",
    },
    {
      question: "What technologies do you use?",
      answer: "We work with a variety of modern technologies, including React, Angular, Node.js, Express, MongoDB, Figma, and more, to deliver cutting-edge solutions.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we provide ongoing maintenance and support services to ensure your application runs smoothly and stays up-to-date with the latest technologies and trends.",
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
            heading="Find the answers you need"
          />

          <div className="flex gap-6 flex-col items-center justify-center w-full mt-9 md:mt-10 xl:mt-20">
            {faqs.map((faq, index) => (
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
                    className={`${
                      isAccordionOpen === index && "rotate-[180deg]"
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
                  <p className="text-neutral-20 overflow-hidden text-xs md:text-base ">{faq.answer}</p>
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
