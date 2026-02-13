
import Container from "@/Components/Shared/Container/Container";
import Image, { StaticImageData } from "next/image";
import React from "react";

type AboutSectionProps = {
  badgeText?: string;
  title: string;
  description: string;
  image: StaticImageData | string;
};

const DynamicAboutSection = ({
  badgeText,
  title,
  description,
  image,
}: AboutSectionProps) => {
  console.log(badgeText);
  return (
    <section className="bg-neutral-190 font-Satoshi py-16">
      <Container>
        <div className="flex items-center justify-center gap-12">
          {/* Top Content */}
        <div>
            <h1
              className={`font-Satoshi font-bold text-neutral-185 text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize max-w-[600px]`}
            >
              <span className="text-primary-10">About</span> {title}
            </h1>

          <p className="max-w-xl text-sm  text-neutral-185 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-full md:w-[360px] md:h-[348px] rounded-xl overflow-hidden">
          <Image
            src={image}
            alt="about section image"
            className="object-cover w-full h-full md:w-[360px] md:h-[348px] rounded-xl"
          />
        </div>

        </div>
      </Container>
    </section>
  );
};

export default DynamicAboutSection;
