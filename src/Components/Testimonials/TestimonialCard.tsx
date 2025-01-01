"use client"
import Image from 'next/image';
import StarRatings from 'react-star-ratings';

type TTestimonialCard = {
    rating: number;
    review: string;
    avatar: string;
    name: string;
    designation: string;
}

const TestimonialCard: React.FC<TTestimonialCard> = ({ rating, review, avatar, name, designation }) => {
    return (
        <div className='bg-white shadow-box-shadow p-8 rounded flex flex-col gap-6'>
            <StarRatings
                rating={rating}
                starRatedColor="#0099FF"
                numberOfStars={5}
                name="rating"
                starDimension="22px"
                starSpacing="2px"
            />

            <p className={`text-neutral-20 text-sm`}>{`"${review}"`}</p>

            <div className='flex items-center gap-5'>
                <div className='size-[56px] rounded-full'>
                    <Image src={avatar} alt={name} className='size-[56px] rounded-full' />
                </div>
                <div>
                    <h1 className='font-semibold text-lg leading-6'>{name}</h1>
                    <p className={`text-neutral-20 text-sm leading-6`}>{designation}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;