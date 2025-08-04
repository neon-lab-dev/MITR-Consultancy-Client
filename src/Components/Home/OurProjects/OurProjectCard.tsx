import { ICONS } from "@/assets";
import Image, { StaticImageData } from "next/image";

type TOurProjectCard = {
  _id: string;
  image: StaticImageData;
  projectName: string;
  description: string;
  liveLink: string;
};
const OurProjectCard: React.FC<TOurProjectCard> = ({
  image,
  projectName,
  description,
  liveLink,
}) => {
  return (
    <div className="bg-white rounded-xl w-full md:w-full min-h-[600px] font-Inter flex flex-col justify-between">
      <Image
        src={image}
        alt={`MITRA Consultancy - ${projectName}`}
        className="h-[376px] w-full rounded object-cover"
      />
      <div className="bg-neutral-140 p-4 rounded-b-xl">
        <h1
          className={`font-bold text-neutral-10 md:text-[21px] text-base leading-7 capitalize`}
        >
          {projectName}
        </h1>
        <p className={`text-neutral-20 md:text-sm text-xs md:mt-4 mt-2`}>
          {description}
        </p>
        <a
          target="_blank"
          href={liveLink}
          className="text-primary-10 font-medium xl:text-base text-xs leading-5 flex items-center gap-1 xl:mt-8 md:mt-4 mt-2 w-fit md:pb-3 pb-1"
        >
          Live Preview
          <Image src={ICONS.rightArrowBlue} alt="right-arrow" className="size-6" />
        </a>
      </div>
    </div>
  );
};

export default OurProjectCard;
