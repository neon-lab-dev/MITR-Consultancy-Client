import React from "react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  gradient?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  gradient,
}) => {
  return (
    <div className="flex flex-row gap-[18px] font-Inter pr-[18px] bg-white border border-neutral-125 rounded-xl">
      <div
        className={`${gradient} w-[83px] pl-[23px] h-[87px] py-[6px] flex justify-center items-center rounded-l-xl`}
      >
        {number}
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="text-secondary-20 text-2xl font-extrabold">{title}</h3>
        <p className="text-neutral-145 text-sm py-[10px]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
