import Button from "@/Components/Reusable/Button/Button";
import Container from "@/Components/Shared/Container/Container";
import Image, { StaticImageData } from "next/image";
import React from "react";

type DynamicHeroProps = {
  badgeText?: string;
  title: string;
  highlightWord?: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  image: StaticImageData | string;
  align?: "left" | "center";
};

const DynamicHero = ({
  badgeText,
  title,
  highlightWord,
  description,
  image,
}: DynamicHeroProps) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-Satoshi">
      {/* Background Image */}
      <Image
        src={image}
        alt="hero background"
        fill
        className="object-cover opacity-90"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-dynamic-pages" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center ">
        <Container>
          <div className="w-screen">
            <div
              className={`max-w-2xl 
            `}
            >
              {badgeText && (
                <p className="text-primary-110 text-lg font-black mb-3">
                 MITRA&apos;s <span className="text-neutral-130">{badgeText}</span>
                </p>
              )}

              <h1 className="text-white text-3xl font-black leading-tight">
                {title}{" "}
                {highlightWord && (
                  <span className="text-primary-110">{highlightWord}</span>
                )}
              </h1>

              <p className="text-neutral-130 mt-4 text-sm font-semibold pb-6">
                {description}
              </p>

            <Button
            title="Book a Demo"
            variant="primary"
            iconPosition="right"
          />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DynamicHero;
