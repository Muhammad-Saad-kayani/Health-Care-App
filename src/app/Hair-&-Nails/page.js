import React from 'react'
import NavForPhar from '../Components/NavForPhar'
import Footer from '../Components/Footer';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import BreadCrumb from '../Components/BreadCrum';

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
    price: "Rs. 229.5"
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
      price: "Rs .229.5"
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
      price: "Rs. 229.5"
    },
    {
      img:"/NEXUM.webp",
      title: "NEXUM (40mg) 20 Tablets",
      price: "Rs. 294.5"
    }
];

const page = () => {
  return (
    <>
      <NavForPhar/>
      <p className="font-extrabold text-xl mt-40 ml-10 mb-3">Wellness And Beauty</p>
      <Breadcrumb/>
      <BreadCrumb/>
      <div className="mt-6 ml-10">
        <a href="/Bone-And-Joint-Pain" className="p-3 border rounded-full border-gray-400 inline-block mr-2 mb-2">Supplements</a>
        <a href="/Hair-&-Nails" className="p-3 border rounded-full border-gray-400 inline-block mr-2 mb-2">Hair And Nails Care</a>
        <a href="/Cardiac-care" className="p-3 border rounded-full border-gray-400 inline-block mr-2 mb-2">Skin Care</a>
        <a href="/Oral-Hygiene" className="p-3 border rounded-full border-gray-400 inline-block mr-2 mb-2">Oral Hygiene</a>
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
        <p className="text-xs pt-2">{card.price}</p>
        <button className='btn btn-border w-28 h-9  mt-5 text-center text-xs mb-12'>Add To Cart</button>
      </div>
    ))}
  </div>
  </section>
  <Footer/>
    </>
  )
}

export default page
