"use client";
import { ICONS } from "@/assets";
import Image from "next/image";

type TTestimonialCard = {
  rating: number;
  review: string;
  name: string;
  designation: string;
};

const TestimonialCard: React.FC<TTestimonialCard> = ({
  rating,
  review,
  name,
  designation,
}) => {
  return (
    <div className="bg-white shadow-box-shadow p-8 rounded flex flex-col gap-6 w-full md:w-full xl:w-[416px] h-[247px]">

      <p className={`text-neutral-20 md:text-sm text-xs `}>{`"${review}"`}</p>

      <div className="flex items-center gap-5">
        <Image
          src={ICONS.profile}
          alt={name}
          className="size-[50px] rounded-full"
        />

        <div>
          <h1 className="font-semibold xl:text-xl md:text-base text-xs leading-6">
            {name}
          </h1>
          <p
            className={`text-neutral-20 xl:text-xl md:text-base text-xs leading-6`}
          >
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
