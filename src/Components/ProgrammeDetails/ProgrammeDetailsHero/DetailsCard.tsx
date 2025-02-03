"use client"
import Image from "next/image";
import { ICONS } from "@/assets";
import { useCart } from "@/providers/CartProvider/CartProvider";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Button2 from "@/Components/Reusable/Button/Button2";
import LoadingSpinner from "@/Components/LoadingSpinner/LoadingSpinner";
import SuccessWithTick from "@/Components/SuccessWithTick/SuccessWithTick";

type TDetailsCardProps = {
    id: string;
    image: string;
    lessons: string;
    rating: string;
    name: string;
    price: number;
    totalEnrolled: number;
    duration: string;
}

const DetailsCard: React.FC<TDetailsCardProps> = ({ id, image, lessons, rating, name, price, totalEnrolled, duration }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const { cartData: cartInfo, addCourseToCart } = useCart();
    const isCourseAlreadyInCart = cartInfo?.some((item) => item?._id === id);

    const details = [
        {
            icon: ICONS.duration2,
            title: "Duration",
            value: duration,
        },
        {
            icon: ICONS.certificate,
            title: "Certificate",
            value: "Digital Certificate",
        },
        {
            icon: ICONS.students,
            title: "Students",
            value: totalEnrolled,
        },
        {
            icon: ICONS.skillLevel,
            title: "Skill Level",
            value: "Beginner to Advance",
        },
    ];

    const handleAddCourseToCart = () => {
        setIsLoading(true);
        setIsAdded(false);
        setTimeout(() => {
            const cartData = {
                _id: id,
                name: name,
                image: image,
                rating: rating,
                lessons: lessons,
                duration: duration,
                price: price,
            };

            if (isCourseAlreadyInCart) {
                toast.error("Course is already in the cart!");
                setIsLoading(false);
                setIsAdded(false);
                return;
            }

            addCourseToCart(cartData);
            router.push("/cart")
            setIsLoading(false);
            setIsAdded(true);
        }, 1000);
    };

    return (
        <div className="bg-white px-4 py-7 w-full max-w-[395px] h-[508px] mt-20 flex flex-col gap-[22px] shadow-course-details">
            <h1 className="text-neutral-45 text-xl md:text-[36px] font-bold leading-normal">
                ₹{price}
            </h1>
            <div className="flex flex-col gap-4">
                <Button2 handleClick={handleAddCourseToCart} variant="primary" title="Add to Cart" classNames="w-full font-normal">
                    {
                        isLoading ? <LoadingSpinner fontSize="text-[15px]" /> : isAdded || isCourseAlreadyInCart ? <SuccessWithTick message="Added" /> : "Add to Cart"}
                </Button2>
                <button className="border px-6 py-3 font-Inter text-lg font-medium rounded border-primary-20 text-primary-20 w-full">Buy Now</button>
            </div>
            <div className="bg-neutral-65 w-full h-[1px]"></div>

            <div className="flex flex-col gap-5">
                {
                    details?.map(item =>
                        <div key={item?.title} className="flex items-center justify-between">
                            <div className="flex items-center gap-[10px]">
                                <Image src={item?.icon} alt="" className="size-9" />
                                <p className="text-neutral-85 font-medium">{item?.title}</p>
                            </div>
                            <p className="text-neutral-85 font-medium">{item?.value}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default DetailsCard;