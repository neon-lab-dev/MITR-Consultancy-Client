
import Button from '@/Components/Reusable/Button/Button';
import React from 'react';

const BillingDetails = ({cartData}) => {
    const totalPrice = cartData && cartData?.reduce((acc, currVal) => acc + currVal.price, 0);
    return (
        <div className="py-8 px-[18px] bg-white rounded-2xl shadow-course-details w-full flex flex-col gap-6 font-Inter">
            <h1 className="text-neutral-45 text-2xl font-semibold leading-6">Billing Details</h1>
            <div className="flex items-center justify-between border-b border-neutral-100 pb-[13px] text-neutral-105 text-xl font-semibold leading-8">
                <p>Subtotal</p>
                <p>₹{totalPrice}</p>
            </div>
            <div className="flex items-center justify-between text-neutral-105 text-xl font-semibold leading-8">
                <p>Total</p>
                <p>₹{totalPrice}</p>
            </div>
            <Button variant="primary" title="Checkout" classNames="" />
        </div>
    );
};

export default BillingDetails;