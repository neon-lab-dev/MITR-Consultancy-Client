import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";

const CartItems = () => {
    return (
        <div className="flex flex-col gap-8 w-full lg:w-[70%]">
            <div className="flex items-center justify-between bg-white border-b border-neutral-100 pb-[22px]">
                <div className="flex items-center gap-4">
                    <Image src={IMAGES.backendDevelopmentImg} alt="lessons" className="rounded-lg w-[160px] h-[116px]" />
                    <div className="flex flex-col gap-2">
                        <h1 className="text-neutral-45 font-semibold leading-[25px] w-full max-w-[377px]">Backend Development Using Node.js, MongoDB, and Express.js</h1>
                        <div className="flex items-center">
                            <p className="text-neutral-25 text-[13px] font-medium">5</p>
                            <Image src={ICONS.rating} alt="rating" className="" />
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Image src={ICONS.lessons} alt="lessons" className="size-5" />
                                <p className="text-neutral-25 text-[13px] leading-5">24 Lessons</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Image src={ICONS.duration} alt="lessons" className="size-5" />
                                <p className="text-neutral-25 text-[13px] leading-5">3 months</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="text-neutral-45 text-2xl font-semibold leading-9 mt-[14px]">
                    ₹999
                </h2>
                <h1 className="text-rose-500 font-semibold leading-[25px]">Remove</h1>
            </div>
        </div>
    );
};

export default CartItems;