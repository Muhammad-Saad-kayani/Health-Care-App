import React from 'react'
import Image from 'next/image';
import NavForPhar from '../Components/NavForPhar';
import Footer  from '../Components/Footer';




export const Cardsdata = [
  {
    img:"/BonesImg1.webp",
    title: "Eziday (25mg) 20 Tablets",
    price: "Rs. 43.2"
  },
  {
    img:"BonesImg2.webp",
    title: "Carveda (6.25mg) 30 Tablets",
    price: "Rs. 102.67"
  },
  {
    img:"/BonesImg3.webp",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: "229.5"
  },
  {
    img:"BonesImg4.webp",
    title: "Zurig (40mg) 20 Tablets",
    price: "Rs. 294.5"
  },

  {
    img:"/BonesImg5.webp",
    title: "Eziday (25mg) 20 Tablets",
    price: "Rs. 43.2"
  },
  {
    img:"/BonesImg6.webp",
    title: "Carveda (6.25mg) 30 Tablets",
    price: "Rs. 102.67"
  },
  {
    img:"/BonesImg7.png",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: "229.5"
  },
  {
    img:"BonesImg8.webp",
    title: "Zurig (40mg) 20 Tablets",
    price: "Rs. 294.5"
  },

  {
    img:"/BonesImg9.webp",
    title: "Eziday (25mg) 20 Tablets",
    price: "Rs. 43.2"
  },
  {
    img:"/BonesImg10.webp",
    title: "Carveda (6.25mg) 30 Tablets",
    price: "Rs. 102.67"
  },
  {
    img:"/BonesImg11.webp",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: "229.5"
  },
  {
    img:"/BonesImg12.webp",
    title: "Zurig (40mg) 20 Tablets",
    price: "Rs. 294.5"
  },

  {
    img:"/BonesImg13.webp",
    title: "Eziday (25mg) 20 Tablets",
    price: "Rs. 43.2"
  },
  {
    img:"BonesImg14.webp",
    title: "Carveda (6.25mg) 30 Tablets",
    price: "Rs. 102.67"
  },
  {
    img:"BonesImg15.webp",
    title: "Co-Eziday (50/12.5mg) 20 Tab",
    price: "229.5"
  },
  {
    img:"/BonesImg16.webp",
    title: "Zurig (40mg) 20 Tablets",
    price: "Rs. 294.5"
  }


];


const CardiacCare = () => {
  return (
    <>

    
    <NavForPhar/>
    <h1 className='text-2xl font-bold mt-10'>Medications</h1>
    <div className=" pt-8 grid grid-cols-1 gap-2 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-4">

    {Cardsdata.map((card, index) => (
      <div key={index} className="p-4 shadow-sm">

      <div className=' navsec bg-slate-100 w-56 h-28 py-2 pl-4 pt-4' >  <img className='w-48 h-20 bg-slate-300' src={card.img} alt={card.title} /></div>
        <p className="PARA pt-4">{card.title}</p>
        <p className="text-xs pt-2">${card.price}</p>
        <button className='btn w-20 h-7  mt-5  text-center text-xs'>Add To Cart</button>
      </div>
    ))}
  </div>
  <Footer/>
  </>
  )
}

export default CardiacCare
