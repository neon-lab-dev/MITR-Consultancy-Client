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
  return (
    <section className="bg-neutral-190 py-16">
      <Container>
        {/* Top Content */}
        <div className="flex flex-col xl:flex-row justify-between gap-6 mb-10">
          <div>
            {badgeText && (
              <p className="text-sm text-black text-medium mb-2">• {badgeText}</p>
            )}
            <h2 className="text-3xl font-black text-neutral-185">
             <span className="text-primary-110">About</span> {title}
            </h2>
          </div>

          <p className="max-w-xl text-sm  text-neutral-185 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[220px] md:h-[300px] rounded-xl overflow-hidden">
          <Image
            src={image}
            alt="about section image"
            fill
            className="object-cover w-full h-full md:w-[770px] md:h-[348px] 2xl:w-[1128px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default DynamicAboutSection;
