import React from 'react'
import Image from 'next/image';
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
  }
];


const Card1 = () => {
  return (
    <>
    <section className='w-full flex justify-center'>
    <div className="navsec w-full justify-items-center pt-8 grid gap-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">
    {Cardsdata.map((card, index) => (
      <div key={index} className="p-4 shadow-sm">

      <div className='bg-slate-100 w-56 h-28 py-2 pl-4' >  <img className='w-48 h-20 bg-slate-300' src={card.img} alt={card.title} /></div>
        <p className="PARA pt-4">{card.title}</p>
        <p className="text-xs pt-2">${card.price}</p>
        <button className='btn w-20 h-7  mt-5  text-center text-xs'>Add To Cart</button>
      </div>
    ))}
  </div>
  </section>
  </>
  )
}

export default Card1