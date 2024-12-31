import { IMAGES } from '@/assets';
import Image from 'next/image';
import React from 'react';
import Container from '../Shared/Container/Container';
import Heading from '../Reusable/Heading/Heading';

const Achievements = () => {
    const ourAchievements1 = [IMAGES.interior, IMAGES.blog, IMAGES.bonohomie, IMAGES.agriculture, IMAGES.studentTiffin, IMAGES.lawer, IMAGES.abhirami]
    const ourAchievements2 = [IMAGES.dentistClinic, IMAGES.nde, IMAGES.ramsun, IMAGES.careerhub]

    const containerClass = 'flex items-center justify-center mt-[54px]'
    return (
        <Container>
            <div className='font-Inter py-[128px]'>
                <Heading
                    align='center'
                    subHeading='They Trust Us'
                    heading='Our Customers are Our Biggest achievements'
                />

                <div className={`${containerClass} gap-20`}>
                    {
                        ourAchievements1.map((achievement, index) =>
                            <Image key={index} src={achievement} alt='' className='max-w-[170px]' />
                        )
                    }
                </div>
                <div className={`${containerClass} gap-32`}>
                    {
                        ourAchievements2.map((achievement, index) =>
                            <Image key={index} src={achievement} alt='' className='max-w-[200px]' />
                        )
                    }
                </div>
            </div>
        </Container>
    );
};

export default Achievements;