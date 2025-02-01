import { ICONS } from '@/assets';
import Image from 'next/image';

const SuccessWithTick = ({message} : {message:string}) => {
    return (
        <div className="flex items-center justify-center gap-1">
            <Image src={ICONS.tickMark} alt="tick-mark" className='size-6' width={24} height={24} />
            <p className="text-whiterounded-xl text-sm">{message}</p>
        </div>
    );
};

export default SuccessWithTick;