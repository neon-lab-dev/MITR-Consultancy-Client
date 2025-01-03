import { ICONS } from "@/assets";
import Heading from "../Reusable/Heading/Heading";
import Container from "../Shared/Container/Container";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    const testimonials = [
        {
            _id: "1",
            rating: 5,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            avatar: ICONS.avatar,
            name: "Rishi Raj",
            designation: "CEO, Neon Shark"
        },
        {
            _id: "2",
            rating: 3,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            avatar: ICONS.avatar,
            name: "Rishi Raj",
            designation: "CEO, Neon Shark"
        },
        {
            _id: "3",
            rating: 4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
            avatar: ICONS.avatar,
            name: "Rishi Raj",
            designation: "CEO, Neon Shark"
        },
    ];
    return (
        <div className="bg-white py-[60px] md:py-20 xl:py-[98px]">
            <Container>
                <div>
                    <Heading
                        align='left'
                        subHeading='Testimonials'
                        heading='Customer testimonials'
                        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
                        {
                            testimonials.map((testimonial) => (
                                <TestimonialCard key={testimonial?._id} {...testimonial} />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;