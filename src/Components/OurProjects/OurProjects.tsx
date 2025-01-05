"use client"
import Container from '../Shared/Container/Container';
import Heading from '../Reusable/Heading/Heading';
import OurProjectCard from './OurProjectCard';
import { ourProjects } from './ourProjects';
import Image from 'next/image';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import React from 'react';
import { ICONS } from '../../assets/index';

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
                            <button id="prevProjectButton" className="p-2 rounded-lg bg-white border border-neutral-60 hover:bg-gray-100 transition duration-300">
                                <Image src={ICONS.rightArrowDark} alt='' className='size-6 rotate-180' />
                            </button>
                            <button id="nextProjectButton" className="p-2 rounded-lg bg-primary-10 border border-primary-10 hover:bg-primary-10/80 transition duration-300">
                                <Image src={ICONS.rightArrow2} alt='' className='size-6' />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation={{
                            prevEl: "#prevProjectButton",
                            nextEl: "#nextProjectButton",
                        }}
                        modules={[Navigation, Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            360: { slidesPerView: 1 },
                            425: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2 },
                            1366: { slidesPerView: 3 },
                        }}
                        className="w-full"
                    >
                        {ourProjects?.map((project) => (
                            <SwiperSlide key={project._id} className='mb-16 w-full'>
                                <OurProjectCard  {...project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='flex lg:hidden items-center justify-center gap-4 mt-7'>
                        <button id="prevProjectButton" className="p-2 rounded-lg bg-white border border-neutral-60 hover:bg-gray-100 transition duration-300">
                            <Image src={ICONS.rightArrowDark} alt='' className='size-6 rotate-180' />
                        </button>
                        <button id="nextProjectButton" className="p-2 rounded-lg bg-primary-10 border border-primary-10 hover:bg-primary-10/80 transition duration-300">
                            <Image src={ICONS.rightArrow2} alt='' className='size-6' />
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurProjects;
