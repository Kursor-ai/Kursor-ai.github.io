import { Icons } from "@/icons";

const Reviews = () => {
  const noOfStars = 5;
  return (
    <section className="mr-32 ml-32 mt-32">
      <div className="container" data-aos="fade-up">
        <div className="flex justify-center mb-18">
          <div className="w-full lg:w-9/12">
            <div className="text-center text-5xl">
              <h1 className="text-white leading-snug font-bold">
                <span className="text-purple-500">Kursor</span> Received{" "}
                <span className="text-yellow-500"> 5/5</span> Stars from its
                users
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-20">
        <div className="bg-white p-6 rounded-lg shadow-lg border-2">
          <h4 className=" text-lg font-bold">Divyanshi Tiwari</h4>
          {/* <p className="text-white mb-4">Web Developer</p> */}
          <div className="flex items-center mb-4 mt-4">
            {Array.from({ length: noOfStars }).map((_, i) => (
              <Icons.star className={"h-6 text-yellow-400 w-6"} />
            ))}

            {/* <span className="text-white font-bold">5</span> */}
          </div>
          <p className=" text-sm">
            A breakthrough technology! Highly innovative and advanced. Great
            catalyst for boosting productivity exponentially, especially for
            students. Moreover, it's easy to use.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-2">
          <h4 className=" text-lg font-bold">Anup Kumar Jaiswal</h4>
          {/* <p className="text-white mb-4">Graphic Designer</p> */}
          <div className="flex items-center mb-4 mt-4">
            {Array.from({ length: noOfStars }).map((_, i) => (
              <Icons.star className={"h-6 text-yellow-400 w-6"} />
            ))}

            {/* <span className="text-white font-bold">5</span> */}
          </div>
          <p className="text-sm">
            Earlier I used to have a lot of trouble while surfing the internet,
            Kursor is really helping me in getting my daily tasks done. I love
            how I can compose emails and create summaries. It has made the GPT
            functionalities quite handy.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-2">
          <h4 className=" text-lg font-bold">Tony Stark</h4>
          {/* <p className="text-white mb-4">Graphic Designer</p> */}
          <div className="flex items-center mb-4 mt-4">
            {Array.from({ length: noOfStars }).map((_, i) => (
              <Icons.star className={"h-6 text-yellow-400 w-6"} />
            ))}

            {/* <span className="text-white font-bold">5</span> */}
          </div>
          <p className=" text-sm">
            Kursor is an amazing AI tool that can supercharge your productivity
            and make content creation a breeze. It quickly generates
            high-quality content and is perfect for those who need to produce a
            lot of content on a regular basis. The best part? It can be
            customized to fit your specific needs. If you're looking to increase
            your efficiency and take your work to the next level, I highly
            recommend giving kursor a try. You won't be disappointed!
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border-2">
          <h4 className=" text-lg font-bold">ANUPAM GUPTA</h4>
          {/* <p className="text-white mb-4">Graphic Designer</p> */}
          <div className="flex items-center mb-4 mt-4">
            {Array.from({ length: noOfStars }).map((_, i) => (
              <Icons.star className={"h-6 text-yellow-400 w-6"} />
            ))}

            {/* <span className="text-white font-bold"></span> */}
          </div>
          <p className=" text-sm">
            Really good feature , I love how I can easily use chatgpt in my day
            to day life with the help of this
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
