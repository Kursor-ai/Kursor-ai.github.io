import { siteConfig } from "@/config/site";
import { Icons } from "@/icons";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    
      <footer className="bg-striped ml-24 mt-20 pt-10 pt-lg-15">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-9 xl:col-span-8 order-2 lg:order-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-0">
                <div className="footer-widget text-center md:text-left ml-16">
                  <h6 className="text-white mb-2">Kursor</h6>

                  <ul className="link-list list-unstyled mb-0 text-gray-500">
                    <li className="mt-2 text-sm">
                      <Link href="/privacy" className="hover:text-purple-500">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-widget text-center md:text-left ml-8">
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

                <div className="footer-widget text-center md:text-left ml-8">
                  <h6 className="text-white mb-4">News &amp; Update</h6>
                  {/* <form action="#">
                    <div className="flex items-center mt-6">
                      <input
                        type="email"
                        className="form-control py-3 px-2 rounded-l-lg"
                        placeholder="Enter your email"
                      />
                      <button
                        className="py-3 px-4 bg-purple-500 border-purple-400 border-2 rounded-r-lg "
                        type="button"
                      >
                        <Icons.send 
                          className="text-white"
                        />
                      </button>
                    </div>
                  </form> */}
                  <ul className="list-unstyled  flex flex-wrap align-center justify-start justify-md-start gap-3 social-list mb-0 mt-6">
                    <Link href={siteConfig.links.linkedIn}>
                      <Icons.linkedIn
                        className={"text-gray-500 hover:text-purple-500 h-5 w-5"}
                      />
                    </Link>

                    <Link href={siteConfig.links.twitter}>
                      <Icons.twitter
                        className="ml-5 text-gray-500 hover:text-purple-500 h-5 w-5"
                      />
                    </Link>

                    <Link href={siteConfig.links.facebook}>
                    <Icons.facebook
                        className="ml-5 text-gray-500 hover:text-purple-500 h-5 w-5"
                      />
                    </Link>

                    <Link href={siteConfig.links.instagram}>
                    <Icons.instagram
                        className="ml-5 text-gray-500 hover:text-purple-500 h-5 w-5"
                      />
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 order-1 lg:order-1 ml-auto">
              <div className="footer-widget text-center lg:text-left">
                <div className="flex items-center">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src={siteConfig.logo}
                      alt="Kursor Logo"
                      width={50}
                      height={50}
                      className="img-fluid"
                    />
                    <span className="text-2xl font-bold text-purple-500">
                      Kursor
                    </span>
                  </Link>
                </div>

                <p className="fs-sm mb-0 mt-4 text-sm text-gray-500 w-3/2">
                  Experience unlimited access to the all-in-one AI assistant
                  with web access - combining the intelligence of ChatGPT and
                  Google Bard.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center py-6 mt-8">
            <p className="fs-sm mb-0 text-gray-400 text-sm mr-36">
              Copyright ©<span className="text-purple-500"> Kursor </span> 2023
            </p>
          </div>
        </div>
      </footer>
 
  );
};

export default Footer;
