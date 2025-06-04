import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface SecurityServiceCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

const SecurityServiceCard: React.FC<SecurityServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex max-w-[400px]">
      <div className="bg-neutral-140 border border-r-neutral-125 px-4 flex items-center justify-center rounded-l-xl">
        <Image src={icon} alt="" className="size-10" />
      </div>
      <div className="bg-white border border-r-neutral-125 border-y-neutral-125 p-3 rounded-r-xl">
        <h1 className="text-secondary-20 text-2xl font-extrabold">{title}</h1>
        <p className="text-neutral-145 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SecurityServiceCard;
