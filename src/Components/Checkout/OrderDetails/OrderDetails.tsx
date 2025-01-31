import { IMAGES } from "@/assets";
import Image from "next/image";

const OrderDetails = () => {
    return (
        <div className="py-8 px-[18px] bg-white rounded-2xl shadow-course-details w-full flex flex-col gap-6 font-Inter">
            <h1 className="text-neutral-45 text-2xl font-semibold leading-6">Order Details</h1>
            <div className="flex items-center justify-between gap-5 border-b border-neutral-100 pb-[17px]">
                <div className="flex items-center gap-[14px]">
                    <Image src={IMAGES.backendDevelopmentImg} alt="lessons" className="rounded-lg size-[95px]" />
                    <h1 className="text-neutral-45 font-semibold leading-[25px] text-sm">Backend Development Using Node.js, MongoDB, and Express.js</h1>

                </div>
                <h2 className="text-neutral-105 text-xl font-semibold leading-8">
                    ₹999
                </h2>
            </div>
        </div>
    );
};

export default OrderDetails;