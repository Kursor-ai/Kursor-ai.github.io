import Image from "next/image";
import Link from "next/link";
import logo from "../images/latestlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <main className="ml-24 mt-20">
      <footer className="bg-striped pt-10 pt-lg-15">
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
                  <form action="#">
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
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className="text-white"
                        />
                      </button>
                    </div>
                  </form>
                  <ul className="list-unstyled d-flex flex-wrap align-center justify-center justify-md-start gap-3 social-list mb-0 mt-6">
                    <Link href="https://www.linkedin.com/in/kursor-ai-43249b271/">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        color="gray"
                        className="text-xl"
                      />
                    </Link>

                    <Link href="https://twitter.com/kursorai">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        color="gray"
                        className="ml-5 text-xl"
                      />
                    </Link>

                    <Link href="https://www.facebook.com/profile.php?id=100092308844971">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        color="gray"
                        className="ml-5  text-xl"
                      />
                    </Link>

                    <Link href="https://www.instagram.com/kursorai/">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        color="gray"
                        className="ml-5  text-xl"
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
                      src={logo}
                      alt="GenAI Logo"
                      width={135}
                      height={34}
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
    </main>
  );
};

export default Footer;
