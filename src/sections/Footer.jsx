import { siteConfig } from "@/config/site";
import { Icons } from "@/icons";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-striped section">
      <div className="flex md:flex-row md:justify-between items-start flex-col gap-10">
        <div className="footer-widget md:flex-[0.35]">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={siteConfig.logo}
                alt="Kursor Logo"
                width={50}
                height={50}
                className="img-fluid"
              />
              <span className="text-2xl font-bold text-purple-500">Kursor</span>
            </Link>
          </div>

          <p className=" text-sm break-words  text-gray-500 ">
            Experience unlimited access to the all-in-one AI assistant with web
            access - combining the intelligence of ChatGPT and Google Bard.
          </p>
        </div>
        <div className="footer-widget ">
          <h6 className="text-white mb-2">Kursor</h6>

          <ul className="link-list list-unstyled mb-0 text-gray-500">
            <li className="mt-2 text-sm">
              <Link href="/privacy" className="hover:text-purple-500">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-widget ">
          <h6 className="text-white mb-2">Use Cases</h6>
          <ul className="link-list list-unstyled mb-0 text-gray-500 ">
            <li className="text-sm">
              <Link href="#feature1" className="hover:text-purple-500">
                Feature 1
              </Link>
            </li>

            <li className="mt-3 text-sm">
              <Link href="#feature2" className="hover:text-purple-500">
                Feature 2
              </Link>
            </li>
            <li className="mt-3 text-sm">
              <Link href="#feature3" className="hover:text-purple-500">
                Feature 3
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-widget ">
          <h6 className="text-white mb-4">News &amp; Update</h6>
          <ul className="list-unstyled  flex flex-wrap  items-center gap-3 social-list mb-0 mt-6">
            <Link href={siteConfig.links.linkedIn}>
              <Icons.linkedIn
                className={"text-gray-500 hover:text-purple-500 h-5 w-5"}
              />
            </Link>

            <Link href={siteConfig.links.twitter}>
              <Icons.twitter className="ml-5 text-gray-500 hover:text-purple-500 h-5 w-5" />
            </Link>

            <Link href={siteConfig.links.facebook}>
              <Icons.facebook className="ml-5 text-gray-500 hover:text-purple-500 h-5 w-5" />
            </Link>

            <Link href={siteConfig.links.instagram}>
              <Icons.instagram className="ml-5 text-gray-500 hover:text-purple-500 h-5 w-5" />
            </Link>
          </ul>
        </div>
      </div>
      <div className="text-center py-6 mt-8">
        <p className="fs-sm mb-0 text-gray-400 text-sm ">
          Copyright ©<span className="text-purple-500"> Kursor </span> 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
