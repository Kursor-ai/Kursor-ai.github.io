import Link from "next/link";
import Image from "next/image";
import { assetLinkGenerator } from "@/lib/utils";
const Ctc = () => {
  return (
    <div className="section">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 mt-28">
        <h1
          className="font-bold md:text-5xl text-4xl text-white leading-snug"
          data-aos="fade-up"
        >
          Using <span className="text-purple-500">Kursor</span> you can save
          hours each week while surfing the net.
        </h1>
      </div>

      <div className="flex justify-center space-x-4">
        <Link
          href="https://chrome.google.com/webstore/detail/kursor-chatgpt-and-google/ajoickdlofadbaooambnlnlbcpdnkkck"
          className=" inline-block text-white bg-gradient-to-r from-purple-400 to-purple-600 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
       Add to Chrome
        </Link>
      </div>

      {/* Hero image */}
      <Image
        src={assetLinkGenerator('/product_images/kursorlight_m5nd7n')}
        alt="Info Image"
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
         
        className="border-2 border-purple-400 mt-16  w-full h-auto rounded-2xl"
        data-aos="fade-up"
      />
    </div>
  );
};

export default Ctc;
