import React from "react";
import Footer from "../Components/Footer";

export const Devices = [
  {
    img: "/Devices.png",
    title: "Devices",
  },
  {
    img: "/Drips.png",
    title: "Drips",
  },
  {
    img: "/Injectibles.png",
    title: "Injectables",
  },
  {
    img: "/Supportive_Appliance.png",
    title: "Appliances",
  },
];

export const FamilyCare = [
  {
    img: "/Baby_Care.png",
    title: "Baby Care",
  },
  {
    img: "/Elder_Care.png",
    title: "Elderly Care",
  },
  {
    img: "/Mother_Care.png",
    title: "Mother Care",
  },
];

export const HerbalsAndAlternative = [
  {
    img: "/Alternative_Medicine.png",
    title: "Alternative Medicines",
  },
  {
    img: "/Herbal_Drugs.png",
    title: "Herbal Drugs",
  },
];

export const HouseCosmetics = [
  {
    img: "/Consumers.png",
    title: "Consumers",
  },
  {
    img: "/Cosmetics.png",
    title: "Cosmetics",
  },
  {
    img: "/Edibles_and_Beverages.png",
    title: "Beverages",
  },
  {
    img: "/Households.png",
    title: "HouseHolds",
  },
];

export const Medications = [
  {
    img: "/Bones___Joints.png",
    title: "Bone And Joint Pain",
  },
  {
    img: "/Cardiac_Care.png",
    title: "Cardiac Care",
  },
  {
    img: "/Derma_Care.png",
    title: "Derma Care",
  },
  {
    img: "/ENT_Care.png",
    title: "Ent Care",
  },
  {
    img: "/Eye___Ear_Care.png",
    title: "Eye and Ear Care",
  },
  {
    img: "/Genital_Care.png",
    title: "Genitals Care",
  },
  {
    img: "/Liver_Care.png",
    title: "Liver Care",
  },
  {
    img: "/Lung_Care.png",
    title: "Lung Care",
  },
];

export const PetCare = [
  {
    img: "/Animal_Care.png",
    title: "Animal Care",
  },
  {
    img: "/bird_care.png",
    title: "Bird Care",
  },
];

export const Beauty = [
  {
    img: "/oral_hygiene.png",
    title: "Oral Hygiene",
  },
  {
    img: "/skin_care.png",
    title: "Skin Care",
  },
  {
    img: "/Supplements.png",
    title: "Supplements",
  },
  {
    img: "/weight_management.png",
    title: "Weight Management",
  },
];

const CategoriesFiles = () => {
  return (
    <>
      <section className="containers mt-40 mx-auto">
        <div className=" navsec">
          <h1 className="text-2xl font-bold">All Categories</h1>
          <p className="text-xs pt-3 pb-12">Home | Pharmacy | Categories</p>
          <div>
            <div className="border-b-2 pb-2 flex justify-between">
              <h1 className="text-xl font-bold">Devices And Injectables</h1>
              <a className="text-sm text-gray-500" href="#">
                View All Medicines |
              </a>
            </div>
            <div className=" w-full justify-items-center pt-8 grid gap-2 xl:grid-cols-4">
              {Devices.map((card, index) => (
                <a href="#">
                  <div key={index} className="align-middle">
                    <div className=" navsec w-52 pl-4">
                      {" "}
                      <img
                        className="w-32 h-32 rounded-full border border-gray-300"
                        src={card.img}
                        alt={card.title}
                      />
                    </div>
                    <p className="PARA pt-2">{card.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <div className="border-b-2 pb-2 flex justify-between pt-16">
              <h1 className="text-xl font-bold">Family Care</h1>
              <a className="text-sm text-gray-500" href="#">
                View All Medicines |
              </a>
            </div>
            <div className=" w-full justify-items-center pt-8 grid gap-2 xl:grid-cols-4">
              {FamilyCare.map((card, index) => (
                <a href="#">
                  <div key={index} className="align-middle">
                    <div className=" navsec w-52 pl-4">
                      {" "}
                      <img
                        className="w-32 h-32 rounded-full border border-gray-300"
                        src={card.img}
                        alt={card.title}
                      />
                    </div>
                    <p className="PARA pt-2">{card.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <div className="border-b-2 pb-2 flex justify-between pt-16">
              <h1 className="text-xl font-bold">Herbals And Alternatives</h1>
              <a className="text-sm text-gray-500" href="#">
                View All Medicines |
              </a>
            </div>
            <div className=" w-full justify-items-center pt-8 grid gap-2 xl:grid-cols-4">
              {HerbalsAndAlternative.map((card, index) => (
                <a href="#">
                  <div key={index} className="align-middle">
                    <div className=" navsec w-52 pl-4">
                      {" "}
                      <img
                        className="w-32 h-32 rounded-full border border-gray-300"
                        src={card.img}
                        alt={card.title}
                      />
                    </div>
                    <p className="PARA pt-2">{card.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <div className="border-b-2 pb-2 flex justify-between pt-16">
              <h1 className="text-xl font-bold">Households, Cosmetics And Consumers</h1>
              <a className="text-sm text-gray-500" href="#">
                View All Medicines |
              </a>
            </div>
            <div className=" w-full justify-items-center pt-8 grid gap-2 xl:grid-cols-4">
              {HouseCosmetics.map((card, index) => (
                <a href="#">
                  <div key={index} className="align-middle">
                    <div className=" navsec w-52 pl-4">
                      {" "}
                      <img
                        className="w-32 h-32 rounded-full border border-gray-300"
                        src={card.img}
                        alt={card.title}
                      />
                    </div>
                    <p className="PARA pt-2">{card.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <div className="border-b-2 pb-2 flex justify-between pt-16">
              <h1 className="text-xl font-bold">Medications</h1>
              <a className="text-sm text-gray-500" href="#">
                View All Medicines |
              </a>
            </div>
            <div className=" w-full justify-items-center pt-8 grid gap-2 xl:grid-cols-4">
              {Medications.map((card, index) => (
                <a href="#">
                  <div key={index} className="align-middle">
                    <div className=" navsec w-52 pl-4">
                      {" "}
                      <img
                        className="w-32 h-32 rounded-full border border-gray-300"
                        src={card.img}
                        alt={card.title}
                      />
                    </div>
                    <p className="PARA pt-2">{card.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <div className="border-b-2 pb-2 flex justify-between pt-16">
              <h1 className="text-xl font-bold">Pet Care</h1>
              <a className="text-sm text-gray-500" href="#">
                View All Medicines |
              </a>
            </div>
            <div className=" w-full justify-items-center pt-8 grid gap-2 xl:grid-cols-4">
              {PetCare.map((card, index) => (
                <a href="#">
                  <div key={index} className="align-middle">
                    <div className=" navsec w-52 pl-4">
                      {" "}
                      <img
                        className="w-32 h-32 rounded-full border border-gray-300"
                        src={card.img}
                        alt={card.title}
                      />
                    </div>
                    <p className="PARA pt-2">{card.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="pb-24">
            <div className="border-b-2 pb-2 flex justify-between pt-16">
              <h1 className="text-xl font-bold">Wellness And Beauty</h1>
              <a className="text-sm text-gray-500" href="#">
                View All Medicines |
              </a>
            </div>
            <div className=" w-full justify-items-center pt-8 grid gap-2 xl:grid-cols-4">
              {Beauty.map((card, index) => (
                <a href="#">
                  <div key={index} className="align-middle">
                    <div className=" navsec w-52 pl-4">
                      {" "}
                      <img
                        className="w-32 h-32 rounded-full border border-gray-300"
                        src={card.img}
                        alt={card.title}
                      />
                    </div>
                    <p className="PARA pt-2">{card.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CategoriesFiles;
