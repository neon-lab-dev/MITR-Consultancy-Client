import AboutTheHost from "@/Components/Webinar/AboutTheHost/AboutTheHost";
import ThisWebinarIsForYou from "@/Components/Webinar/ThisWebinarIsForYou/ThisWebinarIsForYou";
import WebinarHero from "@/Components/Webinar/WebinarHero/WebinarHero";
import WhatYouWillLearn from "@/Components/Webinar/WhatYouWillLearn/WhatYouWillLearn";
import WhyAttend from "@/Components/Webinar/WhyAttend/WhyAttend";
import React from "react";

const Webinar = () => {
  return (
    <div>
      <WebinarHero />
      <WhatYouWillLearn />
      <ThisWebinarIsForYou />
      <WhyAttend />
      <AboutTheHost />
    </div>
  );
};

export default Webinar;
