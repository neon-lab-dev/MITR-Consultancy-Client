"use client"
import BillingDetails from "@/Components/Checkout/BillingDetails/BillingDetails";
import BillingInfoForm from "@/Components/Checkout/BillingInfoForm/BillingInfoForm";
import OrderDetails from "@/Components/Checkout/OrderDetails/OrderDetails";
import Container from "@/Components/Shared/Container/Container";
import { useCart } from "@/providers/CartProvider/CartProvider";

const Checkout = () => {
    const { cartData } = useCart();
    return (
        <Container>
            <div className="font-Inter mt-36">
                <h1 className="text-neutral-45 text-xl md:text-[36px] font-bold leading-normal">
                Checkout
                </h1>
                
                <div className="flex gap-6 mt-8">              
                    <BillingInfoForm/>
                    <div className="xl:flex flex-col gap-[30px] w-full xl:w-[35%] mt-[60px] hidden">
                        <OrderDetails cartData={cartData}/>
                        <BillingDetails cartData={cartData} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Checkout;