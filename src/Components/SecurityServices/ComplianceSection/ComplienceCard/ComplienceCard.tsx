import { StaticImageData } from "next/image";
import { IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";

interface ComplianceCardProps {
  image?: StaticImageData | string;
  title: string;
}

const ComplienceCard: React.FC<ComplianceCardProps> = ({
  image = IMAGES.MITRConsoltancyLogo,
  title,
}) => {
  return (
    <div className="flex flex-col gap-6 p-6 border border-neutral-125 items-center justify-center w-[302px] rounded-xl bg-white">
      {image && (
        <div className="relative flex items-center justify-center w-full h-25 bg-gradient-compliance rounded-t-xl">
          <div className="absolute inset-0 overlay-gradient-compliance-card rounded-t-xl" />
          <Image src={image} alt={title} className="h-20 relative" />
        </div>
      )}
        <h2 className="text-secondary-20 text-2xl font-medium">
          {title}
        </h2>
    </div>
  );
};

export default ComplienceCard;
