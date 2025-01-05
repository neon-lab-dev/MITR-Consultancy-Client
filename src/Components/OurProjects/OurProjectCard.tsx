import { ICONS } from "@/assets";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type TOurProjectCard = {
    _id: string;
    image: StaticImageData;
    projectName: string;
    description: string;
}
const OurProjectCard: React.FC<TOurProjectCard> = ({ _id, image, projectName, description }) => {
    return (
        <div className="bg-white rounded shadow-xl w-full md:w-full xl::w-[416px] p-5 font-Inter">
            <Image src={image} alt={`MITR Consultancy - ${projectName}`} className="h-[376px] w-full rounded object-cover" />
            <h1 className={`font-bold text-neutral-10 xl:text-[32px] md:text-[24px] text-base leading-[42.56px] capitalize xl:mt-5 md:mt-4 mt-2`}>{projectName}</h1>
            <p className={`text-neutral-20 md:text-sm text-xs  xl:mt-5 md:mt-4 mt-2`}>{description}</p>
            <Link href={`/project/${_id}`} className="text-neutral-10 font-bold xl:text-lg text-xs leading-5 border-b-2 border-primary-10 flex items-center gap-3 xl:mt-6 md:mt-4 mt-2 w-fit md:pb-3 pb-1">
                Read More
                <Image src={ICONS.rightArrow} alt="right-arrow" className="mt-1" />
            </Link>
        </div>
    );
};

export default OurProjectCard;