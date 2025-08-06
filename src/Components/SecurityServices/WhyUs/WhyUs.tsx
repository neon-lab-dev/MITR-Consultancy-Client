import Container from "@/Components/Shared/Container/Container";
import React from "react";
import KeyFeatureCard from "../KeyFeatures/KeyFeatureCard/KeyFeatureCard";
import { ICONS } from "@/assets";
import Button from "@/Components/Reusable/Button/Button";

type TPointers = {
  title: string;
  description: string;
};

type TWhyUs = {
  heading: string;
  pointers: TPointers[];
};

const WhyUs:React.FC<TWhyUs> = ({heading, pointers}) => {
  return (
    <div className="py-[100px] font-Inter">
      <Container>
        <div className="flex flex-col justify-center items-center text-center w-full gap-20">
          <h2 className="text-neutral-145 text-[32px] md:text-[48px] 2xl:text-[64px] font-semibold text-center">
            {heading}
          </h2>

          <div className="h-full w-full p-6 rounded-xl border-2 border-neutral-130 bg-primary-90 flex flex-col items-center justify-center gap-12">
            <div className="w-full grid lg:grid-cols-3 gap-6 ">
              {pointers?.map((feature, index:number) => (
                <KeyFeatureCard
                  key={index}
                  icon={ICONS.tickCircleGreen}
                  title={feature.title}
                />
              ))}{" "}
            </div>
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

export default WhyUs;
