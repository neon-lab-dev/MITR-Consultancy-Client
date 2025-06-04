import ComplianceAssessment from "@/Components/CybersecurityCompliance/ComplianceAssessment/ComplianceAssessment";
import ComplianceSolutions from "@/Components/CybersecurityCompliance/ComplianceSolutions/ComplianceSolutions";
import MitrasEdge from "@/Components/Security/MitrasEdge/MitrasEdge";
import SecurityHero from "@/Components/Security/SecurityHero/SecurityHero";
import SecurityService from "@/Components/Security/SecurityService/SecurityService";
import FAQ from "@/Components/Shared/FAQ/FAQ";

type FAQItem = {
  question: string;
  answer: string;
};
const SecurityPage = () => {
    const faqsData: FAQItem[] = [
    {
      question: "What are the common types of cyber threats that businesses face?",
      answer: "At MITRA Consultancy, we specialize in a range of digital solutions, including web application development, frontend and backend development, UI/UX design, and more. Our goal is to deliver user-friendly, high-performing, and visually stunning digital products.",
    },
    {
      question: "Do you provide end-to-end development services?",
      answer: "Yes, we offer end-to-end development services. From conceptualization and design to development, deployment, and maintenance, we ensure a seamless experience for our clients.",
    },
    {
      question: "What industries do you serve?",
      answer: "We work with clients across various industries, including e-commerce, education, healthcare, finance, and more. Our expertise allows us to adapt to the unique needs of each industry.",
    },
    {
      question: "How long does it take to develop a web application?",
      answer: "The development timeline depends on the project’s complexity and scope. Simple applications can take a few weeks, while more complex projects may take several months. We provide a detailed timeline after assessing your requirements.",
    },
    {
      question: "Do you offer UI/UX design as a standalone service?",
      answer: "Absolutely! If you’re only looking for UI/UX design services, our expert team can help create engaging and user-friendly interfaces that align with your brand.",
    },
    {
      question: "Can you work with my existing development team?",
      answer: "Yes, we can collaborate with your existing team to complement their efforts. Whether you need assistance with frontend, backend, or UI/UX, we’re here to help.",
    },
    {
      question: "What technologies do you use?",
      answer: "We work with a variety of modern technologies, including React, Angular, Node.js, Express, MongoDB, Figma, and more, to deliver cutting-edge solutions.",
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we provide ongoing maintenance and support services to ensure your application runs smoothly and stays up-to-date with the latest technologies and trends.",
    },
  ];
    return (
        <div>
            <SecurityHero/>
            <ComplianceSolutions />
            <SecurityService/>
            <ComplianceAssessment />
            <MitrasEdge/>
            <FAQ faqsData={faqsData} />
        </div>
    );
};

export default SecurityPage;