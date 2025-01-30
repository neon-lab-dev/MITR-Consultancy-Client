
const WhoCanApply = () => {
    return (
        <div className="bg-white py-5 px-4 font-Inter flex flex-col gap-4 mt-[64px] shadow-course-details">
        <h1 className="text-neutral-10 text-[30px] font-semibold leading-[48px]">Who Can Apply</h1>
        <li className="text-neutral-90 font-semibold text-sm leading-6">Students in their 5th to 7th semesters of engineering or equivalent courses.</li>
        <li className="text-neutral-90 font-semibold text-sm leading-6">Beginners and moderately skilled students categorized based on self-assessment:
            <br />
            <p className="ml-5">a. Low-level (1-5/10 self-rating)</p>
            <p className="ml-5">b. Moderate-level (6-10/10 self-rating)</p>
        </li>
    </div>
    );
};

export default WhoCanApply;