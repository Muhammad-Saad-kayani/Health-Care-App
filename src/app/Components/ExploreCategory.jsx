import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Cardsdata = [
  {
    img: "/trolly.png",
    title: "Featured Medicines",
  },
  {
    img: "/handmed.png",
    title: "Over The Counter Medicines",
  },
  {
    img: "/Family_Care.png",
    title: "Family Care",
  },
  {
    img: "/Herbals.png",
    title: "Herbals And Alternatives",
  },
  {
    img: "/spray.png",
    title: "Households, Cosmetics And Consumers",
  },
  {
    img: "/Injectables.png",
    title: "Devices And Injectables",
  },
  {
    img: "/Wellness___Beauty.png",
    title: "Wellness And Beauty",
  },
  {
    img: "/Hormonal___Sexual_Health.png",
    title: "Hormonal And Sexual Health",
  },
];

const ExploreCategory = () => {
  return (
    <>
      <h1 className="containers text-2xl font-bold mt-10 text-center">Explore by categories</h1>
      {/* Reduced gap-y-2 to minimize vertical space between cards */}
      <div className="pt-8 grid  gap-y-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mx-auto max-w-7xl px-4">
        {Cardsdata.map((card, index) => (
          <div key={index} className="shadow-sm w-60 flex items-center mx-auto">
            <div className="w-24 h-24 flex justify-center">
              <img
                className="w-24 h-24 object-contain"
                src={card.img}
                alt={card.title}
              />
            </div>
            <div className="pl-4">
              <p className="text-sm font-semibold">{card.title}</p>
              <p className="text-xs pt-2">{card.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-6 pr-20">
        <p className="text-right text-sm font-semibold">
          <a href="" className="">  
          View All Categories
            <FontAwesomeIcon icon={faArrowRight} className="text-sm ml-2" />
          </a>
        </p>
      </div>
    </>
  );
};

export default ExploreCategory;
