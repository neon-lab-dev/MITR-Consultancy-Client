/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "@/assets";
import Image from "next/image";
import React from "react";

interface KeyFeatureCardProps {
  icon?: string;
  title: string;
  points?: any;
}

const KeyFeatureCard: React.FC<KeyFeatureCardProps> = ({
  icon = ICONS.verified,
  title,
  points,
}) => {
  return (
    <div className="bg-white rounded-xl flex flex-col items-center justify-start gap-12 pb-12 border border-neutral-125">
      <div className="size-[68px] bg-neutral-140 flex items-center justify-center p-4">
        <Image src={icon} alt={title} className="w-[38px] h-10" />
      </div>
      <div className="flex flex-col gap-5 px-6">
        <h2 className="text-neutral-145 text-base 2xl:text-lg font-medium">{title}</h2>
        {points &&
          points.map((point: any, index: number) => (
            <div
              key={index}
              className="flex flex-row items-start gap-[10px]"
            >
              <Image
                src={ICONS.tickCircleGreen}
                alt="tick"
                className="size-4"
              />
              <p className="text-neutral-165 text-sm text-start">{point}</p>
              <p className="text-neutral-165 text-sm text-start">
                {point?.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default KeyFeatureCard;
