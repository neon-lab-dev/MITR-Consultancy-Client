
const AuthHeading = ({ heading, description }: { heading: string; description: string; }) => {
    return (
        <>
            <h1 className="text-neutral-45 text-xl md:text-[36px] font-bold leading-normal text-center">
                {heading}
            </h1>
            <p className="max-w-[520px] text-neutral-115 leading-6 text-center mx-auto mt-1">{description}</p>
        </>
    );
};

export default AuthHeading;