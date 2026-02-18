/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/Components/Shared/Container/Container";
import Image from "next/image";
import React from "react";

type CoreFeatureItem = {
  title: string;
  description: string;
  icon: any;
};

type DynamicCoreFeaturesProps = {
  heading: string;
  highlightWord?: string;
  items: CoreFeatureItem[];
};

const DynamicCoreFeatures = ({
  heading,
  highlightWord,
  items,
}: DynamicCoreFeaturesProps) => {
  return (
    <section className="bg-neutral-185 font-satoshi py-20">
      <Container>
        {/* Heading */}
        <h2 className="text-center font-satoshi font-extrabold text-white text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize mb-16">
          {heading}{" "}
          {highlightWord && (
            <span className="text-primary-110">{highlightWord}</span>
          )}
        </h2>

        {/* Grid */}
        <div
  className="
    grid
    grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    gap-y-14 gap-x-10
    justify-center
  "
>

  {items.map((item, index) => (
    <div key={index} className="w-full max-w-xs mx-auto flex flex-col">
      {/* Icon */}
      <div className="p-[1px] w-fit rounded-lg bg-gradient-border flex items-center justify-center mb-4">
        <div className="p-3 bg-neutral-185 rounded-lg">
          <Image src={item.icon} alt={item.title} className="size-12" />
        </div>
      </div>

      <h3 className="text-neutral-130 text-[22px] font-black mb-2">
        {item.title}
      </h3>

      <p className="text-neutral-130 leading-relaxed">
        {item.description}
      </p>
    </div>
  ))}
</div>

      </Container>
    </section>
  );
};

export default DynamicCoreFeatures;
    