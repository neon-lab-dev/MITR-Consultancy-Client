import MyProfileHero from "@/Components/MyProfile/MyProfileHero/MyProfileHero";
import ProfileInfoCard from "@/Components/MyProfile/ProfileInfoCard/ProfileInfoCard";
import ProfileTabs from "@/Components/MyProfile/ProfileTabs/ProfileTabs";
import Container from "@/Components/Shared/Container/Container";

const MyProfile = () => {
    return (
        <div className="">
            <MyProfileHero />
            <Container>
                <div className="flex gap-10 ">
                    <ProfileInfoCard />
                    <ProfileTabs />
                </div>
            </Container>
        </div>
    );
};

export default MyProfile;