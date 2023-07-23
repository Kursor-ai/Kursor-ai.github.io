import Image from "next/image";

export  function FeatureCard ({feature, animationDelay}) {
  return (
    <div
    className="flex flex-col md:items-start items-center md:text-start text-center gap-6 lg:flex-row"
    
    data-aos={animationDelay ? "fade-up-sm": ""}
    data-aos-delay={animationDelay?`${animationDelay}`:""}
    
  >
     <div className="flex-shrink-0 flex  items-center justify-center rounded-lg p-2 border text-black border-white border-opacity-25 h-[56px] w-[56px] ">
     <Image
        src={feature.iconImg}
        alt="Generates quality contents"
        className="rounded-lg fill-white"
        width={50}
        height={32}
      />
    </div>
    <div className="content">
      <h4 className="mb-2 text-white text-2xl font-bold">{feature.title}</h4>
      <p className="text-gray-400">
      {feature.description}
      </p>
    </div>
  </div>
  )
}