import Image from 'next/image';

const ProgrammeCard = ({icon, title, description}) => {
    return (
        <div className='bg-white rounded-2xl border border-primary-60 p-4 shadow-training-card font-Inter h-[231px]'>
            <div className='bg-primary-30 p-4 rounded-md'>
            <Image src={icon} alt='ui-ux' className='size-9' />
            </div>
            <h1 className={`font-bold text-neutral-10 text-xl leading-[27px] capitalize mt-3`}>{title}</h1>
            <p className={`text-neutral-20 text-sm mt-1`}>{description}</p>
        </div>
    );
};

export default ProgrammeCard;