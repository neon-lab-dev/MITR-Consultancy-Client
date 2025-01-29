import Image, { StaticImageData } from 'next/image';
import React from 'react';

type TOurServiceCard = {
    icon: StaticImageData;
    title: string;
    description: string;
}

const OurServiceCard: React.FC<TOurServiceCard> = ({ icon, title, description }) => {
    return (
        <div className='bg-white rounded-2xl shadow-service-card p-10 font-Inter'>
            <Image src={icon} alt='ui-ux' className='size-[72px]' />
            <h1 className={`font-bold text-neutral-10 text-xl leading-[27px] capitalize mt-9`}>{title}</h1>
            <p className={`text-neutral-20 text-sm mt-[15px]`}>{description}</p>
        </div>
    );
};

export default OurServiceCard;