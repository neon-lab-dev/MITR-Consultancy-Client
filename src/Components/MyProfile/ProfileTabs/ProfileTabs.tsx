"use client";
import { useEffect, useState } from "react";
import ProfileInfo from "./ProfileInfo";
import EnrolledCourse from "./EnrolledCourse";

type TProfileTabsProps = {
    isEditEnabled: boolean;
    setIsEditEnabled: (value: boolean) => void;
};
const ProfileTabs: React.FC<TProfileTabsProps> = ({ isEditEnabled, setIsEditEnabled }) => {
    const [selectedTab, setSelectedTab] = useState("Profile");
    const tabButtons = ["Profile", "Enrolled Courses"];

    const [leftOffset, setLeftOffset] = useState(225); // Default for xl screens

    useEffect(() => {
        const updateOffset = () => {
            if (window.innerWidth >= 1280) {
                setLeftOffset(225); // xl screens
            } else if (window.innerWidth >= 768) {
                setLeftOffset(210); // md & lg screens
            } else {
                setLeftOffset(200); // sm screens
            }
        };

        updateOffset(); // Set initial value
        window.addEventListener("resize", updateOffset);
        return () => window.removeEventListener("resize", updateOffset);
    }, []);



    return (
        <div className="w-full lg:w-[75%] mt-[480px] md:mt-24 lg:mt-12">
            {/* Tabs */}
            <div className="relative flex items-center gap-[154px] border-b border-neutral-20 pb-2">
                {tabButtons.map((btn) => (
                    <button
                        key={btn}
                        onClick={() => setSelectedTab(btn)}
                        className="text-neutral-45 text-base md:text-xl xl:text-2xl font-semibold leading-9 relative pb-2 text-nowrap"
                    >
                        {btn}
                    </button>
                ))}

                {/* Dynamic Underline */}
                <div
                    className={`absolute -bottom-[2px] h-[3px] bg-primary-20 transition-all duration-300 w-[130px] md:w-[180px]`}
                    style={{
                        left: `${tabButtons.indexOf(selectedTab) * leftOffset}px`,
                    }}
                />
            </div>

            {
                selectedTab === "Profile" ?
                    <ProfileInfo isEditEnabled={isEditEnabled} setIsEditEnabled={setIsEditEnabled} />
                    :
                    <EnrolledCourse />
            }
        </div>
    );
};

export default ProfileTabs;
