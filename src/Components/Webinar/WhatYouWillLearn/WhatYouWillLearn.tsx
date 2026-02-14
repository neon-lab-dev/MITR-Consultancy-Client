import Container from "../../shared/Container/Container";

const WhatYouWillLearn = () => {
  const learnItems = [
    {
      number: "01",
      text: "Understanding core Digital Product Design",
    },
    {
      number: "02",
      text: "How UX drives business in real-world products",
    },
    {
      number: "03",
      text: "How designers think while solving user problems",
    },
    {
      number: "04",
      text: "Learn skills that require to make a career in it",
    },
  ];

  return (
    <div className="bg-neutral-190 font-satoshi pt-36 pb-14">
      <Container>
        <div className="flex flex-col gap-12 items-center justify-center">
          <h2 className="font-black text-neutral-185 text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize text-center">
            What You’ll Learn in this{" "}
            <span className="text-primary-110">Webinar</span>
          </h2>

          <div className="grid grid-cols-2 gap-6 mx-auto max-w-4xl w-full">
            {learnItems.map((item) => (
              <div key={item.number} className="max-w-90">
                <h3 className="font-black text-neutral-198 text-lg md:text-2xl xl:text-[40px] 2xl:text-[56px]">
                  {item.number}
                </h3>

                <p className="text-neutral-185 font-general-sans mt-3">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatYouWillLearn;
