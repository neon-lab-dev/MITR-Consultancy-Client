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
            title: "Wev Development",
            description: "Get a Website Interface to improve user experience , maximize brand awareness, and increase conversions."
        },
    ]
    return (
        <div className="bg-white py-[128px] relative">
            <Image src={IMAGES.gradientBg} alt="MITR Consultancy Services" className="w-full h-full " />
            <div className='absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center z-20'>
                <Container>
                    <div>
                        <Heading
                            align='center'
                            subHeading='Services'
                            heading='Our List of Best services'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus mattis nunc aliquam tincidunt est non. Viverra nec eu.'
                        />

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-[46px] mt-[62px]'>
                            {
                                ourServices.map((service, index) => (
                                    <OurServiceCard key={index} {...service} />
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </div>

        </div>
    );
};

export default OurServices;