import React from 'react';

import TestimonialImage01 from '../images/testimonial-01.jpg';
import TestimonialImage02 from '../images/testimonial-02.jpg';
import TestimonialImage03 from '../images/testimonial-03.jpg';

function Testimonials() {
  //return (
//     <section>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">
//         <div className="py-12 md:py-20 border-t border-gray-800">

//           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//             <h2 className="h2 mb-4">Don't take our word for it</h2>
//             <p className="text-xl text-gray-400">Some Testimonials</p>
//           </div>
//           <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

//             <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
//               <div>
//                 <div className="relative inline-flex flex-col mb-4">
//                   <img className="rounded-full" src={TestimonialImage01} width="48" height="48" alt="Testimonial 01" />
//                     <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-900" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
//                       <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
//                     </svg>
//                         </div>
//                 </div>
//                 <blockquote className="text-lg text-gray-400 grow">— Kursor.ai has truly transformed the way I work on my computer. With their innovative product, I can access everything I need with just a click. Their use of GPT technology is truly impressive and I can't imagine going back to the old way of using a cursor. I highly recommend Kursor.ai to anyone looking to streamline their computer experience.</blockquote>
//                 <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
//                   <cite className="text-gray-200 not-italic">Sophia</cite> 
//                 </div>
//               </div>

//               <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
//                 <div>
//                   <div className="relative inline-flex flex-col mb-4">
//                     <img className="rounded-full" src={TestimonialImage02} width="48" height="48" alt="Testimonial 02" />
//                       <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-900" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
//                       </svg>
//                         </div>
//                   </div>
//                   <blockquote className="text-lg text-gray-400 grow">— I was skeptical at first about Kursor.ai's claims to revolutionize the cursor, but after using their product I am a believer. The power of AI is evident in the way their cursor anticipates my needs and makes my work more efficient. I am excited to see where Kursor.ai goes in the future and can't wait to see what other innovations they come up with.</blockquote>
//                   <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
//                     <cite className="text-gray-200 not-italic">Ethan</cite> 
//                   </div>
//                 </div>

//                 <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
//                   <div>
//                     <div className="relative inline-flex flex-col mb-4">
//                       <img className="rounded-full" src={TestimonialImage03} width="48" height="48" alt="Testimonial 03" />
//                         <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-900" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
//                         </svg>
//                         </div>
//                     </div>
//                     <blockquote className="text-lg text-gray-400 grow">— As someone who spends hours every day working on a computer, I can honestly say that Kursor.ai has made my life easier. Their product has allowed me to access everything I need with just a few clicks, saving me time and energy. I am grateful for their use of cutting-edge technology and look forward to seeing what they do next.</blockquote>
//                     <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
//                       <cite className="text-gray-200 not-italic">Benjamin</cite> 
//                     </div>
//                   </div>

//                 </div>

//               </div>
//             </div>
// </section>
  //);
}

export default Testimonials;
