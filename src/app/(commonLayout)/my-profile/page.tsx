"use client"
import MyProfileHero from "@/Components/MyProfile/MyProfileHero/MyProfileHero";
import ProfileInfoCard from "@/Components/MyProfile/ProfileInfoCard/ProfileInfoCard";
import ProfileTabs from "@/Components/MyProfile/ProfileTabs/ProfileTabs";
import Container from "@/Components/Shared/Container/Container";
import { useGetMeQuery } from "@/redux/Features/User/userApi";

const MyProfile = () => {
    const {data} = useGetMeQuery({});
    console.log(data);
    return (
        <div className="">
            <MyProfileHero name={data?.user?.full_name} />
            <Container>
                <div className="flex gap-10 relative">
                    <ProfileInfoCard
                    name={data?.user?.full_name}
                    location={`${data?.user?.city ? data?.user?.city : "Your"}, ${data?.user?.country ? data?.user?.country : "Location"}`}
                    purchasedCourses={data?.user?.purchasedCourses}
                    joinedAt={data?.user?.createdAt}
                    />
                    <div className="w-full lg:w-[25%]"></div>
                    <ProfileTabs />
                </div>
            </Container>
        </div>
    );
};

export default MyProfile;