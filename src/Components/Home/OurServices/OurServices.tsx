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
    description: "We create user-friendly and visually stunning designs that make your product stand out.",
    details: "Craft intuitive user interfaces, enhance user journeys, boost engagement, ensure brand consistency, optimize usability, design wireframes, and prototype experiences for websites, mobile apps, SaaS tools, and enterprise-level applications."
  },
  {
    icon: ICONS.appDevelopment,
    title: "Mobile App Development",
    description: "Android, iOS, and cross-platform apps that function flawlessly and engage users.",
    details: "Develop native and hybrid apps, ensure performance optimization, seamless UI/UX, offline capabilities, push notifications, secure backend integration, cross-platform support, and consistent updates for long-term scalability and user retention."
  },
  {
    icon: ICONS.backendDevelopment,
    title: "Backed Development",
    description: "Scalable, secure server-side systems built for reliability and efficiency.",
    details: "Design robust APIs, implement authentication, handle databases, manage business logic, ensure uptime, follow best security practices, integrate cloud services, scale microservices, and support real-time communication and data consistency."
  },
  {
    icon: ICONS.frontendDevelopment,
    title: "Frontend Development",
    description: "Modern, intuitive interfaces crafted for speed, engagement, and accessibility.",
    details: "Build responsive layouts, follow accessibility standards, apply performance optimizations, write clean modular code, use modern frameworks, manage state effectively, ensure SEO-readiness, and deliver pixel-perfect, user-first interface designs."
  },
  {
    icon: ICONS.softwareDevelopment,
    title: "Full Stack Web Solutions",
    description: "Integrated development from frontend to backend — one solution, fully connected.",
    details: "Deliver end-to-end solutions, connect frontend and backend seamlessly, use REST/GraphQL APIs, integrate databases, deploy to cloud, handle authentication, test thoroughly, maintain code quality, and ensure full-cycle development ownership."
  },
  {
    icon: ICONS.webDevelopment,
    title: "Web Development",
    description: "Custom-designed, responsive websites aligned with user experience and business goals.",
    details: "Design responsive websites, implement custom features, integrate CMS, optimize for SEO, ensure fast loading, deploy securely, manage hosting, analyze traffic, and align visual strategy with business conversion goals."
  }
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
            heading='Our List of Services'
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
