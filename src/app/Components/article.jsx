import React from "react";

function Article() {
  return (
    <section className="containers py-20 bg-white">
      <div className="navsec w-full flex items-center justify-between flex-wrap gap-2">
        <div className="w-full text-center text-[#3d6093] font-sans text-sm font-semibold">
          NEWS & ARTICLES
        </div>
        <div className="w-full text-center text-2xl font-bold font-sans">
          Read Top Articles Of The Day
        </div>
        <div className="w-full text-center text-sm mt-2 text-gray-500">
          Health articles that keep you informed about good health practices and
          achieve your goals.
        </div>
        <div className="w-full flex  justify-between flex-wrap mt-5 gap-5">
            <div className="w-[32%]">
                <div className="cursor-pointer"><img src="./med7.jpg" alt="" className="rounded-xl" /></div>
                <div className="-w-full font-sans text-[0.8rem] mt-2 text-green-800">Pain Management</div>
                <div className="w-full font-sans text-[0.9rem] mt-2 font-semibold">Difference Between Physical Therapy and Rehabilitation – Read to Learn!</div>

            </div>
            <div className="w-[32%]">
                <div className="cursor-pointer"><img src="./med8.jpg" alt="" className="rounded-xl" /></div>
                <div className="-w-full font-sans text-[0.8rem] mt-2 text-green-800">General Health</div>
                <div className="w-full font-sans text-[0.9rem] mt-2 font-semibold">How to Stop Hiccups – Easy Tips and Tricks to Try</div>

            </div> <div className="w-[32%]">
                <div className="cursor-pointer"><img src="./med9.jpg" alt="" className="rounded-xl" /></div>
                <div className="-w-full font-sans text-[0.8rem] mt-2 text-green-800">Herbal Health</div>
                <div className="w-full font-sans text-[0.9rem] mt-2 font-semibold">Homeopathy Vs Allopathy – Which Approach Works Best?</div>

            </div>
            <div className="w-full flex items-center justify-center mt-2"><button className='px-4 py-2 text-white rounded-lg bg-[#1e4275]'>View All</button></div>
        </div>
      </div>
    </section>
  );
}

export default Article;
