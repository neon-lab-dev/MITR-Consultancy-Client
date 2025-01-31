/* eslint-disable react/no-unescaped-entities */
import CartItems from "@/Components/Cart/CartItems/CartItems";
import ProceedToPay from "@/Components/Cart/ProceedToPay/ProceedToPay";
import Container from "@/Components/Shared/Container/Container";

const Cart = () => {
    return (
        <Container>
            <div className="font-Inter mt-36">
                <h1 className="text-neutral-45 text-xl md:text-[36px] font-bold leading-normal">
                    Programmes You've Added
                </h1>
                <h2 className="text-neutral-45 text-2xl font-semibold leading-9 mt-[14px]">
                    3 Items in your Cart
                </h2>

                <div className="flex gap-6">
                    <CartItems />
                    <ProceedToPay />
                </div>
            </div>
        </Container>
    );
};

export default Cart;