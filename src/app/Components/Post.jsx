import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export const CategoriesName = [
  {
    tittle: "Beauty",
    numbers: "(57)",
    link: "#",
  },
  {
    tittle: "Cancer Care & Awarness",
    numbers: "(24)",
    link: "#",
  },
  {
    tittle: "Child Care & Health",
    numbers: "(56)",
    link: "#",
  },
  {
    tittle: "Dental Health",
    numbers: "(59)",
    link: "#",
  },
  {
    tittle: "Disease and Disorder",
    numbers: "(144)",
    link: "#",
  },
  {
    tittle: "Drugs & Medications",
    numbers: "(55)",
    link: "#",
  },
  {
    tittle: "Employee Wellness",
    numbers: "(8)",
    link: "#",
  },
  {
    tittle: "Eye Care",
    numbers: "(18)",
    link: "#",
  },
  {
    tittle: "Featured",
    numbers: "(7)",
    link: "#",
  },
  {
    tittle: "Fitness and Healthy Lifestyle",
    numbers: "(96)",
    link: "#",
  },
  {
    tittle: "General Health",
    numbers: "(191)",
    link: "#",
  },
  {
    tittle: "Gut Health",
    numbers: "(29)",
    link: "#",
  },
  {
    tittle: "Hair Care",
    numbers: "(45)",
    link: "#",
  },
  {
    tittle: "Health Alerts",
    numbers: "(117)",
    link: "#",
  },
  {
    tittle: "Health and Technology",
    numbers: "(23)",
    link: "#",
  },
  {
    tittle: "Healthcare System",
    numbers: "(17)",
    link: "#",
  },
  {
    tittle: "Heart Care",
    numbers: "(34)",
    link: "#",
  },
  {
    tittle: "Herbal Health",
    numbers: "(9)",
    link: "#",
  },
  {
    tittle: "Life Style",
    numbers: "(21)",
    link: "#",
  },
  {
    tittle: "Men's Health",
    numbers: "(57)",
    link: "#",
  },
  {
    tittle: "Mental Health",
    numbers: "(53)",
    link: "#",
  },
  {
    tittle: "Nutrition & Diet",
    numbers: "(295)",
    link: "#",
  },
  {
    tittle: "Pain Management",
    numbers: "(4557)",
    link: "#",
  },
  {
    tittle: "Skin Care",
    numbers: "(160)",
    link: "#",
  },
  {
    tittle: "Social Problems",
    numbers: "(4)",
    link: "#",
  },
  {
    tittle: "Women's Health",
    numbers: "(178)",
    link: "#",
  },
];

export const postNews1 = [
  {
    img: "/med7.jpg",
    alternative: "Physical Therapy",
    newsHeading: "Difference Between Physical Therapy and Rehabilitation!",
    dates: "May 26, 2023",
  },
  {
    img: "/goodHealth.jpg",
    alternative: "a Happy Women",
    newsHeading:
      "Manifesting Good Health - Don't Just Exist, but Thrive for a Blissful Life",
    dates: "Jun 2, 2023",
  },
  {
    img: "/shutterstock.jpg",
    alternative: "ShutterStock",
    newsHeading: "11 Surprising Advantages of being a Left-Handed Person",
    dates: "MAy 11, 2023",
  },
  {
    img: "/HappyWomen.jpg",
    alternative: "Happy Women",
    newsHeading: "To live Happily, Here are 7 effective Ways",
    dates: "May 26, 2023",
  },
];

export const midSectionPost = [
  {
    img: "./SliderEye_0_3.jpg",
    alternative: "Tired Eye",
    heading1: "Eye Care",
    mainHeading: "5 Simple Ways On How to Get Rid of Tired Eyes",
    autorAndDate: "by Omama Anwar | Aug 27, 2024",
    authorLink: "#",
    description:
      "Dark circles, puffy eyelids, under-eye bags, and signs of aging – feeling any of these...",
    nextPage: "Read More",
    nextPageLink: "#",
  },
  {
    img: "./SliderDisorder_0_2.jpg",
    alternative: "Disorder Image",
    heading1: "Mental Health",
    mainHeading: "9 Healthy Tips to Manage Mental Exhaustion",
    autorAndDate: "by Omama Anwar | Feb 14, 2024",
    authorLink: "#",
    description:
      "Struggling with stress and feeling tired all the time? You might be dealing with mental...",
    nextPage: "Read More",
    nextPageLink: "#",
  },
  {
    img: "./SliderPre_0_1.jpg",
    alternative: "Pregency Women",
    heading1: "Women's Health",
    mainHeading: "How to Handle Appetite Loss During Pregnacy",
    autorAndDate: "by Omama Anwar | Feb 9, 2024",
    authorLink: "#",
    description:
      "Are you dealing with appetite loss during pregnancy? It’s all normal, you don’t need to...",
    nextPage: "Read More",
    nextPageLink: "#",
  },
  {
    img: "./Slider_shilajit_1_0.jpg",
    alternative: "A Shilajit",
    heading1: "Women's Health",
    mainHeading:
      "11 Benefits of Shilajit for Ladies to Boost Health, Energy, and Beauty",
    autorAndDate: "by Omama Anwar | Jan 30, 2024",
    authorLink: "#",
    description:
      "Hey there, pretty ladies! Not feeling at your best? Energy drained, mood swings, hormonal imbalances?...",
    nextPage: "Read More",
    nextPageLink: "#",
  },
  {
    img: "./Slider_pH_1_1.jpg",
    alternative: "Natural Way",
    heading1: "Women's Health",
    mainHeading: "10 Natural Ways to Balance Vaginal pH",
    autorAndDate: "by Omama Anwar | Jan 29, 2024",
    authorLink: "#",
    description:
      "Hey there! Have you ever experienced that not-so-fresh feeling down there? It could be a...",
    nextPage: "Read More",
    nextPageLink: "#",
  },
  {
    img: "./Slider_Eye-Health_1_2.jpg",
    alternative: "For Eye Health",
    heading1: "Eye Health",
    mainHeading: "9 Best Vitamins for Eye Health You Can’t Miss!",
    autorAndDate: "by Omama Anwar | Jan 26, 2024",
    authorLink: "#",
    description:
      "You come home after a long day staring at screens and straining your eyes. You...",
    nextPage: "Read More",
    nextPageLink: "#",
  },
  {
    img: "./aManWithPain.jpg",
    alternative: "A Man With Pain",
    heading1: "Gut Health",
    mainHeading: "5 Dietary Tips to Manage Inflammatory Bowel Disease",
    autorAndDate: "by Omama Anwar | Jan 26, 2024",
    authorLink: "#",
    description:
      "Are you having a consistent gut problem? Maybe abdominal pain, fatigue, diarrhoea, fever, bloody stools?...",
    nextPage: "Read More",
    nextPageLink: "#",
  },
  {
    img: "./LiverDiseases.jpg",
    alternative: "Liver And Doctor",
    heading1: "Gut Health",
    mainHeading: "13 Crucial Tips to Prevent Liver Disease",
    autorAndDate: "by Omama Anwar | Jan 24, 2024",
    authorLink: "#",
    description:
      "Abdominal pain, yellowing of the skin and eyes, and fatigue! Ring any bells? If you...",
    nextPage: "Read More",
    nextPageLink: "#",
  },
  {
    img: "./LiverWithDoctor.jpg",
    alternative: "Liver Cirrhosis",
    heading1: "Gut Health",
    mainHeading: "11 Diet Tips for Liver Cirrhosis",
    autorAndDate: "by Omama Anwar | Apr 3, 2024",
    authorLink: "#",
    description:
      "Cirrhosis is a severe liver condition that affects millions of people around the world. If...",
    nextPage: "Read More",
    nextPageLink: "#",
  },
  {
    img: "./Appendix-Surgery.jpg",
    alternative: "Appendix-Surgery",
    heading1: "Gut Health",
    mainHeading: "Do’s and Dont’s After Appendix Surgery!",
    autorAndDate: "by Omama Anwar | Jan 22, 2024",
    authorLink: "#",
    description:
      "Appendix surgery, or appendectomy, usually happens when your appendix becomes inflamed or swollen and is...",
    nextPage: "Read More",
    nextPageLink: "#",
  },
];

export const halfSectionPost = [
  {
    img: "./SliderEye_0_3.jpg",
    alternative: "Tired Eye",
    mainHeading: "5 Simple Ways On How to Get Rid of Tired Eyes",
    date: "Aug 27, 2024",
    nextPageLink: "#",
  },
  {
    img: "./SliderDisorder_0_2.jpg",
    alternative: "Disorder Image",
    mainHeading: "9 Healthy Tips to Manage Mental Exhaustion",
    date: "Feb 14, 2024",
    nextPageLink: "#",
  },
  {
    img: "./SliderPre_0_1.jpg",
    alternative: "Pregency Women",
    mainHeading: "How to Handle Appetite Loss During Pregnacy",
    date: " Feb 9, 2024",
    nextPageLink: "#",
  },
  {
    img: "./Slider_shilajit_1_0.jpg",
    alternative: "A Shilajit",
    mainHeading: "11 Benefits of Shilajit for Ladies to Boost Health, Energy, and Beauty",
    date: "Jan 30, 2024",
    nextPageLink: "#",
  },
];

const post = () => {
  return (
    <>
      <section className="pb-20 pt-10 bg-white flex justify-between max-w-screen-xl gap-4">
        <div className="navsec w-[60%] flex justify-between flex-wrap gap-2">
          <div className="w-full text-xl font-bold font-sans border-b-4 border-blue-800 pb-4">
            LIFE STYLE
          </div>
          <div className="w-full flex justify-between gap-5 mt-4">
            <div className="w-[50%]">
              <a href="#">
                <div className=" cursor-pointer">
                  <img src="./disorderimage.jpg" alt="DisorderImage" />
                </div>
                <div className="-w-full font-sans text-base mt-8 mb-3 font-bold">
                  What is substance Use Disorder? - Understanding Causes,
                  Symptoms, and Treatment
                </div>
              </a>
              <span className="text-gray-700-00 text-base">
                by Hamna Bano | Jun 7, 2023
              </span>
              <div className="w-full font-sans text-base mt-4 font-semibold text-gray-400">
                Drug Addiction, sometimes known to be substance use Disorder, is
                a mental and behavioral problem...
              </div>
            </div>
            <div className="w-[50%]">
              {postNews1.map((detail, index) => (
                <a href="#" key={index}>
                  <div className="flex justify-between border-b-2 pb-4 pl-2 gap-3 pt-2 w-96 text-sm">
                    <img
                      src={detail.img}
                      alt={detail.alternative}
                      width={130}
                    />
                    <div className="pl-3">
                      <h1>{detail.newsHeading}</h1>
                      <h2 className="pt-3 text-gray-500">{detail.dates}</h2>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="w-full text-xl font-bold font-sans border-b-4 border-blue-800 pb-4 pt-3">
            HEALTHCARE UPDATE
          </div>
          <div className="w-full mx-auto grid grid-cols-2 gap-5 mt-4">
            {midSectionPost.map((data, index) => (
              <div key={index}>
                <a href={data.nextPageLink}>
                  <div className="pb-5">
                    <img src={data.img} alt={data.alternative} width={500} />
                  </div>
                  <span className=" pb-5 text-xs text-blue-900">
                    {data.heading1}
                  </span>
                  <div className="-w-full font-sans text-2xl mt-8 mb-4 pl-3 text-blue-950">
                    {data.mainHeading}
                  </div>
                </a>
                <span className="text-gray-600-00 text-sm">
                  <a href={data.authorLink}>{data.autorAndDate}</a>
                </span>
                <div className="w-full font-sans text-base mt-4 font-semibold text-gray-400">
                  {data.description}
                </div>
                <div className="w-full flex items-center mt-5">
                  <button className="px-4 py-2 text-sm text-white rounded-lg bg-[#1e4275]">
                    {data.nextPage} {">>"}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[700px] flex items-center justify-center mt-4">
            <button className="px-4 py-2 text-sm font-mono text-white rounded-lg bg-[#1e4275] w-[70%]">
              LOAD MORE POST{" "}
              <FontAwesomeIcon icon={faArrowsRotate} className="size-4" />
            </button>
          </div>
        </div>
        <div className="w-[35%]">
          <div className="text-xl font-bold font-sans border-b-4 border-blue-800 pb-4">
            CATEGORIES
          </div>
          <div>
            {CategoriesName.map((names, index) => (
              <a href="#">
                <div
                  key={index}
                  className="pt-4 pb-4 text-gray-400 font-bold border-b-2 border-gray-300 flex justify-between"
                >
                  <h1>{names.tittle}</h1>
                  <h2>{names.numbers}</h2>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-7">
            <h1 className="text-lg border-b-4 border-blue-950 pb-3 mb-7">
              RECENT POSTS
            </h1>
            {halfSectionPost.map((detail, index) => (
              <a href={detail.nextPageLink} key={index}>
                <div className="flex justify-between border-b-2 pb-4 pl-2 gap-3 pt-2 w-96 text-sm">
                  <img src={detail.img} alt={detail.alternative} width={130} />
                  <div className="pl-3">
                    <h1>{detail.mainHeading}</h1>
                    <h2 className="pt-3 text-gray-500">
                      {detail.date}
                    </h2>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default post;
