import Image, { StaticImageData } from 'next/image';
import React from 'react';

type TOurServiceCard = {
  icon: StaticImageData;
  title: string;
  description: string;
  details: string;
};

const OurServiceCard: React.FC<TOurServiceCard> = ({ icon, title, description, details }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden bg-white shadow-service-card transition-transform duration-500 ease-in-out hover:scale-[1.03] hover:shadow-2xl cursor-pointer font-Inter">
      {/* Main Content */}
      <div className="p-10 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-95">
       <div className='size-[72px] flex items-center justify-center bg-primary-30 rounded-md'>
         <Image
          src={icon}
          alt="service-icon"
          className="size-7 transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
       </div>
        <h1 className="font-bold text-neutral-10 text-xl leading-[27px] capitalize mt-9">
          {title}
        </h1>
        <p className={`text-neutral-20 text-sm mt-[15px]`}>{description}</p>
      </div>

      {/* Overlay Description */}
      <div className="absolute inset-0 bg-neutral-40 bg-opacity-90 flex items-center justify-center px-8 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out text-center">
        <p className="text-white text-sm leading-relaxed">{details}</p>
      </div>
    </div>
  );
};

export default OurServiceCard;
