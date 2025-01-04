import React from 'react';
import Container from '../Shared/Container/Container';
import Heading from '../Reusable/Heading/Heading';
import OurProjectCard from './OurProjectCard';
import { ourProjects } from './ourProjects';
import Image from 'next/image';
import { ICONS } from '@/assets';

const OurProjects = () => {
    return (
        <div id="portfolio" className="bg-white py-[128px]">
            <Container>
                <div>
                   <div className='flex justify-between'>
                   <Heading
                        align="left"
                        subHeading="Projects"
                        heading="A collection of our latest works"
                        description="Explore our curated collection of top-notch projects showcasing innovation and excellence."
                    />
                      <div className='hidden lg:flex items-center gap-4'>
                        <button className="p-2 rounded-lg bg-white border border-neutral-60 hover:bg-gray-100 transition duration-300">
                            <Image src={ICONS.rightArrowDark} alt='' className='size-6 rotate-180' />
                        </button>
                        <button className="p-2 rounded-lg bg-primary-10 border border-primary-10 hover:bg-primary-10/80 transition duration-300">
                            <Image src={ICONS.rightArrow2} alt='' className='size-6' />
                        </button>
                    </div>
                   </div>
                    <div className=" overflow-x-auto ">
                        <div className="flex gap-6 w-max my-10">
                            {ourProjects.map((project) => (
                                <OurProjectCard key={project._id} {...project} />
                            ))}
                        </div>
                    </div>

                    <div className='flex lg:hidden items-center justify-center gap-4 mt-7'>
                        <button className="p-2 rounded-lg bg-white border border-neutral-60 hover:bg-gray-100 transition duration-300">
                            <Image src={ICONS.rightArrowDark} alt='' className='size-6 rotate-180' />
                        </button>
                        <button className="p-2 rounded-lg bg-primary-10 border border-primary-10 hover:bg-primary-10/80 transition duration-300">
                            <Image src={ICONS.rightArrow2} alt='' className='size-6' />
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurProjects;
