
const AuthHeading = ({ heading, description, align }: { heading: string; description: string; align:string }) => {
    return (
        <>
            <h1 className={`text-neutral-45 text-xl md:text-[36px] font-bold leading-normal ${align === "center" ? "mx-auto text-center" : "mx-0 text-left"}`}>
                {heading}
            </h1>
            <p className={`max-w-[520px] text-neutral-115 leading-6 mt-1  ${align === "center" ? "mx-auto text-center" : "mx-0 text-left"}`}>{description}</p>
        </>
    );
};

export default AuthHeading;