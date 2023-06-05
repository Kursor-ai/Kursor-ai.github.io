import Link from "next/link";

import "aos/dist/aos.css";

const HeroHome = () => {
  return (
    <section className="section ">
      {/* Hero content */}
      <div className="  flex space-y-10  md:max-w-3xl md:mx-auto  text-center flex-col pt-32 pb-10 md:pt-32 md:pb-16">
        {/* Section header */}
        <div className=" flex  flex-col  space-y-4 ">
          <h1
            className="h1  md:text-5xl text-4xl font-bold text-white leading-snug "
            data-aos="fade-up"
          >
            Search. Write. Create. Explore on one click with{" "}
            <span className="text-purple-500">Kursor</span>
          </h1>
          <p className="text-white text-xl  " data-aos="fade-up">
            Experience unlimited access to the all-in-one AI assistant with web
            access. Combining the intelligence of{" "}
            <span className="font-bold text-purple-500">
              {" "}
              ChatGPT and Google Bard
            </span>{" "}
          </p>
          <p className="text-purple-200 text-2xl " data-aos="fade-up">
            It's Free
          </p>

          <div className="flex justify-center  ">
            <Link
              href="https://chrome.google.com/webstore/detail/kursor-chatgpt-and-google/ajoickdlofadbaooambnlnlbcpdnkkck"
              className=" inline-block text-white bg-gradient-to-r from-purple-400 to-purple-600 px-6 py-3 rounded-lg "
              data-aos="fade-up"
            >
              Add to Chrome
            </Link>
          </div>
        </div>

        <div data-aos="fade-up" className="md:h-[394px]  h-[200px] w-[350px]   md:w-[700px] mx-auto  ">
          <iframe
            width="100%"
            height="100%"
            className="rounded-2xl border-purple-500 border overflow-hidden"
            src="https://app.heygen.com/embeds/67c0dbb850ee4097b8c8e2e0d4320190"
            title="HeyGen video player"
            frameBorder="0"
            allow="encrypted-media; fullscreen;"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
    </section>
  );
};

export default HeroHome;
