/* eslint-disable react/no-unescaped-entities */
import Container from "@/Components/Shared/Container/Container";
import AboutUsDetailsSection from "../AboutUsDetailsSection/AboutUsDetailsSection";

const Services = () => {
  const services = [
    {
      title: "Mobile App development",
      description:
        "Android, iOS, and cross-platform apps that function flawlessly and engage users.",
    },
    {
      title: "Backed Development",
      description:
        "Scalable, secure server-side systems built for reliability and efficiency.",
    },
    {
      title: "Frontend Development",
      description:
        "Modern, intuitive interfaces crafted for speed, engagement, and accessibility.",
    },
    {
      title: "Full Stack Web Solutions",
      description:
        "Integrated development from frontend to backend — one solution, fully connected.",
    },
    {
      title: "Web Development",
      description:
        "Custom-designed, responsive websites aligned with user experience and business goals.",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Intelligent security software that safeguards your business from evolving threats — built in-house for complete control and trust.",
    },
  ];

  const serviceFeatures = services.map((service) => (
    <>
      <strong>{service.title} :</strong> {service.description}
    </>
  ));

  const cyberSecurityKeyFeatures = [
    "Real-time threat detection and alert mechanisms",
    "User access control with secure login environments",
    "Encrypted data handling and secure storage",
    "Interactive dashboards for easy monitoring",
    "Hassle-free integration with your existing systems",
  ];

  const trainingFeatures = [
    "Hands-on live project experience",
    "Regular practice sessions and one-on-one guidance",
    "Mentorship from seasoned industry professionals",
    "Certification upon successful completion",
    <>
      <strong>Courses Offered:</strong> Frontend Development, Backend
      Development, Full Stack Web Development, UI/UX Design
    </>,
  ];

  const whyChooseFeatures = [
    "End-to-end tech solutions built for growth and performance",
    "Skill-driven training focused on live project exposure",
    "Enterprise-grade cybersecurity built in-house for real protection",
    "Transparent pricing with value-packed offerings",
    "A trusted partner for students, startups, and business owners alike",
  ];

  return (
    <Container>
      <div className="my-10">
        <AboutUsDetailsSection
          title="Our Services"
          subTitle="Key Features"
          description="We provide a complete range of digital services, combining performance-driven development, industry-relevant training, and enterprise-grade cybersecurity. Our core offerings include:"
          features={serviceFeatures}
          footerText="We don’t treat cybersecurity as an afterthought. It’s a pillar of our offering, ensuring that everything we build stays protected in the long term."
        />

        {/* Cyber security solutions */}
        <AboutUsDetailsSection
          title="Cybersecurity Solutions"
          subTitle="Key Features"
          description="In today’s digital environment, security is not optional — it's essential. At MITRA Consultancy, we offer our own in-house cybersecurity platform, designed to give businesses of all sizes the protection they need without unnecessary complexity. Whether you're a startup managing customer data or an enterprise scaling operations, our security system fits seamlessly into your workflow."
          features={cyberSecurityKeyFeatures}
          footerText="We’re committed to building not just functional tech, but protected environments where your data, users, and operations remain safe — always."
        />

        {/* training programmes */}
        <AboutUsDetailsSection
          title="Training Programs"
          subTitle="Each program includes"
          description="We believe today’s students need more than academic theory — they need real skills for real careers. That’s why MITRA Consultancy offers structured, intensive training programs in core tech domains. These 3-month programs are specifically designed for students in their 5th to 7th semesters, priced at only ₹990 per course."
          features={trainingFeatures}
          footerText="Our aim is to help students step confidently into the professional world — with skills that are practical, competitive, and aligned with industry needs."
        />

        {/* Why choose us section */}
        <AboutUsDetailsSection
          title="Why Choose MITRA Consultancy"
          features={whyChooseFeatures}
        />

        <h1 className="font-bold text-neutral-10 text-lg md:text-2xl xl:text-[36px] leading-6 md:leading-[49.68px] capitalize mt-10">
          Get Started Today
        </h1>
        <p className="text-neutral-20 mt-3 text-justify">
          Whether you're looking to build a secure digital product, gain
          job-ready skills, or protect your business from growing cyber threats,
          MITRA Consultancy is here to support your vision. We develop. We
          train. We secure. And we do it with precision.
        </p>
        <p className="text-neutral-20 mt-5 text-justify font-bold">
          Let’s build something meaningful — and secure — together.
        </p>
      </div>
    </Container>
  );
};

export default Services;
