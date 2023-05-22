import Image from "next/image";
import exploreImg from "../images/explore (6).png";
import composeImg from "../images/writing (1).png";
import chatImg from "../images/chat (1).png";
const Feature = () => {
  return (
    <main className="mr-28 ml-28 mt-10">
      <section className="py-10 py-lg-15">
        <div className="container">
          <div className="text-center mb-18">
            <h1
              className="mb-0 text-white text-5xl font-bold leading-normal"
              data-aos="fade-up"
            >
              Feel the power of AI, get everything on a click at{" "}
              <span className="text-purple-500">Kursor</span>
            </h1>
            <p className="text-white mt-5 text-2xl" data-aos="fade-up">
              Discover the power of AI technology with Kursor's one-click access
              to everything you need.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-14 mt-20">
            <div
              className="flex flex-col gap-6 lg:flex-row"
              data-aos="fade-up-sm"
              data-aos-delay="200"
            >
              <div className="flex-shrink-0 flex items-center justify-center rounded-lg p-2 border bg-purple-200 text-black border-white border-opacity-25 h-12 w-12 ">
                <Image
                  src={exploreImg}
                  alt="Generates quality contents"
                  className="rounded-lg"
                  width={50}
                  height={32}
                />
              </div>

              <div className="content">
                <h4 className="mb-4 text-white text-2xl font-bold">Explore</h4>
                <p className="text-gray-400">
                  Want to know more? Select it, right click and explore instant
                  information using Kursor AI
                </p>
              </div>
            </div>
            <div
              className="flex flex-col gap-6 lg:flex-row"
              data-aos="fade-up-sm"
              data-aos-delay="250"
            >
              <div className="flex-shrink-0 flex items-center justify-center rounded-lg p-2 border bg-purple-200 text-black border-white border-opacity-25 h-12 w-12 ">
                <Image
                  src={composeImg}
                  alt="Generates quality contents"
                  className="rounded-lg"
                  width={50}
                  height={32}
                />
              </div>
              <div className="content">
                <h4 className="mb-4 text-white text-2xl font-bold">Compose</h4>
                <p className="text-gray-400">
                  Want help in writing? Brainstorm and create your own content
                  smoothly with guidance
                </p>
              </div>
            </div>
            <div
              className="flex flex-col gap-6 lg:flex-row"
              data-aos="fade-up-sm"
              data-aos-delay="300"
            >
              <div className="flex-shrink-0 flex items-center justify-center rounded-lg p-2 border bg-purple-200 text-black border-white border-opacity-25 h-12 w-12 ">
                <Image
                  src={chatImg}
                  alt="Generates quality contents"
                  className="rounded-lg"
                  width={50}
                  height={32}
                />
              </div>
              <div className="content">
                <h4 className="mb-4 text-white text-2xl font-bold">Chat</h4>
                <p className="text-gray-400">
                  Need someone to talk? Chat with Kursor AI and get all the
                  solution to your problem
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Feature;
