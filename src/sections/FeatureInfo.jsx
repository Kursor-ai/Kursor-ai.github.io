import { FeatureDetailsCard } from "@/components/FeatureDetailsCard";
import { siteContentConfig } from "@/config/content";


const FeatureInfo = ({ extraClassList }) => {
  return (
    <section className="section">
     {
      siteContentConfig.featureDetails.map((featureDetails, i) => (
        <FeatureDetailsCard key={i} featureDetails={featureDetails} extraClassList={extraClassList} />
      ))
     }
    </section>
  );
};

export default FeatureInfo;
