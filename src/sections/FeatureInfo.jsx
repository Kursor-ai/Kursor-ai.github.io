import { FeatureDetailsCard } from "@/components/FeatureDetailsCard";
import { siteContentConfig } from "@/config/content";

const FeatureInfo = ({ extraClassList }) => {
  return (
    // <div className="bg-custome-gradient6 h-[100%] w-[100%]">
    <section className="section">
      {siteContentConfig.featureDetails.map((featureDetails, i) => (
        <FeatureDetailsCard
          key={i}
          featureDetails={featureDetails}
          extraClassList={extraClassList}
        />
      ))}
    </section>
    //  </div>
  );
};

export default FeatureInfo;
