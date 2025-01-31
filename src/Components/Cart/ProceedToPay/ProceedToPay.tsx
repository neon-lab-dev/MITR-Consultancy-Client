import Button from "@/Components/Reusable/Button/Button";

const ProceedToPay = () => {
    return (
        <div className="py-8 px-4 bg-white shadow-course-details w-full lg:w-[30%] flex flex-col gap-6 font-Inter">
            <div>
            <h1 className="text-neutral-45 font-semibold leading-6">Do you have a discount code?</h1>
            <div className="flex items-center w-full mt-[10px]">
                <input type="text" placeholder="Enter Coupon Code" className="p-[14px] bg-white border-y border-l border-neutral-65" />
                <button className="px-8 py-[14px] flex justify-center items-center bg-primary-20 text-white 
                font-inter text-[16px] font-medium leading-6 border border-primary-20">
                    Apply
                </button>
            </div>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-100 pb-[13px] text-neutral-105 text-xl font-semibold leading-8">
                <p>Subtotal</p>
                <p>₹999</p>
            </div>
            <div className="flex items-center justify-between text-neutral-105 text-xl font-semibold leading-8">
                <p>Total</p>
                <p>₹999</p>
            </div>
            <Button variant="primary" title="Proceed To Pay" classNames="" />
        </div>
    );
};

export default ProceedToPay;