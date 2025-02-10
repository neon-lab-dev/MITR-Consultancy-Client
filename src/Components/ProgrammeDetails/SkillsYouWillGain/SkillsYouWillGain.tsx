
const SkillsYouWillGain = ({ skillsCovered }: { skillsCovered: string[] }) => {
    return (
        <div className="mt-[64px]">
            <h1 className="details-section-heading">Skills You will Gain</h1>
            <div className="flex flex-wrap items-center gap-5 mt-4">
                {
                    skillsCovered?.map((skill: string) =>
                        <div key={skill} className="px-5 py-[14px] text-neutral-90 font-medium leading-6 flex items-center justify-center rounded border border-primary-70">{skill}</div>
                    )
                }
            </div>
        </div>
    );
};

export default SkillsYouWillGain;
