"use client"
import CartItem from "@/Components/Cart/CartItem/CartItem";
/* eslint-disable react/no-unescaped-entities */
import ProceedToPay from "@/Components/Cart/ProceedToPay/ProceedToPay";
import InterestedTrainings from "@/Components/ProgrammeDetails/InterestedTrainings/InterestedTrainings";
import Container from "@/Components/Shared/Container/Container";
import { useCart } from "@/providers/CartProvider/CartProvider";

const Cart = () => {
     const { cartData } = useCart();
     console.log(cartData);
    return (
        <Container>
            <div className="font-Inter mt-36">
                <h1 className="text-neutral-45 text-xl md:text-[36px] font-bold leading-normal">
                    Programmes You've Added
                </h1>
                <h2 className="text-neutral-45 text-2xl font-semibold leading-9 mt-[14px]">
                    3 Items in your Cart
                </h2>

                <div className="flex gap-6 mt-8">
                    <div className="flex flex-col gap-8 w-full lg:w-[70%]">

                    {
                        cartData?.map(data => 
                            <CartItem key={data?._id} {...data} />
                        )
                    }
                    </div>
                    <ProceedToPay />
                </div>
                <InterestedTrainings/>
            </div>
        </Container>
    );
};

export default Cart;