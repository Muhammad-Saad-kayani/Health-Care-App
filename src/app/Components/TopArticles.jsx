import React from 'react';

export const Cardsdata = [
  {
    img: "/best-acne.jpg",
    title: "Drugs & Medications",
    price: "Breeky Tablet Uses, Side Effects!"
  },
  {
    img: "/breeky.jpg",
    title: "Health Alerts",
    price: "All You Need To Know About Eye"
  },
  {
    img: "/eye-twitching.jpg",
    title: "Skin Care",
    price: "Best Acne Creams in Pakistan"
  }
];

const TopArticles = () => {
  return (
    <>
      <div className="bg-[#EBFAF8] w-full">
        <p className="mt-5 pt-8 containers font-extrabold text-xl">
          Read Top Articles Of The Day
        </p>
        <span className="containers text-gray-500">
          Health articles that keep you informed about good health practices and
        </span>
        <p className="containers text-gray-500">achieve your goals.</p>

        <section className="w-full flex justify-center">
          <div className="navsec w-full containers max-w-6xl justify-items-center pt-8 grid md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
            {Cardsdata.map((card, index) => (
              <div key={index} className="p-4 shadow-sm flex flex-col items-center text-center"> 
                <div className="bg-slate-100 w-full h-28 flex justify-center items-center">
                  <img
                    className="w-80 h-52 mt-8 border border-black rounded-xl bg-slate-300 cursor-pointer"
                    src={card.img}
                    alt={card.title}
                  />
                </div>
                <p className="PARA pt-4 mt-14 text-blue-700 text-xs">{card.title}</p>
                <p className="text-lg pt-2">{card.price}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="flex justify-center mt-8">
          <button className="border border-blue-950 rounded-sm px-10 py-3 text-blue-500 hover:bg-blue-100 mb-5">View All Blogs</button>
        </div>
      </div>
    </>
  );
};

export default TopArticles;
