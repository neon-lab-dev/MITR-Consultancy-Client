"use client"
import Heading from "../../Reusable/Heading/Heading";
import Container from "../../Shared/Container/Container";
import { testimonials } from "./testimonial.data";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ICONS } from "@/assets";

const Testimonials = () => {
    return (
        <div className="bg-white py-[60px] md:py-20 xl:py-[98px]">
            <Container>
                <div>
                    <div className='flex justify-between mb-5'>
                        <Heading
                            align='left'
                            subHeading='Testimonials'
                            heading='Customer testimonials'
                            description='Real feedback from satisfied clients sharing their positive experiences with our services.'
                        />
                        <div className='hidden lg:flex items-center gap-4'>
                            <button id="prevButton" className="p-2 rounded-lg bg-white border border-neutral-60 hover:bg-gray-100 transition duration-300">
                                <Image src={ICONS.rightArrowDark} alt='' className='size-6 rotate-180' />
                            </button>
                            <button id="nextButton" className="p-2 rounded-lg bg-primary-10 border border-primary-10 hover:bg-primary-10/80 transition duration-300">
                                <Image src={ICONS.rightArrow2} alt='' className='size-6' />
                            </button>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={{
                            prevEl: "#prevButton",
                            nextEl: "#nextButton",
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
                            1280: { slidesPerView: 2.8 },
                            1366: { slidesPerView: 3 },
                        }}
                        className=""
                    >
                        {testimonials?.map((testimonial) => (
                            <SwiperSlide key={testimonial._id} className='mb-10'>
                                <TestimonialCard key={testimonial?._id} {...testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='flex lg:hidden items-center justify-center gap-4 mt-7'>
                        <button id="prevButton" className="p-2 rounded-lg bg-white border border-neutral-60 hover:bg-gray-100 transition duration-300">
                            <Image src={ICONS.rightArrowDark} alt='' className='size-6 rotate-180' />
                        </button>
                        <button id="nextButton" className="p-2 rounded-lg bg-primary-10 border border-primary-10 hover:bg-primary-10/80 transition duration-300">
                            <Image src={ICONS.rightArrow2} alt='' className='size-6' />
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;