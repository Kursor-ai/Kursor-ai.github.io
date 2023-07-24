import { siteContentConfig } from "@/config/content";
import { FeatureCard } from "../components/FeatureCard";
const Features = () => {
  return (
    // <div className="bg-custome-gradient6 h-[100%] w-[100%]">

    <section className="section flex flex-col mt-[150px]">
      <div className="text-center  max-w-3xl mx-auto mb-18">
        <h2
          className="mb-0 text-white md:text-5xl text-4xl font-bold leading-snug"
          data-aos="fade-up"
        >
          Feel the power of AI Assistant, get everything click at{" "}
          <span className="text-purple-500">Kursor</span>
        </h2>
        <p
          className="text-white mt-5 tracking-tight text-xl"
          data-aos="fade-up"
        >
          Discover the power of AI technology with Kursor's one-click access to
          everything you need.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-14 mt-20">
        {siteContentConfig.features.map((feature, i) => (
          <FeatureCard
            key={i}
            feature={feature}
            animationDelay={200 + 50 * i}
          />
        ))}
      </div>
    </section>
    // </div>
  );
};

export default Features;
