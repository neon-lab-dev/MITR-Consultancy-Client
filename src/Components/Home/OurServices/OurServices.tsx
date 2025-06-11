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
      title: "Mobile App development",
      description: "Android, iOS, and cross-platform apps that function flawlessly and engage users."
    },
    {
      icon: ICONS.backendDevelopment,
      title: "Backed Development",
      description: "Scalable, secure server-side systems built for reliability and efficiency."
    },
    {
      icon: ICONS.frontendDevelopment,
      title: "Frontend Development",
      description: "Modern, intuitive interfaces crafted for speed, engagement, and accessibility."
    },
    {
      icon: ICONS.softwareDevelopment,
      title: "Full Stack Web Solutions",
      description: "Integrated development from frontend to backend — one solution, fully connected."
    },
    {
      icon: ICONS.webDevelopment,
      title: "Web Development",
      description: "Custom-designed, responsive websites aligned with user experience and business goals."
    },
  ];
  
  return (
    <div id="services" className="relative pb-[128px]  bg-white section">
      <Image
        src={IMAGES.gradientBg}
        alt="MITRA Consultancy Services"
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
