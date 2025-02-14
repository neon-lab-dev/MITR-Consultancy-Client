/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import axios from "axios";
import { useSelector } from "react-redux";
import { useCurrentUser } from "@/redux/Features/Auth/authSlice";
import { TLoggedInUser } from "@/Components/Shared/Navbar/Navbar";
import Button2 from "@/Components/Reusable/Button/Button2";
import LoadingSpinner from "@/Components/LoadingSpinner/LoadingSpinner";
import { useGetMeQuery } from "@/redux/Features/User/userApi";
import { toast } from "sonner";
import { useCart } from "@/providers/CartProvider/CartProvider";

const BillingDetails = () => {
    const { cartData } = useCart();
    const { data: myProfile } = useGetMeQuery({});
    console.log(myProfile);
    const [loading, setLoading] = useState<boolean>(false);
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
            setLoading(true);
        const purchasedCourseIds = myProfile?.user?.purchasedCourses || [];

        // Filter out purchased courses from cartData
        const newCartData = cartData?.filter((course: any) => !purchasedCourseIds.includes(course._id));

        if (newCartData.length === 0) {
            toast.error("You have already purchased all selected courses!");
            setLoading(false);
            return;
        }
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
                    id: user?._id,
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
        } finally {
            setLoading(false);
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
                <Button2 variant="primary" title="" handleClick={handleCheckout} classNames="">
                    {
                        loading ?
                            <LoadingSpinner />
                            :
                            "Checkout"
                    }
                </Button2>
            </div>
        </>
    );
};

export default BillingDetails;
