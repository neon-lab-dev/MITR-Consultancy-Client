"use client";
import Image from "next/image";
import { ICONS } from "@/assets";
import { useCart } from "@/providers/CartProvider/CartProvider";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Button2 from "@/Components/Reusable/Button/Button2";
import LoadingSpinner from "@/Components/LoadingSpinner/LoadingSpinner";

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

const DetailsCardSm: React.FC<TDetailsCardProps> = ({ id, image, lessons, rating, name, price, totalEnrolled, duration }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoading2, setIsLoading2] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    console.log(isAdded);
    const [isRemoved, setIsRemoved] = useState(false);
    const { cartData: cartInfo, addCourseToCart, removeCourseFromCart } = useCart();
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
            toast.success("Programme added to cart!");
            // router.push("/cart")
            setIsLoading(false);
            setIsAdded(true);
        }, 1000);
    };

    const handleAddToCartAndNavigate = () => {
        setIsLoading2(true);
        setIsAdded(false);
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
            router.push("/cart");
            return;
        }

        addCourseToCart(cartData);
        router.push("/cart");
        setIsLoading2(false);
        setIsAdded(true);
    };

    const handleRemoveCourseFromCart = () => {
        setIsLoading(true);
        setTimeout(() => {
            removeCourseFromCart(id);
            setIsRemoved(true);
            setIsLoading(false);
        }, 1000);
    };
    return (
        <div className="bg-white px-4 py-7 w-full h-[508px] md:h-[345px] mt-20 flex flex-col xl:hidden gap-[22px] shadow-course-details">
            <h1 className="text-neutral-45 text-xl md:text-[36px] font-bold leading-normal">
                ₹{price}
            </h1>
            <div className="flex flex-col md:flex-row gap-4">
                <Button2
                    handleClick={isRemoved || !isCourseAlreadyInCart ? handleAddCourseToCart : handleRemoveCourseFromCart}
                    variant="primary"
                    title=""
                    classNames="w-full font-normal"
                >
                    {isLoading ? (
                        <LoadingSpinner fontSize="text-[15px]" />
                    ) : isRemoved || !isCourseAlreadyInCart ? (
                        "Add to Cart"
                    ) : (
                        "Remove"
                    )}
                </Button2>
                <button onClick={handleAddToCartAndNavigate} className="border px-6 py-3 font-Inter text-lg font-medium rounded border-primary-20 text-primary-20 w-full">
                    {
                        isLoading2 ? "Loading..." : "Buy Now"
                    }
                </button>
            </div>
            <div className="bg-neutral-65 w-full h-[1px]"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
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

export default DetailsCardSm;