import React from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Cbc() {
  return (
    <>
      <NavBar />

      <section className="containers mt-40 bg-white">
        <div className="navsec w-full flex  justify-between flex-wrap gap-2">
         <div className="w-full flex justify-between">
         <div className="w-[60%] flex  flex-wrap gap-5">
         <div className="w-full text-3xl text-[#183155] font-sans font-bold">CBC BLOOD TEST</div>
            </div>   
         <div className="w-[35%] flex justify-end">
            <div className="w-[380px] border-1 rounded-lg bg-[#edf3fc] flex p-6 flex-wrap">
                <div className="w-full font-sans text-md font-bold text-[#1e4275]">Book this lab test?</div>
                <div className="w-full flex justify-between mt-4">
                    <div className="w-[50%] font-sans text-sm">CBC blood test</div>
                    <div className="w-[50%] text-end text-sm "><span className="font-bold ">Rs. 680.0</span> <s>Rs.800</s></div>

                </div>
                <div className="w-full flex justify-end mt-4">
                    <button className="text-sm border-2 p-2 h-8 flex items-center text-[#1e4275] rounded-sm border-[#1e4275]">Add to cart</button>
                </div>
                <div className="w-full flex justify-between mt-10">
                    <div className="w-[49%]">
                    <button className="w-full text-sm border-2 p-2 h-10 flex items-center justify-center  text-[#1e4275] rounded-sm border-[#1e4275]">Back to Tests</button>
                    </div>
                    <div className="w-[49%] flex justify-end">
                    <button className="w-full text-sm border-2 p-2 h-10 flex items-center justify-center text-white rounded-sm bg-[#1e4275] border-[#1e4275]">Checkout</button>
                    </div>

                </div>
            </div>
         </div>
         </div>
        </div>
     
      </section>

      {/* <Footer /> */}
    </>
  );
}

export default Cbc;
