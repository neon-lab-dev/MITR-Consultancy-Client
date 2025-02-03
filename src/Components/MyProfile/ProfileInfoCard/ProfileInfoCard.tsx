import { formatDate } from "@/utils/formatDate";
import { useEffect, useState } from "react";

type TProfileInfoCard = {
    name: string;
    location: string;
    purchasedCourses: string[];
    joinedAt: string;
    isEditEnabled: boolean;
    setIsEditEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};
const ProfileInfoCard: React.FC<TProfileInfoCard> = ({ name, location, purchasedCourses, joinedAt, isEditEnabled, setIsEditEnabled }) => {
    const [initials, setInitials] = useState<string>("");

    useEffect(() => {
        const extractedInitials = (() => {
            const shortName = name || "Your Name";
            const nameParts = shortName.split(" ");
            return nameParts.length > 1
                ? nameParts[0][0] + nameParts[1][0]
                : nameParts[0]?.[0] || "";
        })();

        setInitials(extractedInitials.toUpperCase());
    }, [name]);
    return (
        <div className="absolute -top-24 w-full lg:w-[25%] h-[500px] bg-white shadow-course-details rounded-2xl px-4 py-8">
            <div className="size-[170px] mx-auto rounded-full text-white text-[48px] font-bold uppercase text-center flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-500">{initials}</div>
            <h1 className="text-neutral-45 text-2xl font-semibold leading-9 text-center mt-4">{name ? name : "Your Name"}</h1>
            <p className="text-neutral-115 leading-6 text-center">{location !== undefined ? location : "Your Location"}</p>
            <button onClick={() => setIsEditEnabled(!isEditEnabled)} className="border px-6 py-3 font-Inter text-lg font-medium rounded border-primary-20 text-primary-20 w-full mt-7">
                {isEditEnabled ? "Cancel" : "Edit Profile"}
            </button>

            <div className="flex items-center justify-between text-neutral-105 text-xl font-medium mt-9 leading-8">
                <p>Courses</p>
                <p>{purchasedCourses?.length || 0}</p>
            </div>
            <div className="flex items-center justify-between text-neutral-105 text-xl font-medium mt-2 leading-8">
                <p>Joined</p>
                <p>{joinedAt ? formatDate(joinedAt) : "Not Set Yet"}</p>
            </div>
        </div>
    );
};

export default ProfileInfoCard;