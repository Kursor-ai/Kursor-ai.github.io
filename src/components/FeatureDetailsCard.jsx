import { Icons } from "@/icons";
import Image from "next/image";
import Link from "next/link";

export function FeatureDetailsCard({ featureDetails, extraClassList }) {
    const { title, description, cta, featureImg, id } = featureDetails

  const isRightToLeft = id % 2 === 1

  return (
    <div className={`py-10 py-lg-15 ${extraClassList}`} id={"feature"+(id+1)}>
      <div className="container">
        <div className={`flex   flex-col   gap-6 lg:gap-x-14 xl:gap-x-20 items-center ${isRightToLeft? "md:flex-row-reverse" : "md:flex-row" }`}>
          <div className="flex-[0.5]" data-aos="fade-up-sm" data-aos-delay="250">
            <div className="feature-img">
              <Image
                height={600}
                width={600}
                src={featureImg}
                alt=""
                aria-hidden="true"
                className="img-fluid"
              />
            </div>
          </div>
          <div
            className="flex-[0.5]"
            data-aos="fade-up-sm"
            data-aos-delay={`${100 + id * 50}`}
          >
            <div className="content">
              <p className="text-purple-500">Feature {id + 1}</p>
              <h2 className="text-white mb-8 md:text-3xl text-2xl mt-3 font-bold leading-snug">
                {title}
              </h2>
              {description}

              <Link
                href="https://chrome.google.com/webstore/detail/kursor-chatgpt-and-google/ajoickdlofadbaooambnlnlbcpdnkkck"
                className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-purple-600 mt-4  hover:underline"
              >
                {cta}
                <Icons.arrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
