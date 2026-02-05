"use client";
import Container from "../../Shared/Container/Container";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="bg-neutral-180 py-[60px] md:py-20 xl:py-[98px] relative">
      <div
        className="absolute -top-10 -left-[224px] w-[448px] h-[448px] rounded-[448px] 
bg-[linear-gradient(180deg,#074CB3_0%,#010A18_100%)] 
blur-[224px] pointer-events-none "
      />
      <Container>
        <div>
          <div className="flex justify-between mb-5">
            <div className="text-center w-full ">
              <p className={`font-black text-primary-110`}>PROOFS</p>
              <h2
                className={`font-extrabold text-neutral-185 text-[30px] leading-normal capitalize my-6 `}
              >
                Trusted by Teams Who Value <span className="text-primary-110"> Reliability</span>
              </h2> 
            </div>
            
          </div>
         

          
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
