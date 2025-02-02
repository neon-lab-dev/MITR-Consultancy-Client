import PrivacyPolicyHero from "@/Components/PrivacyPolicy/PrivacyPolicyHero/PrivacyPolicyHero";
import Container from "@/Components/Shared/Container/Container";

const PrivacyPolicy = () => {
    const privacyPolicyContent = [
        {
            title: "1. Information We Collect",
            description: "",
            poiniters: [
                "Personal Information: Name, email address, phone number, payment details (processed via Razorpay), and other details required for service provision.",
                "Non-Personal Information: IP address, browser type, and website usage data."
            ]
        },
        {
            title: "2. How We Use Your Information",
            description: "",
            poiniters: [
                "To provide website and app development services.",
                "To enroll students in internship programs.",
                "To process payments and manage transactions.",
                "To improve website functionality and customer experience."
            ]
        },
        {
            title: "3. Data Protection",
            description: "We use appropriate security measures to protect your data. However, no method of transmission over the internet is 100% secure.",
        },
        {
            title: "4. Third-Party Services",
            description: "We use Razorpay for payment processing. Your payment details are securely handled by Razorpay and not stored by us.",
        },
        {
            title: "5. Your Rights",
            description: "You may request access, correction, or deletion of your personal data by contacting us.",
        },
        {
            title: "6. Changes to this Policy",
            description: "We may update this policy periodically. Changes will be posted on this page.",
        },
    ];

    return (
        <div>
            <PrivacyPolicyHero />
            <Container>
                <div className="font-Inter w-full max-w-[1100px] mx-auto flex flex-col gap-8 mt-14">
                    {
                        privacyPolicyContent?.map(content =>
                            <div key={content?.title}>
                                <h1 className="font-bold text-3xl text-neutral-10">
                                    {content?.title}
                                </h1>
                                {
                                    content?.description &&
                                    <p className="font-normal text-lg mt-2">{content?.description}</p>
                                }

                                {
                                    content?.poiniters ?
                                        <div className="flex flex-col gap-3 mt-3">
                                            {
                                                content?.poiniters?.map((pointer, index) =>
                                                    <div key={index} className="flex items-center gap-3">
                                                        <div className="size-2 rounded-full bg-neutral-10"></div>
                                                        <p className="font-normal text-lg text-neutral-10">{pointer}</p>
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

export default PrivacyPolicy;