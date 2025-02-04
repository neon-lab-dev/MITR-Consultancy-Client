import { ICONS } from "@/assets";
import Image from "next/image";

const TrainingCard = ({totalEnrolled, rating} : {totalEnrolled ?:string | number; rating? : string}) => {
    return (
        <div className="flex rounded-lg w-[796px] absolute top-[280px] shadow-course-details">
            <div className="bg-primary-20 py-3 px-4 rounded-l-lg flex flex-col items-center justify-center">
                <Image src={ICONS.training} alt="training" className="size-6" />
                <p className="text-white font-semibold">Training</p>
            </div>
            <div className="bg-white py-3 px-4 rounded-r-lg flex items-center justify-between  w-[672px]">
                <p className="text-neutral-90 text-sm max-w-[247px]">Access this top-rated training Course, and set your carrier in web development and web application.</p>
                <div className="bg-neutral-65 h-full w-[1px]"></div>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-neutral-90 font-semibold text-[21px] leading-7">{rating}</p>
                    <div className="flex items-center gap-1">
                        {
                            [1, 2, 3, 4, 5].map((_, index) =>
                                <Image key={index} src={ICONS.rating} alt="training" className="size-3" />
                            )
                        }
                    </div>
                    
                    <p className="text-neutral-95 text-sm">422,249 ratings</p>
                </div>
                <div className="bg-neutral-65 h-full w-[1px]"></div>
                <div className="flex flex-col items-center gap-2">
                    <Image src={ICONS.users} alt="training" className="size-6" />
                    <p className="text-neutral-90 font-semibold text-sm">{totalEnrolled}</p>
                    <p className="text-neutral-95 text-sm">Students Enrolled</p>
                </div>
            </div>
        </div>
    );
};

export default TrainingCard;
  