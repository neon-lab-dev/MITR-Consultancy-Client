import { TProceedToPayProps } from "@/Components/Cart/ProceedToPay/ProceedToPay";
import Image from "next/image";

const OrderDetails = ({ cartData } : {cartData:TProceedToPayProps[]}) => {
    return (
        <div className="py-8 px-[18px] bg-white rounded-2xl shadow-course-details w-full flex flex-col gap-6 font-Inter">
            <h1 className="text-neutral-45 text-base md:text-2xl font-semibold leading-6">Order Details</h1>
            <div className="flex flex-col gap-5">
                {
                    cartData?.map((data) =>
                        <div key={data?._id} className="flex items-center justify-between gap-5 border-b border-neutral-100 pb-[17px]">
                            <div className="flex items-center gap-[14px]">
                                <Image src={data?.image} alt="lessons" className="rounded-lg size-[95px]" width={95} height={95} />
                                <h1 className="text-neutral-45 text-xs md:text-base font-semibold leading-[25px] text-sm">{data?.name}</h1>

                            </div>
                            <h2 className="text-neutral-105 text-base md:text-xl font-semibold leading-8">
                                ₹{data?.price}
                            </h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OrderDetails;