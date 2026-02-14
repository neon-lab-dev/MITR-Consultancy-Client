/* eslint-disable @typescript-eslint/no-explicit-any */
import ProgramCompletion from "@/Components/TrainingProgrammes/ProgramCompletion/ProgramCompletion";
import ProgramStructure from "@/Components/TrainingProgrammes/ProgramStructure/ProgramStructure";
import TrainingCategories from "@/Components/TrainingProgrammes/TrainingCategories/TrainingCategories";
import TrainingDomains from "@/Components/TrainingProgrammes/TrainingDomains/TrainingDomains";
import TrainingProgrammesHero from "@/Components/TrainingProgrammes/TrainingProgrammesHero/TrainingProgrammesHero";
import WhoItsFor from "@/Components/TrainingProgrammes/WhoItsFor/WhoItsFor";
import WhyMitraTraining from "@/Components/TrainingProgrammes/WhyMitraTraining/WhyMitraTraining";
import CTA from './../../../Components/Shared/CTA/CTA';
import FAQ from '@/Components/Shared/FAQ/FAQ';

const TrainingProgrammes = () => {
    const faqsData: any[] = [
    {
      question:
        "What are the common types of cyber threats that businesses face?",
      answer:
        "Businesses face threats such as phishing attacks, ransomware, malware, insider threats, and DDoS attacks. At MITRA Consultancy, we help identify and mitigate these risks with proactive strategies.",
    },
    {
      question: "Do you provide end-to-end cybersecurity solutions?",
      answer:
        "Yes, we offer comprehensive cybersecurity services—from risk assessment and strategy planning to implementation, monitoring, and incident response—to ensure complete protection.",
    },
    {
      question: "Which industries are most at risk of cyberattacks?",
      answer:
        "Industries like healthcare, finance, e-commerce, and education are top targets. We tailor our security strategies to meet the specific needs and regulatory requirements of each sector.",
    },
    {
      question: "How long does a typical cybersecurity assessment take?",
      answer:
        "The duration depends on your infrastructure size and complexity. A basic audit may take a few days, while in-depth assessments for large organizations can span several weeks.",
    },
    {
      question:
        "Do you offer vulnerability assessments and penetration testing?",
      answer:
        "Absolutely. We conduct both vulnerability scans and advanced penetration testing to identify weak points before attackers can exploit them.",
    },
    {
      question: "Can you work with our existing IT or security team?",
      answer:
        "Yes, we frequently collaborate with internal teams to enhance their security posture through strategic consulting, audits, and tool integration.",
    },
    {
      question: "What cybersecurity frameworks and standards do you follow?",
      answer:
        "We follow industry-standard frameworks like NIST, ISO 27001, and CIS controls to ensure robust, compliant, and scalable security implementations.",
    },
    {
      question: "Do you provide post-incident response support?",
      answer:
        "Yes, our team provides 24/7 incident response support, including threat containment, forensic analysis, and system recovery, ensuring business continuity.",
    },
  ];
    return (
        <div>
           <TrainingProgrammesHero />
      <TrainingDomains />
      <TrainingCategories />
      <WhyMitraTraining />
      <ProgramStructure />
      <WhoItsFor />
      <ProgramCompletion />
      <CTA/>
      <FAQ faqsData={faqsData} />
        </div>
    );
};

export default TrainingProgrammes;