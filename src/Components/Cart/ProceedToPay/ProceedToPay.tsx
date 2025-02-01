import Button from "@/Components/Reusable/Button/Button";

const ProceedToPay = ({cartTotal}) => {
    const totalPrice = cartTotal && cartTotal?.reduce((acc, currVal) => acc + currVal.price, 0);
    // const handleCheckout = () => {
    //     try{
    //         const options = {
    //             key: keyData?.data?.key, // Razorpay key_id
    //             amount: response?.data?.order?.amount,
    //             currency: 'INR',
    //             name: 'Spaceframe',
    //             description: 'Test Transaction',
    //             image: "https://i.ibb.co.com/SmbFbDC/footer-Logo.png",
    //             order_id: response?.data?.order?.id, // the order id
    //             callback_url: 'https://interior-design-backend-nine.vercel.app/api/v1/paymentverification', // success URL
    //             prefill: {
    //               name: userData?.user?.full_name,
    //               email: userData?.user?.email,
    //               contact: userData?.user?.phoneNo,
    //             },
    //             theme: {
    //               color: '#7E77D6'
    //             },
    //           };
    //           const rzp = new window.Razorpay(options);
    //           rzp.open();
    //     } catch(error){
    //         console.log(error);
    //     }
    // }
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
                <p>₹{totalPrice}</p>
            </div>
            <div className="flex items-center justify-between text-neutral-105 text-xl font-semibold leading-8">
                <p>Total</p>
                <p>₹{totalPrice}</p>
            </div>
            <Button variant="primary" title="Proceed To Pay" classNames="" />
        </div>
    );
};

export default ProceedToPay;