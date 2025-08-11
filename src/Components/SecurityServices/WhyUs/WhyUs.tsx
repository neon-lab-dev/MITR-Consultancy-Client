"use client";
import Container from "@/Components/Shared/Container/Container";
import { useState } from "react";
import KeyFeatureCard from "../KeyFeatures/KeyFeatureCard/KeyFeatureCard";
import { ICONS } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Heading from "@/Components/Reusable/Heading/Heading";

type TPointers = {
  title: string;
  description: string;
};

type TWhyUs = {
  heading: string;
  pointers: TPointers[];
};

const WhyUs: React.FC<TWhyUs> = ({ heading, pointers }) => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);
  console.log(heading);
  return (
    <div className="py-10 xl:py-20 2xl:py-[100px] font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-10 2xl:gap-20">
          <Heading
            heading={"What Sets MITRA Consultancy Apart?"}
            align="center"
          />

          <div className="h-full w-full p-6 rounded-xl border-2 border-neutral-130 bg-primary-90 flex flex-col items-center justify-center gap-12">
            <div className="w-full grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-6 ">
              {pointers?.map((feature, index: number) => (
                <KeyFeatureCard
                  key={index}
                  icon={ICONS.tickCircleGreen}
                  title={feature.title}
                />
              ))}{" "}
            </div>
            <Button
              handleClick={() => setIsContactUsModalOpen(true)}
              variant="primary"
              title="Contact Us Today"
              classNames=""
            />
          </div>
        </div>
      </Container>
      <ContactUs
        isContactUsModalOpen={isContactUsModalOpen}
        setIsContactUsModalOpen={setIsContactUsModalOpen}
      />
    </div>
  );
};

export default WhyUs;
