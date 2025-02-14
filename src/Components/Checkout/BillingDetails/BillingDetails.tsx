/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { TProceedToPayProps } from "@/Components/Cart/ProceedToPay/ProceedToPay";
import Button from "@/Components/Reusable/Button/Button";
import { useEffect } from "react";
import Script from "next/script";
import axios from "axios";
import { useSelector } from "react-redux";
import { useCurrentUser } from "@/redux/Features/Auth/authSlice";
import { TLoggedInUser } from "@/Components/Shared/Navbar/Navbar";

const BillingDetails = ({ cartData }: { cartData: TProceedToPayProps[] }) => {
    const user = useSelector(useCurrentUser) as TLoggedInUser;

    const totalPrice = cartData && cartData?.reduce((acc, currVal) => acc + currVal.price, 0);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleCheckout = async () => {
        try {
            const keyData = await axios.get('https://mitr-backend.vercel.app/api/v1/getkey');

            const response = await axios.post(
                'https://mitr-backend.vercel.app/api/v1/checkout',
                { amount: Number(totalPrice) },
                { withCredentials: true }
            );

            const options = {
                key: keyData?.data?.key, // Razorpay key_id
                amount: response?.data?.order?.amount,
                currency: 'INR',
                name: 'MITR Consultancy',
                description: 'Test Transaction',
                image: "https://i.ibb.co.com/fzB3sKkh/mitr-consultancy.png",
                order_id: response?.data?.order?.id, // the order id
                callback_url: 'https://mitr-backend.vercel.app/api/v1/paymentverification', // success URL
                prefill: {
                    id : user?._id,
                    name: user?.name,
                    email: user?.email,
                },
                theme: {
                    color: '#0099FF'
                },
            };
            const rzp = new (window as any).Razorpay(options);
            rzp.open();

            localStorage.setItem("orderedCourses", JSON.stringify(cartData));

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
            <div className="py-8 px-[18px] bg-white rounded-2xl shadow-course-details w-full flex flex-col gap-6 font-Inter">
                <h1 className="text-neutral-45 text-base md:text-2xl font-semibold leading-6">
                    Billing Details
                </h1>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-[13px] text-neutral-105 text-base md:text-xl font-semibold leading-8">
                    <p>Subtotal</p>
                    <p>₹{totalPrice}</p>
                </div>
                <div className="flex items-center justify-between text-neutral-105 text-base md:text-xl font-semibold leading-8">
                    <p>Total</p>
                    <p>₹{totalPrice}</p>
                </div>
                <Button variant="primary" title="Checkout" classNames="" handleClick={handleCheckout} />
            </div>
        </>
    );
};

export default BillingDetails;
