import Container from "@/Components/Shared/Container/Container";
import React from "react";
import KeyFeatureCard from "./KeyFeatureCard/KeyFeatureCard";
import { ICONS } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";

type TFeatures = {
  title: string;
  descriptions: string[];
};

type TKeyFeatures = {
  heading: string;
  pointers: TFeatures[];
};

const KeyFeatures: React.FC<TKeyFeatures> = ({ heading, pointers }) => {
  return (
    <div className="py-[120px] bg-gradient-key-features font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-20">
          <h2 className="text-neutral-145 text-[32px] md:text-[48px] 2xl:text-[64px] font-semibold text-center">
            {heading}
          </h2>
          <div className="h-full w-full p-6 rounded-xl border-2 border-neutral-130 bg-white  flex flex-col items-center justify-center gap-12">
            <div className=" grid lg:grid-cols-4 gap-6 ">
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
              variant="primary"
              title="Get Your Email Secure Today"
              classNames="w-[560px] h-[44px] md:h-auto"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default KeyFeatures;
