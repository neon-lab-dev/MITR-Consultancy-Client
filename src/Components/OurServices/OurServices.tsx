import React from 'react';
import Heading from '../Reusable/Heading/Heading';
import Image from 'next/image';
import { ICONS, IMAGES } from '@/assets';
import OurServiceCard from './OurServiceCard';
import Container from '../Shared/Container/Container';

const OurServices = () => {
  const ourServices = [
    {
      icon: ICONS.uiUx,
      title: "Ui/UX Design",
      description: "Get a Website Interface to improve user experience , maximize brand awareness, and increase conversions."
    },
    {
      icon: ICONS.appDevelopment,
      title: "App development",
      description: "Get a Website Interface to improve user experience , maximize brand awareness, and increase conversions."
    },
    {
      icon: ICONS.backendDevelopment,
      title: "Backed Development",
      description: "Get a Website Interface to improve user experience , maximize brand awareness, and increase conversions."
    },
    {
      icon: ICONS.frontendDevelopment,
      title: "Frontend Development",
      description: "Get a Website Interface to improve user experience , maximize brand awareness, and increase conversions."
    },
    {
      icon: ICONS.softwareDevelopment,
      title: "Software Development",
      description: "Get a Website Interface to improve user experience , maximize brand awareness, and increase conversions."
    },
    {
      icon: ICONS.webDevelopment,
      title: "Web Development",
      description: "Get a Website Interface to improve user experience , maximize brand awareness, and increase conversions."
    },
  ];
  
  return (
    <div className="relative pb-[128px]  bg-white section">
      <Image
        src={IMAGES.gradientBg}
        alt="MITR Consultancy Services"
        className="w-full h-full object-cover rounded-b-[50px] absolute z-0"
      />
      <div className='relative z-20 pt-[100px]'>
        <Container>
          <Heading
            align='center'
            subHeading='Services'
            heading='Our List of Best services'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu.'
          />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-[46px] mt-[62px]'>
            {ourServices.map((service, index) => (
              <OurServiceCard key={index} {...service} />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default OurServices;
