"use client";
import Container from "@/Components/Shared/Container/Container";
import React, { useState } from "react";
import KeyFeatureCard from "./KeyFeatureCard/KeyFeatureCard";
import { ICONS } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";
import ContactUs from "@/Components/Home/ContactUs/ContactUs";
import Heading from "@/Components/Reusable/Heading/Heading";

type TFeatures = {
  title: string;
  descriptions: string[];
};

type TKeyFeatures = {
  heading: string;
  pointers: TFeatures[];
};

const KeyFeatures: React.FC<TKeyFeatures> = ({ heading, pointers }) => {
  const [isContactUsModalOpen, setIsContactUsModalOpen] =
    useState<boolean>(false);
  return (
    <div className="py-5 2xl:py-[120px] bg-gradient-key-features font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-10 2xl:gap-20">
          <Heading heading={heading} align="center" />
          <div className="h-full w-full p-6 rounded-xl border-2 border-neutral-130 bg-white  flex flex-col items-center justify-center gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
              {pointers?.map((feature: TFeatures, index: number) => (
                <KeyFeatureCard
                  key={index}
                  icon={ICONS.verified}
                  title={feature.title}
                  points={feature.descriptions}
                />
              ))}{" "}
            </div>{" "}
            {/* Button Section */}
            <Button
              handleClick={() => setIsContactUsModalOpen(true)}
              variant="primary"
              title="Contact Us Today"
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

export default KeyFeatures;
