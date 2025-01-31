"use client";
import { useState } from "react";
import ProfileInfo from "./ProfileInfo";

const ProfileTabs = () => {
    const [selectedTab, setSelectedTab] = useState("Profile");
    const tabButtons = ["Profile", "Enrolled Courses"];

    return (
        <div className="w-full lg:w-[75%] mt-12">
            {/* Tabs */}
            <div className="relative flex items-center gap-[154px] border-b border-neutral-20 pb-2">
                {tabButtons.map((btn) => (
                    <button
                        key={btn}
                        onClick={() => setSelectedTab(btn)}
                        className="text-neutral-45 text-2xl font-semibold leading-9 relative pb-2"
                    >
                        {btn}
                    </button>
                ))}

                {/* Dynamic Underline */}
                <div
                    className={`absolute -bottom-[2px] h-[3px] bg-primary-20 transition-all duration-300 w-[180px]`}
                    style={{
                        left: `${tabButtons.indexOf(selectedTab) * 225}px`,
                    }}
                />
            </div>

            {
                selectedTab === "Profile" &&
                <ProfileInfo/>
            }
        </div>
    );
};

export default ProfileTabs;
