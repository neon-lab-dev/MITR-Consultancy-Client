import React from 'react';
import Heading from '../../Reusable/Heading/Heading';
import Image from 'next/image';
import { ICONS, IMAGES } from '@/assets';
import OurServiceCard from './OurServiceCard';
import Container from '../../Shared/Container/Container';

const OurServices = () => {
  const ourServices = [
    {
      icon: ICONS.uiUx,
      title: "Ui/UX Design",
      description: " We create user-friendly and visually stunning designs that make your product stand out."
    },
    {
      icon: ICONS.appDevelopment,
      title: "App development",
      description: "From idea to launch, we build apps that are fast, reliable, and tailored to your needs."
    },
    {
      icon: ICONS.backendDevelopment,
      title: "Backed Development",
      description: "Our robust backend solutions ensure your applications run smoothly and securely."
    },
    {
      icon: ICONS.frontendDevelopment,
      title: "Frontend Development",
      description: "We craft responsive and attractive interfaces that your users will love."
    },
    {
      icon: ICONS.softwareDevelopment,
      title: "Software Development",
      description: " Get custom software solutions designed to simplify and enhance your business operations."
    },
    {
      icon: ICONS.webDevelopment,
      title: "Web Development",
      description: "Let us build a website that’s not just beautiful but also drives results for your business."
    },
  ];
  
  return (
    <div id="services" className="relative pb-[128px]  bg-white section">
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
            description='Discover our diverse range of top-quality services, tailored to meet your needs with excellence.'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[46px] mt-[62px]'>
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
