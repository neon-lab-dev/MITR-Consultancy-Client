import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";

type TTrainingCard = {
    isDescriptionVisible? : boolean;
    isPriceVisible? : boolean;
    imageHeight? : string;
}
const TrainingCard:React.FC<TTrainingCard> = ({isDescriptionVisible, isPriceVisible, imageHeight="h-[215px]"}) => {
    return (
        <Link href={`/internship-programmes/name`} className="bg-white rounded-lg font-Inter shadow-training-card">
            <Image src={IMAGES.backendDevelopmentImg} alt="lessons" className={`rounded-t-lg w-full ${imageHeight}`} />
            <div className="px-2 pt-2 pb-5">
                <h1 className="text-neutral-45 font-semibold leading-[25px]">Backend Development Using Node.js, MongoDB, and Express.js</h1>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <Image src={ICONS.lessons} alt="lessons" className="size-5" />
                        <p className="text-neutral-25 text-[13px] leading-5">24 Lessons</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={ICONS.duration} alt="lessons" className="size-5" />
                        <p className="text-neutral-25 text-[13px] leading-5">3 months</p>
                    </div>
                </div>

                {
                    isDescriptionVisible &&
                    <p className="text-neutral-115 leading-6 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quislore magna aliqua. Ut enim ad minim veniam, quis  </p>
                }

                {
                    isPriceVisible &&
                    <div className="flex items-center justify-between mt-4">
                    <Link href={"/"} className="text-primary-10 font-bold xl:text-lg text-xs leading-5 border-b-2 border-primary-10">
                    View Details
                    </Link>
                    <h1 className="text-neutral-45 font-bold xl:text-lg text-xs leading-5">
                    ₹999
                    </h1>
                </div>
                }
            </div>
        </Link>
    );
};

export default TrainingCard;