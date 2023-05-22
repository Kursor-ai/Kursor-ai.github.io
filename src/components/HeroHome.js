import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import "aos/dist/aos.css";

const HeroHome = () => {
  const videoLink =
    "https://app.heygen.com/embeds/67c0dbb850ee4097b8c8e2e0d4320190";

  return (
    <main className="mr-24 ml-24 ">
      {/* Hero content */}
      <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center ">
          <h1
            className="h1 mb-4 text-5xl font-bold text-white leading-snug "
            data-aos="fade-up"
          >
            Search. Write. Create. Explore on one click with{" "}
            <span className="text-purple-500">Kursor</span>
          </h1>
          <p className="text-white text-xl mt-6 " data-aos="fade-up">
            Experience unlimited access to the all-in-one AI assistant with web
            access. Combining the intelligence of{" "}
            <span className="font-bold text-purple-500">
              {" "}
              ChatGPT and Google Bard
            </span>{" "}
          </p>

          <div className="flex justify-center space-x-4 mt-10">
            <Link
              href="https://chrome.google.com/webstore/detail/kursor-chatgpt-and-google/ajoickdlofadbaooambnlnlbcpdnkkck"
              className=" inline-block text-white bg-gradient-to-r from-purple-400 to-purple-600 px-6 py-3 rounded-lg ml-5"
              data-aos="fade-up"
            >
              Add to Chrome
            </Link>
          </div>

          <div className="flex justify-center space-x-4 ">
            <iframe
              width="700"
              height="500"
              src="https://app.heygen.com/embeds/67c0dbb850ee4097b8c8e2e0d4320190"
              title="HeyGen video player"
              frameborder="0"
              allow="encrypted-media; fullscreen;"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* <ul className="flex flex-wrap gap-4 md:gap-8 lg:gap-10 items-center justify-center mt-8 mb-0 text-white  ">
        <li>
          <FontAwesomeIcon icon={faCircle} className="h-2 w-2 text-white" />
          &nbsp;&nbsp; 90% Less Browsing, 10x Faster Responses in 1 click
        </li>
        <li>
          {" "}
          <FontAwesomeIcon
            icon={faCircle}
            className="h-2 w-2 text-white"
          />{" "}
          &nbsp;&nbsp; Boost Your Writing Efficiency by 300%
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={faCircle} className="h-2 w-2 text-white" />
          &nbsp;&nbsp; Unlock the Ultimate AI Chat Bot Experience with Web
          Access
        </li>
      </ul> */}
    
    </main>
  );
};

export default HeroHome;
