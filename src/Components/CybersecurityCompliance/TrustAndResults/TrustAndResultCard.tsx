import { IMAGES } from "@/assets";
import Image from "next/image";

// FeatureCard.tsx
type TTrustAndResultCardProps = {
  title: string;
  description: string;
  classNames?: string;
};

const TrustAndResultCard = ({
  title,
  description,
  classNames
}: TTrustAndResultCardProps) => {
  return (
    <div className={`relative w-70.5 md:w-50 lg:w-70.5 h-[448px] ${classNames}`}>
      <Image
        src={IMAGES.complianceSolutionCard}
        alt=""
        className="w-full h-full absolute z-0"
      />
      <div className="relative flex flex-col items-center justify-center gap-6 text-white pt-12 px-[29px] h-full">
        <h3 className="font-bold font-satoshi text-[22px]">{title}</h3>
        <p className="font-general-sans text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TrustAndResultCard;
