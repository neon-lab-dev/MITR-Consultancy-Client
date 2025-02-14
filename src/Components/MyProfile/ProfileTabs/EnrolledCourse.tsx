/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import TrainingCard from "@/Components/InternshipProgrammes/StartTraining/TrainingCard";
import { useGetSingleProgrammeByIdQuery } from "@/redux/Features/InterhshipProgrammes/internshipProgrammesApi";
import { useGetMeQuery } from "@/redux/Features/User/userApi";

const EnrolledCourse = () => {
    const { data: myProfile } = useGetMeQuery({});
    const courseIds = myProfile?.user?.purchasedCourses || [];

    const coursesData = courseIds.map((id: string) => {
        return useGetSingleProgrammeByIdQuery(id);
    });

    return (
        <div>
            {
                coursesData?.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-9">
                {
                    coursesData.map((course: any) => (
                        <TrainingCard key={course?.data?.course?._id} isDescriptionVisible={true} isPriceVisible={false} imageHeight="h-[268px]" {...course?.data?.course} />
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