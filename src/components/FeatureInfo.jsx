import { Icons } from "@/icons";
import Image from "next/image";
import Link from "next/link";

const FeatureInfo = ({ extraClassList }) => {
  return (
    <section className="mr-28 ml-28 mt-16">
      {/* feature 1  */}
      <div className={`py-10 py-lg-15 ${extraClassList}`} id="feature1">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-14 xl:gap-x-20 items-center">
            <div
              className="lg:col-span-1"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              <div className="content">
                <p className="text-purple-500">Feature 1</p>
                <h1 className="text-white mb-8 text-5xl mt-3 font-bold leading-normal">
                  Introducing AI-Enhanced{" "}
                  <span className="  text-purple-500">Compose</span> feature:
                  Unlock Your Full Creative Potential
                </h1>
                <p className="mb-6 text-gray-400 leading-normal">
                  Revolutionize the way you compose emails, replies, poems,
                  blogs, articles, and more. Experience the future of writing
                  with our AI-powered composition feature and elevate your
                  writing to new heights.
                </p>
                <ul className="list-disc list-inside mb-8">
                  <li className="flex items-center text-gray-400">
                  <Icons.check />
                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Increased productivity &
                      Confidence-Boosting
                    </span>
                  </li>
                  <li className="flex items-center text-gray-400">
                                     <Icons.check />


                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Versatile Writing Support with
                      contextual understanding
                    </span>
                  </li>
                  <li className="flex items-center text-gray-400">
                                     <Icons.check />

                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Instant Personalized Compositions &
                      Grammar, Spell checks
                    </span>
                  </li>
                </ul>

                <Link
                href="https://chrome.google.com/webstore/detail/kursor-chatgpt-and-google/ajoickdlofadbaooambnlnlbcpdnkkck"
                  className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-purple-600 mt-4  hover:underline"
                >
                  Try Compose Feature
                                   <Icons.arrowRight />
                </Link>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="250">
              <div className="feature-img">
                <Image height={600} width={600} src={'/illustration/feature1.svg'}  alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 2 */}

      <div className={`py-10 py-lg-15 ${extraClassList}`} id="feature2">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-14 xl:gap-x-20 items-center">
            <div
              className="col-lg-6"
              data-aos="fade-up-sm"
              data-aos-delay="250"
            >
              <div className="feature-img">
                <Image height={600} width={600} src={'/illustration/feature2.svg'} alt="" className="img-fluid" />
              </div>
            </div>
            <div
              className="lg:col-span-1"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              <div className="content">
                <p className="text-purple-500">Feature 2</p>
                <h1 className="text-white mb-8 text-5xl mt-3 font-bold leading-snug">
                  Say Goodbye to Tedious Browsing: Get Instant AI-Powered{" "}
                  <span className="text-purple-500">Search</span> Responses
                </h1>
                <p className="mb-6 text-gray-400 leading-normal">
                  With Kursor, get instant responses to your Google searches
                  using either ChatGPT or Bard, based on your preference. No
                  more hopping between numerous websites for answers!
                </p>

                <Link
                href="https://chrome.google.com/webstore/detail/kursor-chatgpt-and-google/ajoickdlofadbaooambnlnlbcpdnkkck"
                  className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-purple-600 mt-4  hover:underline"
                >
                  Try AI Powered Search
                                   <Icons.arrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* feature 3 */}
      <div className={`py-10 py-lg-15 ${extraClassList}`} id="feature3">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-14 xl:gap-x-20 items-center">
            <div
              className="lg:col-span-1"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              <div className="content">
                <p className="text-purple-500">Features 3</p>
                <h1 className="text-white mb-8 text-5xl mt-3 font-bold leading-snug">
                  Real Time Web Data Access Inside{" "}
                  <span className="  text-purple-500">Chat</span> Window
                </h1>
                <p className="mb-6 text-gray-400 leading-normal">
                  Experience the seamless integration of AI-powered chat into
                  your browsing experience with Kursor. Switch effortlessly
                  between ChatGPT and Bard, benefiting from their distinct
                  functionalities. The "web access" feature adds an extra layer
                  of depth to ChatGPT's responses, incorporating web data to
                  provide you with even more informative and engaging
                  conversations.
                </p>
                <ul className="list-disc list-inside mb-8">
                  <li className="flex items-center text-gray-400">
                                     <Icons.check />

                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; AI-Powered Chat
                    </span>
                  </li>
                  <li className="flex items-center text-gray-400">
                                     <Icons.check />

                    <span className="text-gray-400 mt-1">
                      &nbsp;&nbsp;&nbsp; Web Data Integration
                    </span>
                  </li>
                </ul>
                <Link
                href="https://chrome.google.com/webstore/detail/kursor-chatgpt-and-google/ajoickdlofadbaooambnlnlbcpdnkkck"
                  className="flex items-center arrow-link arrow-link-primary-dark text-primary-dark gap-3  hover:text-purple-500   text-purple-600 mt-4  hover:underline"
                >
                  Try Chat Feature
                                   <Icons.arrowRight />
                </Link>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up-sm" data-aos-delay="250">
              <div className="feature-img">
                <Image height={600} width={600} src={'/illustration/feature3.svg'} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureInfo;
