import Button from "@/Components/Reusable/Button/Button";
import Link from "next/link";

export type TProceedToPayProps = {
    _id: string;
    name: string;
    image: string;
    price: number;
    duration: string;
    lessons: string | number;
    rating: string | number;
}
const ProceedToPay = ({ cartTotal }: { cartTotal: TProceedToPayProps[] }) => {
    const totalPrice = cartTotal && cartTotal?.reduce((acc, currVal) => acc + currVal.price, 0);
    const GST = totalPrice * 18 / 100;

    return (
        <div className="py-8 px-4 bg-white shadow-course-details w-full lg:w-[30%] flex flex-col gap-6 font-Inter">
            <div className="w-full" >
                <h1 className="text-neutral-45 font-semibold leading-6">Do you have a discount code?</h1>
                <div className="flex items-center w-full mt-[10px]">
                    <input type="text" placeholder="Enter Coupon Code" className="p-[14px] bg-white border-y border-l border-neutral-65 w-full" />
                    <button className="px-8 py-[14px] flex justify-center items-center bg-primary-20 text-white 
                font-inter text-[16px] font-medium leading-6 border border-primary-20">
                        Apply
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-100 pb-[13px] text-neutral-105 text-xl font-semibold leading-8">
                <p>Subtotal</p>
                <p>₹{totalPrice}</p>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-100 pb-[13px] text-neutral-105 text-xl font-semibold leading-8">
                <p>18% GST</p>
                <p>₹{GST.toFixed(0)}</p>
            </div>
            <div className="flex items-center justify-between text-neutral-105 text-xl font-semibold leading-8">
                <p>Total</p>
                <p>₹{(totalPrice + GST).toFixed(0)}</p>
            </div>
            <Link href={"/checkout"} className="w-full"><Button variant="primary" title="Proceed To Pay" classNames="w-full" /></Link>
        </div>
    );
};

export default ProceedToPay;