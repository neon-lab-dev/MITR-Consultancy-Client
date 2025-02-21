"use client"
import BillingDetails from "@/Components/Checkout/BillingDetails/BillingDetails";
import BillingInfoForm from "@/Components/Checkout/BillingInfoForm/BillingInfoForm";
import OrderDetails from "@/Components/Checkout/OrderDetails/OrderDetails";
import Container from "@/Components/Shared/Container/Container";
import { TLoggedInUser } from "@/Components/Shared/Navbar/Navbar";
import { useCart } from "@/providers/CartProvider/CartProvider";
import { useCurrentUser } from "@/redux/Features/Auth/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
    const router = useRouter();
    const user = useSelector(useCurrentUser) as TLoggedInUser;
    const { cartData } = useCart();

    // If user is nnot logged in then redirect to login page
    useEffect(() => {
        if (!user) {
            router.push("/auth/get-started");
        }
    }, [router, user])
    
    return (
        <Container>
            <div className="font-Inter mt-36">
                <h1 className="text-neutral-45 text-xl md:text-[36px] font-bold leading-normal">
                Checkout
                </h1>
                
                <div className="flex gap-6 mt-8">              
                    <BillingInfoForm/>
                    <div className="lg:flex flex-col gap-[30px] w-full lg:w-[35%] mt-[60px] hidden">
                        <OrderDetails cartData={cartData}/>
                        <BillingDetails/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Checkout;