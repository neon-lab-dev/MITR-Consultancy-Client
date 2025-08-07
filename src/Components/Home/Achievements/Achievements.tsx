import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';
import Container from '../../Shared/Container/Container';
import Heading from '../../Reusable/Heading/Heading';
import Marquee from 'react-fast-marquee';

const Achievements = () => {
    const ourAchievements1 = [IMAGES.dentistClinic, IMAGES.nde, IMAGES.ramsun, IMAGES.careerhub, IMAGES.interior, IMAGES.blog, IMAGES.bonohomie, IMAGES.agriculture, IMAGES.studentTiffin, IMAGES.lawer, IMAGES.abhirami];

    return (
        <Container>
            <div className='font-Inter py-[60px] md:py-20 xl:py-[140px]'>
                <Heading
                    align='center'
                    subHeading='They Trust Us'
                    heading='Building Success Through Client Appreciation.'
                />

                <Marquee className="mt-16" speed={70}>
                    {ourAchievements1.map((tech, index) => (
                        <Image key={index} src={tech} alt='' className='mr-20' />
                    ))}
                </Marquee>
            </div>
        </Container>
    );
};

export default Achievements;