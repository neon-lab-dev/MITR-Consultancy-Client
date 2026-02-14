import Container from "@/Components/Shared/Container/Container";
import Button from "../../Reusable/Button/Button";

const whyAttendData = [
  "Understand what UX & digital product design actually involve before committing to it",
  "Get a realistic view of career opportunities, expectations, and required skills",
  "Identify whether this path fits your background, experience, or current situation",
  "Learn how the industry thinks — not just what online content shows",
  "Leave with clarity on your next practical step",
];

const WhyAttend = () => {
  return (
    <div className="bg-neutral-190 font-satoshi py-14">
      <Container>
        <div className="flex flex-col items-center">
          <h2 className="font-black text-neutral-185 text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize text-center">
            Why Attend This <span className="text-primary-110">Webinar?</span>
          </h2>

          {/* Top 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mt-12">
            {whyAttendData.slice(0, 3).map((item, index) => (
              <p
                key={index}
                className="text-neutral-185 font-general-sans max-w-82"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Bottom 2 - Centered */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-12">
            {whyAttendData.slice(3).map((item, index) => (
              <p
                key={index}
                className="text-neutral-185 font-general-sans max-w-82"
              >
                {item}
              </p>
            ))}
          </div>

          <Button variant="accent" title="Register for Webinar" />
        </div>
      </Container>
    </div>
  );
};

export default WhyAttend;
