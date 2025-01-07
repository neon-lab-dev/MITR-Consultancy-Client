import { ICONS } from "@/assets";
import Image, { StaticImageData } from "next/image";

type TOurProjectCard = {
    _id: string;
    image: StaticImageData;
    projectName: string;
    description: string;
    liveLink: string;
}
const OurProjectCard: React.FC<TOurProjectCard> = ({ image, projectName, description, liveLink }) => {
    return (
        <div className="bg-white rounded shadow-xl w-full md:w-full xl::w-[416px] p-5 font-Inter">
            <Image src={image} alt={`MITR Consultancy - ${projectName}`} className="h-[376px] w-full rounded object-cover" />
            <h1 className={`font-bold text-neutral-10 xl:text-[32px] md:text-[24px] text-base leading-[42.56px] capitalize xl:mt-5 md:mt-4 mt-2`}>{projectName}</h1>
            <p className={`text-neutral-20 md:text-sm text-xs  xl:mt-5 md:mt-4 mt-2`}>{description}</p>
            <a target="_blank" href={liveLink} className="text-neutral-10 font-bold xl:text-lg text-xs leading-5 border-b-2 border-primary-10 flex items-center gap-3 xl:mt-6 md:mt-4 mt-2 w-fit md:pb-3 pb-1">
                Live Preview
                <Image src={ICONS.rightArrow} alt="right-arrow" className="" />
            </a>
        </div>
    );
};

export default OurProjectCard;