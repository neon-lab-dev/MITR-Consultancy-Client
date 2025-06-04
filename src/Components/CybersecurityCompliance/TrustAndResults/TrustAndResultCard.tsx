// FeatureCard.tsx
type TTrustAndResultCardProps = {
  title: string;
  description: string;
};

const TrustAndResultCard = ({
  title,
  description,
}: TTrustAndResultCardProps) => {
  return (
    <div
      style={{ boxShadow: "0px 0px 50px -13px rgba(0, 0, 0, 0.20)" }}
      className="p-6 bg-white rounded-2xl font-Inter flex flex-col gap-[21px]"
    >
      <h3 className="font-medium text-base text-neutral-145">{title}</h3>
      <div className="w-16 h-[5px] rounded-[30px] bg-secondary-20" />
      <p className="text-sm font-Inter text-neutral-55">{description}</p>
    </div>
  );
};

export default TrustAndResultCard;
