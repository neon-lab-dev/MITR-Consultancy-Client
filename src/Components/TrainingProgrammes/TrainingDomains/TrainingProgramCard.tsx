import { ICONS, IMAGES } from '@/assets';
import Image from 'next/image';

const TrainingProgramCard = () => {
  return (
    <div className="rounded-xl font-satoshi">
      <Image src={IMAGES.frontendDevelopmentImage} alt="" className="rounded-t-xl" />

      <div className="bg-neutral-10 p-6">
        <h2 className="font-bold text-white text-[32px] capitalize">
          <span className="text-primary-110">Frontend</span> Development
        </h2>

        <div className="flex items-center justify-between mt-7">
          <h3 className="text-[22px] font-black text-white">₹ 2000 /-</h3>
          <button className="px-5 py-2 font-general-sans font-medium rounded-3xl text-white bg-primary-10 flex items-center gap-2">
            Learn More
            <Image src={ICONS.rightArrow2} alt="" className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingProgramCard;
