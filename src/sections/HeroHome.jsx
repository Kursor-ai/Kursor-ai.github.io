"use client";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import "aos/dist/aos.css";
import React from "react";
import "../styles/globals.css"
const HeroHome = () => {
  return (
    // <div className="bg-custome-gradient5 h-[100%] w-[100%]"> 
    <section className="section ">
      {/* Hero content */}
      <div className="pt-[30px]  flex space-y-10  md:mx-auto  text-center flex-col">
        {/* Section header */}
        <div className=" flex  flex-col  space-y-4 ">
          <h1
            className="h1  md:text-5xl text-4xl font-bold text-white leading-snug "
            data-aos="fade-up"
          >
            Search. Write. Create. Explore on one click{" "}
            <span className="text-purple-500 bg-purple-300">
              <Typewriter
                options={{
                  delay: 100,
                  loop: true, // Enable looping
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Kursor")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("AI Assistance")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Sentence 3")
                    .pauseFor(1000)
                    .start();
                }}
              />
            </span>
            {/* 
          <span className="text-purple-500">
          <Typewriter
        
        options={{
          delay: 100,
          loop: true, // Enable looping
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('Kursor')
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
      </span> */}
            {/* <span className="text-purple-500">Kursor</span> */}
          </h1>
          <p className="text-white text-xl  " data-aos="fade-up">
            Experience unlimited access to the all-in-one AI assistant with web
            access. <br /> Combining the intelligence of{" "}
            <span className="font-bold text-purple-500">
              {" "}
              ChatGPT and Google Bard
            </span>{" "}
          </p>
          <p className="text-purple-200 text-2xl " data-aos="fade-up">
            It's Free
          </p>

          <div className=" flex justify-center   ">
            <Link
              href="https://chrome.google.com/webstore/detail/kursor-chatgpt-and-google/ajoickdlofadbaooambnlnlbcpdnkkck"
             className="button"
              data-aos="fade-up"
            >
              Add to Chrome
            </Link>
          </div>
        </div>

        {/* <img alt="Guide" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" class="z-10 mt-10 lg:mt-0 mx-auto w-full lg:w-[500px] rounded-xl shadow-4xl-r shadow-sages-300" style={{color:"transparent"}} srcset="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg&amp;w=640&amp;q=75 1x, https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWqJB9S3G8C2O61ezohdGIJTQ_ofFxrmLh9HJwQ0Ao&s&amp;w=1080&amp;q=75 2x" src="/_next/image?url=%2Fimg%2Fall-min.gif&amp;w=1080&amp;q=75"></img> */}
        {/*         
        <div id="kursor" data-aos="fade-up" className="md:h-[394px] md:w-[960px] mx-auto">
            <iframe
            width="100%"
            height="100%"
            className="rounded-2xl border-purple-500 border overflow-hidden"
            src="https://www.youtube-nocookie.com/embed/k2e1wgTtGAo"
            title="HeyGen video player"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen;"
            allowFullScreen
            ></iframe> 
        </div> */}
      </div>
    </section>
    //  </div>
  );
};

export default HeroHome;
