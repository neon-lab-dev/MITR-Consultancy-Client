/* eslint-disable react/no-unescaped-entities */
import Container from "../../Shared/Container/Container";

const AllAboutMitra = () => {
  return (
    <Container>
      <div className="pt-5 xl:pt-20">
        <h1 className="font-bold text-neutral-10 text-lg md:text-2xl xl:text-[36px] leading-6 md:leading-[49.68px] capitalize mt-10">
          About Us
        </h1>
        <p className={`text-neutral-20 mt-6 text-justify`}>
          At Mitra Consultancy, we combine innovation, practicality, and
          performance to empower businesses and learners in the digital world.
          We specialize in delivering end-to-end technology solutions, smart
          cybersecurity services, and affordable, hands-on tech training.
          Whether you're a student preparing for your career, a startup building
          your online presence, or a business looking to secure and scale
          operations — we provide tailored support at every stage. Our approach
          is simple: deliver real value through development, up skilling, and
          robust digital protection.
        </p>
      </div>
    </Container>
  );
};

export default AllAboutMitra;
