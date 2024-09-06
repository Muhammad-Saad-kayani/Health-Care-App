import React from "react";

function MedicineCard() {
  return (
    <>
      <section className="containers mt-20">
        <div className="navsec w-full flex items-center justify-center flex-wrap gap-4">
          <div className="w-full text-center text-[#3d6093] font-sans font-semibold">
            PHARMACY
          </div>
          <div className="w-full text-3xl font-sans font-bold text-center">
            Wide Range Of Medicines
          </div>

          <div className="w-full flex justify-between mt-5 gap-5">
            <div className="w-[48%]  bg-[#edf3fc] hover:bg-blehover cursor-pointer flex items-center justify-center flex-wrap p-5">
              <div className="w-full flex justify-center ">
                <img src="./med1.webp" alt="" width={350} />
              </div>
              <div className="w-full flex flex-wrap gap-2">
                <div className="w-full text-lg">AZOMAX 500MG TAB</div>
                <div className="w-full text-sm text-gray-500">Azithromycin</div>
                <div className="w-full flex items-center gap-5">
                  <span>Rs. 223.75 </span>{" "}
                  <span className="text-sm text-gray-500">
                    <s>Rs. 240.61</s>
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[48%] cursor-pointer flex items-center justify-between flex-wrap gap-4 ">
              <div className="w-[48%] h-72 rounded-xl bg-[#edf3fc] hover:bg-blehover p-5 flex items-center  flex-wrap justify-center gap-1">
                <div className="w-full flex items-center justify-center">
                  <img src="./med2.webp" alt="" width={150} />
                </div>
                <div className="w-full flex flex-wrap gap-2">
                <div className="w-full text-lg">
                  Risek Insta (200mg 10 Sachets)
                </div>
                <div className="w-full text-sm text-gray-500">Azithromycin</div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <span>Rs. 19.91 </span>{" "}
                  <span className="text-sm text-gray-500">
                    <s>Rs. 22.12</s>
                  </span>
                </div>
              </div>
              <div className="w-[48%] h-72 rounded-xl bg-[#edf3fc] hover:bg-blehover p-5 flex items-center  flex-wrap justify-center gap-1">
                <div className="w-full flex items-center justify-center">
                  <img src="./med3.webp" alt="" width={"90%"} />
                </div>
                <div className="w-full flex flex-wrap gap-2">
                <div className="w-full text-lg">Concor (2.5mg) 14 Tablets</div>
                <div className="w-full text-sm text-gray-500">
                  Merck Marker (Pvt) Ltd.
                </div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <span>Rs. 157.5 </span>{" "}
                  <span className="text-sm text-gray-500">
                    <s>Rs. 170.0</s>
                  </span>
                </div>
              </div>{" "}
              <div className="w-[48%] h-72 rounded-xl bg-[#edf3fc] hover:bg-blehover p-5 flex items-center  flex-wrap justify-center gap-1">
                <div className="w-full flex items-center justify-center">
                  <img src="./med4.png" alt="" width={50} />
                </div>
                <div className="w-full flex flex-wrap gap-2">
                <div className="w-full text-lg">
                  Brufen (100mg/5ml) 120ml Oral Suspension
                </div>
                <div className="w-full text-sm text-gray-500">
                  Abbot Laboratories (Pak) Ltd
                </div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <span>Rs. 105.3 </span>{" "}
                  <span className="text-sm text-gray-500">
                    <s> Rs. 117.0</s>
                  </span>
                </div>
              </div>{" "}
              <div className="w-[48%] h-72 rounded-xl bg-[#edf3fc] hover:bg-blehover p-5 flex items-center  flex-wrap justify-center gap-1">
                <div className="w-full flex items-center justify-center">
                  <img src="./med5.webp" alt="" width={50} />
                </div>
                <div className="w-full flex flex-wrap gap-2">
                <div className="w-full text-lg">
                  GAVISCON LIQUID 120ML   
                </div>
                <div className="w-full text-sm text-gray-500">Reckitt Benckiser Pak Ltd.</div>
                </div>
                <div className="w-full flex items-center gap-5">
                  <span>Rs. 179.1</span>{" "}
                  <span className="text-sm text-gray-500">
                    <s>Rs.
                    199.0</s>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MedicineCard;
