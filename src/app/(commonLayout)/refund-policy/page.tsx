import PrivacyPolicyHero from "@/Components/PrivacyPolicy/PrivacyPolicyHero/PrivacyPolicyHero";
import Container from "@/Components/Shared/Container/Container";

const RefundPolicy = () => {
    return (
        <div>
            <PrivacyPolicyHero title="Refund Policy" />
            <Container>
                <div className="font-Inter w-full max-w-[1100px] mx-auto flex flex-col gap-8 mt-10">
                    <p className="font-normal text-lg">
                        At MITR Consultancy, we follow a <strong>No Refund Policy</strong> for our training programmes. Once payment is made, no cancellations or refunds will be processed. We encourage users to carefully review the program details before making a payment.
                    </p>
                    <p className="font-normal text-lg">For any queries, please contact us at <a href="mailto:mitrconsultancy0101@gmail.com" className="font-semibold text-primary-20">mitrconsultancy0101@gmail.com</a>.</p>
                </div>
            </Container>
        </div>
    );
};

export default RefundPolicy;