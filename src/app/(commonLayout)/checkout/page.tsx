import BillingInfoForm from "@/Components/Checkout/BillingInfoForm/BillingInfoForm";
import Container from "@/Components/Shared/Container/Container";

const Checkout = () => {
    return (
        <Container>
            <div className="font-Inter mt-36">
                <h1 className="text-neutral-45 text-xl md:text-[36px] font-bold leading-normal">
                Checkout
                </h1>
                

                <div className="flex gap-6 mt-8">
                    <BillingInfoForm/>
                </div>
            </div>
        </Container>
    );
};

export default Checkout;