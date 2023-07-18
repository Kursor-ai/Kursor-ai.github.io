"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Icons } from "@/icons";

const Reviews = () => {
  const noOfStars = 5;

  const reviews = [
    {
      name: "Divyanshi Tiwari",
      content:
        "A breakthrough technology! Highly innovative and advanced. Great catalyst for boosting productivity exponentially, especially for students. Moreover, it's easy to use.",
    },
    {
      name: "Anup Kumar Jaiswal",
      content:
        "Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries. It has made the GPT functionalities quite handy.",
    },
    {
      name: "Tony Stark",
      content:
        "Kursor is an amazing AI tool that can supercharge your productivity and make content creation a breeze. It quickly generates high-quality content and is perfect for those who need to produce a lot of content on a regular basis.",
    },
    {
      name: "ANUPAM GUPTA",
      content:
        "Really good feature, I love how I can easily use chatgpt in my day to day life with the help of this",
    },
    {
      name: "ANUPAM GUPTA",
      content:
        "Really good feature, I love how I can easily use chatgpt in my day to day life with the help of this",
    },
    {
      name: "ANUPAM GUPTA",
      content:
        "Really good feature, I love how I can easily use chatgpt in my day to day life with the help of this",
    },
    {
      name: "ANUPAM GUPTA",
      content:
        "Really good feature, I love how I can easily use chatgpt in my day to day life with the help of this",
    },
    {
      name: "ANUPAM GUPTA",
      content:
        "Really good feature, I love how I can easily use chatgpt in my day to day life with the help of this",
    },
    {
      name: "ANUPAM GUPTA",
      content:
        "Really good feature, I love how I can easily use chatgpt in my day to day life with the help of this",
    },
  ];

  const customButtonStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "2%",
    height: "8%",
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: "2",
  };
  const prevButtonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24px"
      height="24px"
    >
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
    </svg>
  );

  const nextButtonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24px"
      height="24px"
    >
      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" />
    </svg>
  );

  const renderReviews = () => {
    const chunkedReviews = [];
    const chunkSize = 3;

    for (let i = 0; i < reviews.length; i += chunkSize) {
      chunkedReviews.push(reviews.slice(i, i + chunkSize));
    }

    return chunkedReviews.map((chunk, index) => (
      <div
        className=" p-6 rounded-2xl shadow-lg h-full"
        data-aos="fade-up"
        key={index}
      >
        <div className="flex gap-x-[26px] h-full">
          {chunk.map((review, innerIndex) => (
            <div
              className="w-full md:w-1/3 flex flex-col justify-between rounded-2xl p-3 bg-[#2B3245]"
              key={innerIndex}
            >
              <div>
                <h4 className="text-white text-start text-lg font-bold">
                  {review.name}
                </h4>
                <div className="flex items-start justify-start mb-2">
                  {Array.from({ length: noOfStars }).map((_, i) => (
                    <Icons.star className="h-6 text-yellow-400 w-6" key={i} />
                  ))}
                </div>
                <p className="text-white text-start text-sm">
                  {review.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <section id="reviews" className="section">
      <div className="" data-aos="fade-up">
        <div className="flex justify-center mb-18">
          <div className="w-full lg:w-9/12">
            <div className="text-center">
              <h2 className="text-white text-3xl leading-snug font-bold">
                <span className="text-purple-500">Kursor</span> Received{" "}
                <span className="text-yellow-500">5/5</span> Stars from its
                users
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        interval={10000}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...customButtonStyles, left: 0 }}
            >
              {prevButtonIcon}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              style={{ ...customButtonStyles, right: 0 }}
            >
              {nextButtonIcon}
            </button>
          )
        }
      >
        {renderReviews()}
      </Carousel>
    </section>
  );
};

export default Reviews;
