import Image from "next/image";
import Button from "../Reusable/Button/Button";
import { ICONS } from "@/assets";

const DetailsCard = () => {
    const details = [
        {
            icon: ICONS.duration2,
            title: "Duration",
            value: "3 months in two Phases",
        },
        {
            icon: ICONS.certificate,
            title: "Certificate",
            value: "Digital Certificate",
        },
        {
            icon: ICONS.students,
            title: "Students",
            value: "1500",
        },
        {
            icon: ICONS.skillLevel,
            title: "Skill Level",
            value: "Beginner to Advance",
        },
    ];

    return (
        <div className="bg-white px-4 py-7 w-full max-w-[395px] h-[508px] mt-20 flex flex-col gap-[22px] shadow-course-details">
            <h1 className="text-neutral-45 text-xl md:text-[36px] font-bold leading-normal">
                ₹999
            </h1>
            <div className="flex flex-col gap-4">
                <Button variant="primary" title="Add to Cart" classNames="w-full font-normal" />
                <button className="border px-6 py-3 font-Inter text-lg font-medium rounded border-primary-20 text-primary-20 w-full">Buy Now</button>
            </div>
            <div className="bg-neutral-65 w-full h-[1px]"></div>

            <div className="flex flex-col gap-5">
                {
                    details?.map(item =>
                        <div key={item?.title} className="flex items-center justify-between">
                            <div className="flex items-center gap-[10px]">
                                <Image src={item?.icon} alt="" className="size-9" />
                                <p className="text-neutral-85 font-medium">{item?.title}</p>
                            </div>
                            <p className="text-neutral-85 font-medium">{item?.value}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default DetailsCard;