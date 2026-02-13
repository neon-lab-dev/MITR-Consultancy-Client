import Image from 'next/image';
import { IMAGES } from '@/assets';
import Container from "../../shared/Container/Container";

const ProgramCompletion = () => {
  return (
    <div className="font-satoshi py-14">
      <Container>
        <h2 className="font-black text-white text-lg md:text-2xl xl:text-[40px] 2xl:text-[64px] capitalize">
          Program <span className="text-primary-110">Completion</span>
        </h2>

        <p className="font-general-sans text-sm text-white mt-3 mb-6">
          Participants who successfully complete the program receive a
          certificate of completion from MITRA, reflecting their participation
          and learning outcomes.
        </p>

        <Image src={IMAGES.certificateSample} alt="" className="mt-12 w-full" />
      </Container>
    </div>
  );
};

export default ProgramCompletion;
