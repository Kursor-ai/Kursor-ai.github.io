import React from "react";

const Video = () => {
  return (
    // <div className="bg-custome-gradient6">
    <div
      id="kursor"
      data-aos="fade-up"
      className="md:h-[394px]  md:w-[960px] mx-auto"
    >
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto max-w-[960px] overflow-hidden rounded-2xl border-4 border-purple-700">
            <div class="relative aspect-[77/40] items-center justify-center border-8 border-purple-500">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/g_QCAm8YMlQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    //  </div>
  );
};

export default Video;
