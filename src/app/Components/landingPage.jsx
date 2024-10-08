import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LandingCard() {
  return (
    <>
      <section className="w-full flex items-center justify-center bg-white ">
        <div className="landingcard navsec w-full flex items-center justify-between flex-wrap ">
          <div className="w-full text-2xl font-semibold">How Can We Help?</div>
          <div className="card w-full flex items-center justify-between flex-wrap mt-10">
            <a href="/Pharmacy" className="w-[49%] ">
              <div className="w-full h-64 hover:bg-grehover bg-gre flex justify-between gap-4 rounded-lg">
                <div className="content p-6">
                  <h1 className="text-darkgreen font-bold font-sans">
                    Order Medicine
                  </h1>
                  <div className="para text-lightgreen mt-2 text-sm">
                    <p>Get them delivered at your doorstep</p>
                  </div>
                  <div className="dis  text-lightgreen w-full mt-6 text-sm">
                    UPTO <span className="font-bold">10%</span> OFF
                  </div>
                  <div className="mt-16 text-xl w-5 text-icngreen">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="img mt-7">
                  <img src="./card1.webp" alt="" />
                </div>
              </div>
            </a>
            <a href="/" className="w-[49%]">
              <div className="w-full h-64 bg-ble  hover:bg-blehover flex justify-between gap-4 rounded-lg">
                <div className="content p-6">
                  <h1 className="text-darkgreen font-bold font-sans">
                    Lab Tests
                  </h1>
                  <div className="para text-lightgreen mt-2 text-sm">
                    <p>Home sampling & lab bookings by Chugtai Labs</p>
                  </div>
                  <div className="dis w-full text-lightgreen mt-6 text-sm">
                    UPTO <span className="font-bold">28%</span> OFF
                  </div>
                  <div className="mt-16 w-5 text-xl text-icngreen">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
                <div className="img mt-20">
                  <img src="./card2.webp" alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="containers bg-white py-20">
        <div className="navsec w-full flex justify-between items-center flex-wrap  ">
          <div className="w-full text-[#3d6093]">Mission Statement</div>
          <div className="w-full flex  justify-between gap-5 mt-3">
            <div className="w-[35%]  text-2xl font-sans font-bold flex ">
              Aapki Sehat, Hamari Tarjeeh
            </div>
            <div className="w-[100%]">
              <div className="font-sans flex text-gray-600 items-center flex-wrap w-full">
                
                Healthwire is on a mission to make quality healthcare more
                accessible and affordable for 220 Million+ Pakistanis. We
                believe in empowering our users with the most accurate,
                comprehensive, curated information, care and enabling them to
                make better healthcare decisions.
              </div>
              <div className="w-24 py-2 mt-8 text-center cursor-pointer text-[#3d6093] border-b-2 border-[#3d6093]">Read More</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingCard;
