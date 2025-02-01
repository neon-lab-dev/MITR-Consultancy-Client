
const ProfileInfoCard = () => {
    return (
        <div className="absolute -top-24 w-full lg:w-[25%] h-[500px] bg-white shadow-course-details rounded-2xl px-4 py-8">
            <div className="size-[170px] mx-auto rounded-full text-white text-[48px] font-bold uppercase text-center flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-500">RS</div>
            <h1 className="text-neutral-45 text-2xl font-semibold leading-9 text-center mt-4">Rahul Sutradhar</h1>
            <p className="text-neutral-115 leading-6 text-center">Cumilla, Bangladesh</p>
            <button className="border px-6 py-3 font-Inter text-lg font-medium rounded border-primary-20 text-primary-20 w-full mt-7">Edit Profile</button>

            <div className="flex items-center justify-between text-neutral-105 text-xl font-medium mt-9 leading-8">
                <p>Courses</p>
                <p>3</p>
            </div>
            <div className="flex items-center justify-between text-neutral-105 text-xl font-medium mt-2 leading-8">
                <p>Joined</p>
                <p>6 Jan 2025</p>
            </div>
        </div>
    );
};

export default ProfileInfoCard;