"use client";
import React, { useState } from "react";

const Accordion = ({ index, title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-400" data-aos="fade-up">
      <button
        type="button"
        className="flex justify-between items-center w-full px-4 py-3 text-2xl mb-4 font-medium text-left bg-black text-white hover:text-purple-500 focus:outline-none focus:bg-black transition duration-150 ease-in-out"
        onClick={() => onToggle(index)}
      >
        <span>{title}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-black text-gray-500 text-lg">{content}</div>
      )}
    </div>
  );
};

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const accordions = [
    {
      title: "Why is Kursor better than bard and chatgpt? ",
      content: (
        <div>
          Kursor offers several advantages over using ChatGPT and Bard
          independently, largely due to its enhanced integration and expanded
          features. Let's break it down:
          <br />
          <br />
          <span className=" text-purple-300">
            1. Browser-integrated AI Chat
          </span>
          <br />
          <span className=" text-purple-300">
            2. Seamless Experience and Enhanced Functionality
          </span>
          <br />
          <span className=" text-purple-300">
            3. Simplified and Streamlined Writing Experience
          </span>
          <br />
          <br />
          In a nutshell, while ChatGPT and Bard are powerful tools individually,
          Kursor's unique blend of these AI capabilities, coupled with seamless
          browser integration and extended functionalities, creates a more
          efficient and user-friendly environment. This makes Kursor a more
          comprehensive solution for those who value convenience, quick
          information access, and engaging AI interactions.
        </div>
      ),
    },
    {
      title: "What is Kursor’s Browser-integrated AI Chat? ",
      content: (
        <div>
          <span className=" text-purple-300">
            {" "}
            1. Browser-integrated AI Chat:{" "}
          </span>{" "}
          Kursor combines ChatGPT and Bard in your browser, offering convenience
          and versatility. With Kursor's web mode, ChatGPT can provide
          contextual and informative responses using web data. No need to switch
          between different models or leave your browser.
          <br />
          <br />
          <span className=" text-purple-300">
            2. Immediate Search Responses:
          </span>{" "}
          Start by typing your query into Google. As you search, Kursor will
          instantly provide AI-powered responses using either ChatGPT or Bard.
          This immediate feedback saves time as you no longer have to visit
          multiple websites to find your answer.
        </div>
      ),
    },

    {
      title: "How can Kursor help in writing my blogs or e-mails?",
      content: (
        <div>
          <span className=" text-purple-300">
            {" "}
            1. One-Click Content Creation:
          </span>{" "}
          Easily write down your thoughts or ideas and insert them into any
          webpage with a single click. Kursor provides a simple solution for all
          your writing needs, whether it's composing emails, brainstorming blog
          posts, or crafting stories. <br />
          <br />
          <span className=" text-purple-300">
            2. Simplified Writing Experience:
          </span>
          Composing content directly in the browser becomes effortless,
          transforming your writing process. Define the topic, length, and tone,
          and Kursor generates personalized compositions instantly. With
          built-in grammar and spell checks, it offers a user-friendly writing
          aid, surpassing the convenience of using ChatGPT and Bard separately.
        </div>
      ),
    },

    {
      title: "What more can I do with Kursor? ",
      content: (
        <div>
          Kursor is a powerful AI assistant that helps you find answers,
          solutions, create and explore while surfing the internet. It generates
          responses, emails, and articles to make your life easier. Whether
          you're a student or a working individual, Kursor can assist you in
          finding the right answers, summarizing, and taking notes. Features of
          your AI assistant :
          <br />
          <br />
          <span className=" text-purple-300">
            1. AI Chat at Your Fingertips :
          </span>
          Whether you want to ask questions, have a conversation, or require
          assistance, the chat window is readily available. <br />
          <br />
          <span className=" text-purple-300">
            2. Immediate Search Responses :
          </span>
          Saves time as you no longer have to visit multiple websites to find
          your answer.
          <br />
          <span className=" text-purple-300">
            3. One-Click Content Creation :
          </span>
          Compose an email, brainstorm blog post ideas, craft a bedtime story,
          or more, Kursor facilitates an easy, one-click solution for your
          writing needs.
          <br />
          <span className=" text-purple-300">
            4. Effortless Text Processing :
          </span>
          Kursor facilitates an easy, one-click solution for your writing needs.
          <br />
          Remember, Kursor is designed to enhance your browsing experience, so
          take full advantage of these features as you navigate the web.
        </div>
      ),
    },
  ];

  const handleToggleAccordion = (index) => {
    if (index === openIndex) {
      setOpenIndex(-1); // close the accordion if it's already open
    } else {
      setOpenIndex(index); // open the clicked accordion and close the others
    }
  };

  return (
    <div className="mr-96 ml-96 mt-32">
      <div className="container" data-aos="fade-up">
        <div className="flex justify-center mb-18">
          <div className="w-full lg:w-10/12">
            <div className="text-center">
              <h1
                className="mb-20 text-white text-5xl font-bold leading-snug"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                Questions About<span className="text-purple-500"> Kursor </span>{" "}
                We have Answers!
              </h1>
            </div>
          </div>
        </div>
      </div>

      {accordions.map((accordion, index) => (
        <Accordion
          key={index}
          index={index}
          title={accordion.title}
          content={accordion.content}
          isOpen={openIndex === index}
          onToggle={handleToggleAccordion}
        />
      ))}
    </div>
  );
};

export default AccordionSection;
