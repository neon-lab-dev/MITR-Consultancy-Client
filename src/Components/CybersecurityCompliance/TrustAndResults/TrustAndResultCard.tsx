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
    <div className={`font-Satoshi relative w-[282px] md:w-[200px] lg:w-[282px] h-[448px] ${classNames}`}>
      <Image
        src={IMAGES.complianceSolutionCard}
        alt=""
        className="w-full h-full absolute z-0"
      />
      <div className="relative flex flex-col items-center justify-center gap-6 text-white p-4 h-full">
        <h3 className="font-medium text-[22px]">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TrustAndResultCard;
