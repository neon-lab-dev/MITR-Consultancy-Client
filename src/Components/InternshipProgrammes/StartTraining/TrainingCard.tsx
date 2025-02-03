/* eslint-disable @next/next/no-img-element */
import { ICONS } from "@/assets";
import Image from "next/image";
import Link from "next/link";

type TTrainingCard = {
    isDescriptionVisible?: boolean;
    isPriceVisible?: boolean;
    imageHeight?: string;
    _id?: string;
    poster?: {
        url : string;
    };
    courseName?: string;
    description?: string;
    price?: number;
    lessons?: string;
    duration?: string;
}
const TrainingCard: React.FC<TTrainingCard> = ({ _id, poster, courseName, description, price, lessons, duration, isDescriptionVisible, isPriceVisible, imageHeight = "h-[215px]" }) => {
    return (
        <Link href={`/internship-programmes/${_id}`} className="bg-white rounded-lg font-Inter shadow-training-card">
            <img src={poster?.url} alt="lessons" className={`rounded-t-lg w-full ${imageHeight}`} />
            <div className="px-2 pt-2 pb-5">
                <h1 className="text-neutral-45 font-semibold leading-[25px]">{courseName}</h1>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                        <Image src={ICONS.lessons} alt="lessons" className="size-5" />
                        <p className="text-neutral-25 text-[13px] leading-5">{lessons} Lessons</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src={ICONS.duration} alt="lessons" className="size-5" />
                        <p className="text-neutral-25 text-[13px] leading-5">{duration}</p>
                    </div>
                </div>

                {
                    isDescriptionVisible &&
                    <p className="text-neutral-115 leading-6 mt-4">{description}</p>
                }

                {
                    isPriceVisible &&
                    <div className="flex items-center justify-between mt-4">
                        <Link href={`/internship-programme/${_id}`} className="text-primary-10 font-bold xl:text-lg text-xs leading-5 border-b-2 border-primary-10">
                            View Details
                        </Link>
                        <h1 className="text-neutral-45 font-bold xl:text-lg text-xs leading-5">
                            ₹{price}
                        </h1>
                    </div>
                }
            </div>
        </Link>
    );
};

export default TrainingCard;