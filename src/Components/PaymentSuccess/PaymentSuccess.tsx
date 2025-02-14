/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "@/assets";

const PaymentSuccess = () => {
    const searchParams = useSearchParams();
    const referenceName = searchParams.get("reference");

    const [orderedCourses, setOrderedCourses] = useState([]);
    // const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const storedCourses = localStorage.getItem("orderedCourses");
        const courses = storedCourses ? JSON.parse(storedCourses) : [];
        setOrderedCourses(courses);
    }, []);

    useEffect(() => {
        const handlePushOrderedItems = async () => {
            try {
                const courseIds = orderedCourses?.map((data:any) => data?._id);
                const orderInfo = {
                    courseId: courseIds,
                    razorpay_payment_id: referenceName,
                };
                await axios.post(
                    "https://mitr-backend.vercel.app/api/v1/createorder",
                    orderInfo,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                setSuccess(true);
                localStorage.removeItem("orderedCourses");
            } catch (error) {
                console.error("Error placing order:", error);
            } finally {
                setLoading(false);
            }
        };

        if (orderedCourses.length > 0) {
            handlePushOrderedItems();
        }
    }, [orderedCourses, referenceName]);

    if (loading) {
        return (
            <div className="flex flex-col items-center text-center mt-32">
                <p className="text-neutral-10 text-lg">Processing your payment...</p>
            </div>

        );
    }

    return success ? (
        <div className="flex flex-col items-center text-center mt-36">
            <Image
                src={ICONS.paymentSuccess}
                alt="Payment Success"
                width={150}
                height={150}
                className="mb-4"
            />
            <h1 className="text-green-600 font-bold text-2xl lg:text-3xl">
                Payment Successful!!
            </h1>
            <p className="text-neutral-10 mt-4 text-lg max-w-[500px] mx-auto text-center">
                Welcome to the professional world! 🎉 Embrace professionalism and take your journey to the next level!
            </p>
            <Link
                href="/my-profile"
                className="bg-primary-10 text-white text-center px-5 py-2 rounded-md mt-8"
            >
                Explore Now
            </Link>
        </div>
    ) : (
        <div className="flex flex-col items-center text-center mt-32">
            <p className="text-red-500 text-lg">Failed to process your order. Please try again.</p>
        </div>

    );
};

export default PaymentSuccess;
