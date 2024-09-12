import React from 'react';

export const Cardsdata = [
    {
      img:"/anti.jfif",
      title: "Eziday (25mg) 20 Tablets",
      price: "Rs. 43.2"
    },
    {
      img:"/carveda.jfif",
      title: "Carveda (6.25mg) 30 Tablets",
      price: "Rs. 102.67"
    },
    {
      img:"/eziday.jfif",
      title: "Co-Eziday (50/12.5mg) 20 Tab",
      price: "229.5"
    },
    {
      img:"/xplended.jfif",
      title: "Zurig (40mg) 20 Tablets",
      price: "Rs. 294.5"
    },
    {
        img:"/anti.jfif",
        title: "Eziday (25mg) 20 Tablets",
        price: "Rs. 43.2"
      },
      {
        img:"/carveda.jfif",
        title: "Carveda (6.25mg) 30 Tablets",
        price: "Rs. 102.67"
      },
      {
        img:"/eziday.jfif",
        title: "Co-Eziday (50/12.5mg) 20 Tab",
        price: "229.5"
      },
      {
        img:"/xplended.jfif",
        title: "Zurig (40mg) 20 Tablets",
        price: "Rs. 294.5"
      },
      {
        img:"/Caflam.png",
        title: "Caflam (25mg) 20 Tablets",
        price: "Rs. 43.2"
      },
      {
        img:"/IMODIUM.webp",
        title: "IMODIUM (6.25mg) 30 Tablets",
        price: "Rs. 102.67"
      },
      {
        img:"/Methycobal.webp",
        title: "Methycobal (50/12.5mg) 20 Tab",
        price: "229.5"
      },
      {
        img:"/NEXUM.webp",
        title: "NEXUM (40mg) 20 Tablets",
        price: "Rs. 294.5"
      }
  ];

const ExploreMedicine = () => {
  return (
    <>
    <div className="py-6">
      <p className="mt-5 containers text-xl font-bold border-b-2 border-gray-300 pb-2 ">
        Explore all Medicines
      </p>
    </div>
    <section className='w-full flex justify-center'>
    <div className="navsec w-full justify-items-center pt-8 grid gap-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
    {Cardsdata.map((card, index) => (
      <div key={index} className="p-4 shadow-sm">

      <div className='bg-slate-100 w-56 h-28 py-2 pl-4' > 
        <img className='w-48 h-20 bg-slate-300 cursor-pointer' 
        src={card.img} 
        alt={card.title}/>
        </div>
        <p className="PARA pt-4">{card.title}</p>
        <p className="text-xs pt-2">${card.price}</p>
        <button className='btn btn-border w-28 h-9  mt-5 text-center text-xs mb-12'>Add To Cart</button>
      </div>
    ))}
  </div>
  </section>
  </>
    
  );
};

export default ExploreMedicine;
