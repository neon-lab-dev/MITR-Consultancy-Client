import { ICONS } from "@/assets";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type TOurProjectCard = {
    _id: string;
    img: StaticImageData;
    title: string;
    description: string;
}
const OurProjectCard: React.FC<TOurProjectCard> = ({ _id, img, title, description }) => {
    return (
        <div className="bg-white rounded shadow-xl p-5 font-Inter">
            <Image src={img} alt={`MITR Consultancy - ${title}`} className="h-[376px] w-full rounded" />
            <h1 className={`font-bold text-neutral-10 text-[32px] leading-[42.56px] capitalize mt-[25px]`}>{title}</h1>
            <p className={`text-neutral-20 text-sm mt-5`}>{description}</p>
            <Link href={`/project/${_id}`} className="text-neutral-10 font-bold text-xl leading-5 border-b-2 border-primary-10 flex items-center gap-3 mt-8 w-fit pb-3">
                Read More
                <Image src={ICONS.rightArrow} alt="right-arrow" className="mt-1" />
            </Link>
        </div>
    );
};

export default OurProjectCard;