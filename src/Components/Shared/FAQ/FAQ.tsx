"use client";
import { useState } from "react";
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

  const handleClick = (index: number) =>
    setIsAccordionOpen((prevIndex) => (prevIndex === index ? -1 : index));

  return (
     <div className="bg-neutral-190 pb-[80px] font-inter py-14">
      <h2 className="font-black text-neutral-185 text-[32px] xl:text-[40px] 2xl:text-[64px] capitalize text-center">
              Freequently Asked{" "}
              <span className="text-primary-110">Questions</span>
            </h2>
      <Container>
        <div className="mt-20">
          <div className="flex gap-6 flex-col items-center justify-center w-full mt-9 md:mt-10 xl:mt-20">
            {faqsData?.map((faq, index) => (
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

export default FAQ;
