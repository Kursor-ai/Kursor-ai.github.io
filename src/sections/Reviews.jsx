import { Icons } from "@/icons";
import React from 'react';
import "../styles/globals.css"

const reviews = [
  {
    name: 'Anup Kumar Jaiswal', 
    noOfStars: 5,
    comment:
      'Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries.',
  },
  {
    name: 'Anup Kumar Jaiswal',
    noOfStars: 4,
    comment:
      'Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries.',
  },
  {
    name: 'Anup Kumar Jaiswal',
    noOfStars: 5,
    comment:
      'Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries. ',
  },
  {
    name: 'Anup Kumar Jaiswal',
    noOfStars: 5,
    comment:
      'Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries.',
  },
  {
    name: 'Anup Kumar Jaiswal',
    noOfStars: 5,
    comment:
      'Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries.',
  },
  {
    name: 'Anup Kumar Jaiswal',
    noOfStars: 5,
    comment:
      'Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries.',
  },
  {
    name: 'Anup Kumar Jaiswal',
    noOfStars: 5,
    comment:
      'Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries.',
  },
  {
    name: 'Anup Kumar Jaiswal',
    noOfStars: 5,
    comment:
      'Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries.',
  },
  {
    name: 'Anup Kumar Jaiswal',
    noOfStars: 5,
    comment:
      'Earlier I used to have a lot of trouble while surfing the internet, Kursor is really helping me in getting my daily tasks done. I love how I can compose emails and create summaries.',
  },

  // Add more review objects as needed
];
const Home = () => {
  return(
    <div>
      <div className=""  data-aos="fade-up">
        <div className="flex justify-center">
          <div className="w-full lg:w-9/12">
            <div className="text-center ">
              <h2 className="text-white md:text-4xl text-3xl font-bold leading-snug ">
                <span className="text-purple-500">Kursor</span> Received{" "}
                <span className="text-yellow-500"> 5/5</span> Stars from its
                users
              </h2>
            </div>
          </div>
        </div>
      </div>
       <div>
      <div className="container text-white pt-[30px]">
        <div className="scroll">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <div className="bg-[#2B3245] p-6 rounded-2xl shadow-lg border-4 border-[#11121c]">
              <h4 className="text-lg font-bold">{review.name}</h4>
              
              <div className="flex items-center mb-4 mt-4">
                {Array.from({ length: review.noOfStars }).map((_, i) => (
                  <Icons.star className="h-6 text-yellow-400 w-6" />
                ))}
                 </div>
              <p className="text-sm">{review.comment}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
    </div>
  )
   
};

export default Home;
