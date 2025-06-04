import Container from "@/Components/Shared/Container/Container";
import React from "react";
import TrustAndResultCard from "./TrustAndResultCard";

const TrustAndResults = () => {
  // featuresData.ts
  const featuresData = [
    {
      title: "All-in-One Compliance Support",
      description:
        "Mitigata offers a complete range of compliance services, from GDPR and HIPAA to PCI DSS and ISO 27001, ensuring that all your needs are met in one place. No juggling between multiple vendors—Mitigata has it all covered.",
    },
    {
      title: "Easy and Tailored Solutions",
      description:
        "We understand that every business is different. That’s why our services are customized based on the size and type of your business. Whether you’re a startup or a large enterprise, we create a compliance plan that fits perfectly.",
    },
    {
      title: "Industry Experts on Your Side",
      description:
        "Our team has in-depth knowledge of compliance standards and real-world experience. They don’t just check the boxes—they ensure your business truly understands and benefits from compliance.",
    },
    {
      title: "Save Time and Effort",
      description:
        "With automated tools and streamlined processes, we make compliance simpler and faster for you. This means less manual work and more focus on running your business.",
    },
    {
      title: "Protect Your Data and Reputation",
      description:
        "Our solutions are designed to secure your sensitive information and safeguard your brand’s reputation. Avoid data breaches and build trust with your customers.",
    },
    {
      title: "Stay Ahead of Regulations",
      description:
        "Regulations keep changing, and keeping up can be a headache. With Mitigata, you’re always a step ahead. We ensure you’re compliant today and ready for tomorrow’s rules.",
    },
    {
      title: "Affordable and Transparent Plans",
      description:
        "Compliance shouldn’t break the bank. We offer flexible pricing tailored to your business size, so you get the best value without hidden charges.",
    },
  ];

  return (
    <div className="py-[100px">
      <Container>
        <div>
          <h1
            className={`font-bold text-neutral-10 text-lg md:text-2xl xl:text-[64px] leading-6 md:leading-[78px] capitalize text-center z-10 max-w-[983px] mx-auto`}
          >
            <span className="text-secondary-20">Mitra Consultancy</span>{" "}
            Compliance: Built for Trust & Results
          </h1>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[60px]">
            {featuresData.map((item, index) => (
              <TrustAndResultCard
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </section>
        </div>
      </Container>
    </div>
  );
};

export default TrustAndResults;
