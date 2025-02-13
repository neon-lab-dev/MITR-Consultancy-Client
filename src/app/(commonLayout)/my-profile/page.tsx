"use client"
import MyProfileHero from "@/Components/MyProfile/MyProfileHero/MyProfileHero";
import ProfileInfoCard from "@/Components/MyProfile/ProfileInfoCard/ProfileInfoCard";
import ProfileTabs from "@/Components/MyProfile/ProfileTabs/ProfileTabs";
import Container from "@/Components/Shared/Container/Container";
import { TLoggedInUser } from "@/Components/Shared/Navbar/Navbar";
import { useCurrentUser } from "@/redux/Features/Auth/authSlice";
import { useGetMeQuery } from "@/redux/Features/User/userApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
    const router = useRouter();
    const user = useSelector(useCurrentUser) as TLoggedInUser;
    const {data} = useGetMeQuery({});
    const [isEditEnabled, setIsEditEnabled] = useState<boolean>(false);
    // useEffect(() => {
    //     if(!user){
    //         router.push("/auth/get-started");
    //     }
    // }, [router, user]);
    return (
        <div className="">
            <MyProfileHero name={data?.user?.full_name} />
            <Container>
                <div className="flex flex-col lg:flex-row gap-10 relative">
                    <ProfileInfoCard
                    name={data?.user?.full_name}
                    location={`${data?.user?.city ? data?.user?.city : "Your"}, ${data?.user?.country ? data?.user?.country : "Location"}`}
                    purchasedCourses={data?.user?.purchasedCourses}
                    joinedAt={data?.user?.createdAt}
                    isEditEnabled={isEditEnabled} 
                    setIsEditEnabled={setIsEditEnabled}
                    />
                    <div className="hidden lg:block w-full lg:w-[30%] xl:w-[25%]"></div>
                    <ProfileTabs isEditEnabled={isEditEnabled} setIsEditEnabled={setIsEditEnabled} />
                </div>
            </Container>
        </div>
    );
};

export default MyProfile;