import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';
import Container from '../Shared/Container/Container';
import Heading from '../Reusable/Heading/Heading';
import Marquee from 'react-fast-marquee';

const Achievements = () => {
    const ourAchievements1 = [IMAGES.interior, IMAGES.blog, IMAGES.bonohomie, IMAGES.agriculture, IMAGES.studentTiffin, IMAGES.lawer, IMAGES.abhirami]
    const ourAchievements2 = [IMAGES.dentistClinic, IMAGES.nde, IMAGES.ramsun, IMAGES.careerhub]

    return (
        <Container>
            <div className='font-Inter py-[128px]'>
                <Heading
                    align='center'
                    subHeading='They Trust Us'
                    heading='Our Customers are Our Biggest achievements'
                />

                <Marquee className="mt-16" speed={70}>
                    {ourAchievements1.map((tech, index) => (
                        <Image key={index} src={tech} alt='' className='max-w-[170px] mr-20' />
                    ))}
                </Marquee>

                <Marquee className="mt-14" direction="right">
                    {ourAchievements2.map((tech, index) => (
                        <Image key={index} src={tech} alt='' className='max-w-[200px] mr-24' />
                    ))}
                </Marquee>
            </div>
        </Container>
    );
};

export default Achievements;