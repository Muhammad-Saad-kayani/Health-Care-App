"use client"
import React from 'react'
import NavForBlog from '../Components/NavForBlog'
import Footer from '../Components/footer';
import Post from '../Components/Post';

const page = () => {

    return (
        <>
            <NavForBlog />

            <div className=" max-w-screen-xl flex mt-20 m-auto gap-4 ">
                <div className="w-[49%] cursor-pointer p-2">
                    <a href='#'>
                        <div className="w-full">
                            <img src="./SliderEye_0_3.jpg" alt="Eye_Image"/>
                        </div>
                        <div className="w-full flex flex-wrap gap-2">
                            <h1 className="w-full text-lg">Eye Care</h1>
                            <p className="w-full text-sm text-gray-500">5 Simple ways on How to Get Rid of Tired Eyes</p>
                        </div>
                    </a>
                </div>
                <div className="pb-4 w-[49%]">
                    <a href="#">
                        <div className=" p-2 flex items-center  flex-wrap justify-center gap-1">
                            <div className="w-full ">
                                <img src="./SliderDisorder_0_2.jpg" alt="DisorderWomen" width={300}/>
                            </div>
                            <div className="w-full flex flex-wrap gap-2">
                                <p className="w-full text-lg">
                                    9 Healthy Tips to Manage Mental Exhaustion
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div className="pt-4 flex items-center flex-wrap justify-center">
                            <div className="w-full">
                                <img src="./SliderPre_0_1.jpg" alt="PregancyWomenImage " width={300} />
                            </div>
                            <div className="w-full flex flex-wrap gap-2">
                                <p className="w-full text-lg">
                                    How to Handle Appetite Loss During Pregency?
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>


            <Post />
            <Footer />
        </>
    )
}

export default page