import PrivacyPolicyHero from "@/Components/PrivacyPolicy/PrivacyPolicyHero/PrivacyPolicyHero";
import Container from "@/Components/Shared/Container/Container";


const TermsAndConditions = () => {
    const termsAndConditionsContent = [
        {
            title: "1. Services Provided",
            description: "",
            pointers: [
                "We offer website and app development services.",
                "We provide training programmes for students in their 5th to 7th semester."
            ]
        },
        {
            title: "2. Payment &amp; Refunds",
            description: "",
            pointers: [
                "training programmes are priced at ₹990, payable online via Razorpay.",
                "No refunds will be issued for any payments made.",
            ]
        },
        {
            title: "3. User Responsibilities",
            description: "",
            pointers: [
                "You must provide accurate information when registering for our services.",
                "You agree not to misuse our website or services in any way."
            ]
        },
        {
            title: "4. Limitation of Liability",
            description: "We use Razorpay for payment processing. Your payment details are securely handled by Razorpay and not stored by us.",
        },
        {
            title: "5. Your Rights",
            description: "We are not responsible for any indirect damages arising from the use of our services.",
        },
        {
            title: "5. Termination",
            description: "We reserve the right to suspend or terminate access to our services if users violate these terms.",
        },
        {
            title: "6. Governing Law",
            description: "These terms are governed by the laws of India.",
        },
    ];

    return (
        <div>
            <PrivacyPolicyHero title="Terms and conditions" />
            <Container>
                <div className="font-Inter w-full max-w-[1100px] mx-auto flex flex-col gap-8 py-14 text-white">
                    <p className="font-normal text-lg mt-2">Welcome to MITRA Consultancy. By using our website and services, you agree to comply with the following terms.</p>
                    {
                        termsAndConditionsContent?.map(content =>
                            <div key={content?.title}>
                                <h1 className="font-bold text-3xl">
                                    {content?.title}
                                </h1>
                                {
                                    content?.description &&
                                    <p className="font-normal text-lg mt-2 text-white/80">{content?.description}</p>
                                }

                                {
                                    content?.pointers ?
                                        <div className="flex flex-col gap-3 mt-3">
                                            {
                                                content?.pointers?.map((pointer, index) =>
                                                    <div key={index} className="flex items-center gap-3">
                                                        <div className="size-2 rounded-full bg-neutral-10 bg-white/80"></div>
                                                        <p className="font-normal text-lg text-white/80">{pointer}</p>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        :
                                        ""
                                }
                            </div>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default TermsAndConditions;