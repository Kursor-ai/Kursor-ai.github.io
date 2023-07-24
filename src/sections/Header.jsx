"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { siteConfig } from "@/config/site";

const Header = ({ home }) => {
  const [isHomePage, setIsHomePage] = useState(false);
  const [isPrivacyPage, setIsPrivacyPage] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");
    setIsPrivacyPage(window.location.pathname === "/privacy");
  }, []);

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <header className=" bg-black top-0 left-0 right-0 w-full z-30 fixed">
      <div className="md:max-w-7xl w-screen  md:mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[65px]">
          {/* Desktop navigation */}
          <nav className=" flex grow">
            {/* Logo */}
            <Link href="/" className="flex  items-center  gap-3">
              <Image
                src={"/logo.webp"}
                alt="Kursor Logo"
                width={40}
                height={40}
                className=""
              />
              <span className="text-xl font-bold text-purple-500">Kursor</span>
            </Link>

            <ul className="flex grow justify-end flex-wrap items-center">
              <li className={home ? "hidden" : ""}>
                <Link
                  href="/"
                  className={`px-8 py-4 text-sm font-semibold text-white ${
                    isHomePage ? "bg-purple-500" : ""
                  } rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                >
                  Home
                </Link>
              </li>
              {/* <li className={home ? "" : "hidden"}>
                <Link
                  href="#feature1"
                  className={`py-4 px-4 text-sm text-bold ${
                    isPrivacyPage
                      ? "text-white bg-purple-500"
                      : "text-purple-400"
                  } rounded-md hover:text-white`}
                >
                  Features
                </Link>
              </li> */}
              {/* <li className={home ? "" : "hidden"}>
                <Link
                  href="#reviews"
                  className={`py-4 px-4 text-sm text-bold ${
                    isPrivacyPage
                      ? "text-white bg-purple-500"
                      : "text-purple-400"
                  } rounded-md hover:text-white`}
                >
                  Reviews
                </Link>
              </li> */}
              {/* <li className={home ? "" : "hidden"}>
                <Link
                  href="#faq"
                  className={`py-4 px-4 text-sm text-bold ${
                    isPrivacyPage
                      ? "text-white bg-purple-500"
                      : "text-purple-400"
                  } rounded-md hover:text-white`}
                >
                  Faq's
                </Link>
              </li> */}
              <li className={home ? "" : "hidden"}>
                <Link
                  href="/privacy"
                  className={`py-4 px-4 text-sm text-bold ${
                    isPrivacyPage
                      ? "text-white bg-purple-500"
                      : "text-purple-400"
                  } rounded-md hover:text-white`}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
