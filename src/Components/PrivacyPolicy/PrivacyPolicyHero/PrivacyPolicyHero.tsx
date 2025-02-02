
const PrivacyPolicyHero = ({title} : {title:string}) => {
    return (
        <div className="font-Inter mt-20 bg-gradient-to-r from-blue-400 to-[#09F] h-[400px] flex items-center justify-center">
            <h1 className="text-white text-[48px] font-bold uppercase text-center">{title}</h1>
        </div>
    );
};

export default PrivacyPolicyHero;