import { Icons } from "@/icons";

export const features = [
  {
    title: "Explore",
    description:
      "Want to know more? Select it, right click and explore instant information using Kursor AI.",
    iconImg: "/v1685969240/web_assets/icons/exploreicon_barvn3",
  },
  {
    title: "Compose",
    description:
      "Want help in writing? Brainstorm and create your own content smoothly with guidance",
    iconImg: "/v1685969240/web_assets/icons/composeicon_ubs34j",
  },
  {
    title: "Chat",
    description:
      "Need someone to talk? Chat with Kursor AI and get the solution to all your problems.",
    iconImg: "/v1685969240/web_assets/icons/chaticon_heuxzh",
  },
];

export const featureDetails = [
  {
    id: 0,
    title: (
      <>
        Real Time Web Data Access Inside{" "}
        <span className="  text-purple-500">Chat</span> Window
      </>
    ),
    description: (
      <>
        <p className="mb-6 text-gray-400 leading-normal">
          Revolutionize the way you compose emails, replies, poems, blogs,
          articles, and more. Experience the future of writing with our
          AI-powered composition feature and elevate your writing to new
          heights.
        </p>
        <ul className="list-disc list-inside mb-8">
          <li className="flex items-center text-gray-400">
            <Icons.check />
            <span className="text-gray-400 ml-2 mt-1">
              Increased productivity & Confidence-Boosting
            </span>
          </li>
          <li className="flex items-center text-gray-400">
            <Icons.check />

            <span className="text-gray-400 ml-2 mt-1">
              Versatile Writing Support with contextual understanding
            </span>
          </li>
          <li className="flex items-center  text-gray-400">
            <Icons.check />

            <span className="text-gray-400 ml-2 mt-1">
              Instant Personalized Compositions & Grammar, Spell checks
            </span>
          </li>
        </ul>
      </>
    ),
    cta: "Try Compose Feature",
    featureImg: "/v1685972975/web_assets/features/feature1_pcyoui",
  },
  {
    id: 1,
    title: (
      <>
        Say Goodbye to Tedious Browsing: Get Instant AI-Powered{" "}
        <span className="text-purple-500">Search</span> Responses
      </>
    ),
    description: (
      <p className="mb-6 text-gray-400 leading-normal">
        With Kursor, get instant responses to your Google searches using either
        ChatGPT or Bard, based on your preference. No more hopping between
        numerous websites for answers!
      </p>
    ),
    cta: "Try AI Powered Search",
    featureImg: "/v1685972975/web_assets/features/feature2_tl08z7",
  },
  {
    id: 2,
    title: (
      <>
        Real Time Web Data Access Inside{" "}
        <span className="  text-purple-500">Chat</span> Window
      </>
    ),
    description: (
      <>
        <p className="mb-6 text-gray-400 leading-normal">
          Experience the seamless integration of AI-powered chat into your
          browsing experience with Kursor. Switch effortlessly between ChatGPT
          and Bard, benefiting from their distinct functionalities. The "web
          access" feature adds an extra layer of depth to ChatGPT's responses,
          incorporating web data to provide you with even more informative and
          engaging conversations.
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
      </>
    ),
    cta: "Try Chat Feature",
    featureImg: "/v1685972975/web_assets/features/feature3_alng6l",
  },
];
