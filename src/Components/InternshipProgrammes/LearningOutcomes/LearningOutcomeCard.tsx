import Image, { StaticImageData } from 'next/image';

const LearningOutcomeCard = ({ icon, description }: { icon: StaticImageData; description: string; }) => {
    return (
        <div className='bg-white rounded-2xl border border-primary-60 p-5 font-Inter'>
                <Image src={icon} alt={description} className='size-8' />
            <p className={`text-neutral-20 font-medium leading-6 mt-[18px] text-[15px]`}>{description}</p>
        </div>
    );
};

export default LearningOutcomeCard;