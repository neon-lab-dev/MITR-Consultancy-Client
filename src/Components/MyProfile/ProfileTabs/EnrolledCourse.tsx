/* eslint-disable @typescript-eslint/no-explicit-any */
import ProgrammeCardLoader from "@/Components/Loaders/ProgrammeCardLoader";
import TrainingCard from "@/Components/MyProfile/StartTraining/TrainingCard";
import { useGetMyPurchasedCoursesQuery } from "@/redux/Features/User/userApi";

const EnrolledCourse = () => {
    const { data: myPurchasedCourses, isLoading } = useGetMyPurchasedCoursesQuery({});

    return (
        <div>
            {
                isLoading ?
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-9">
                        {
                            [...Array(4)].map((_, index) => <ProgrammeCardLoader key={index} />)
                        }
                    </div>
                    :
                    myPurchasedCourses?.purchasedCourses?.length > 0 ?
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-9">
                            {
                                myPurchasedCourses?.purchasedCourses?.map((course: any) => (
                                    <TrainingCard key={course?._id} isDescriptionVisible={true} isPriceVisible={false} imageHeight="h-[268px]" {...course} />
                                ))
                            }
                        </div>
                        :
                        <p className="mt-5">Not enrolled in any course yet.</p>
            }
        </div>
    );
};

export default EnrolledCourse;