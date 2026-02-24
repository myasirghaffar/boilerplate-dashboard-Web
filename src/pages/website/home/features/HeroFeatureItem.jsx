import { HeroCheckCircleIcon } from "../../../../assets/icons";

const HeroFeatureItem = ({ children }) => {
  return (
    <div className="inline-flex items-center gap-2">
      <HeroCheckCircleIcon className="h-5 w-5 shrink-0" />
      <span className="text-sm text-white/80">{children}</span>
    </div>
  );
};

export default HeroFeatureItem;
