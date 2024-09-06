import React from "react";

function Service() {
  return (
  <>
  <section className="containers mt-20">
    <div className="navsec w-full flex justify-between flex-wrap">
        <div className="w-[49%] flex flex-col">
            <div className="w-[60%] text-[#3d6093] font-san text-sm font-semibold mt-0">HOW WE WORK</div>
            <div className="w-[60%] font-san text-2xl font-bold mt-3">Serving All Your Healthcare Needs At One Place!</div>
            <div className="w-full flex items-center gap-2 mt-5">
                <div className="px-3 py-2 text-center text-sm text-white rounded-2xl  bg-[#183155] cursor-pointer">Pharmacy</div>
                <div className="px-3 py-2 text-center text-sm text-gray-500 rounded-2xl border border-gray-400 bg-white cursor-pointer">Lab Tests</div>
                <div className="px-3 py-2 text-center text-sm text-gray-500 rounded-2xl border border-gray-400 bg-white cursor-pointer">Doctor Appointments</div>

            </div>
            <div className="w-[60%] font-san text-lg font-semibold mt-6">Order in three easy steps!</div>
            <div className="w-full ">
                <ul className="list-disc ml-4 marker:text-blue-500 leading-8">
                    <li>Search and select your medicine</li>
                    <li>Enter your details to confirm your order </li>
                    <li>Sit back and your medicine will be delivered at your doorstep</li>
                </ul>
            </div>
        </div>
        <div className="w-[49%] flex justify-center flex-wrap"><img src="./med6.webp" alt="" /></div>
    </div>
  </section>
  </>
  )
}

export default Service;
