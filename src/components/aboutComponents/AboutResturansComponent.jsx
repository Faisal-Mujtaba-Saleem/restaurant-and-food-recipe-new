import React from 'react';
import Img1 from '../../assets/about-images/resturan-img1.jpg';
import Img2 from '../../assets/about-images/resturan-img2.jpg';

function AboutResturansComponent() {
    return (
        <section className="text-gray-600 body-font">
            <div className="w-screen flex px-5 lg:flex-row flex-col items-center justify-center lg:justify-between">
                <div className="w-full lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                    <h3 className="title-font sm:text-4xl !text-[1.90rem] mb-4 font-normal text-gray-900 font-playfairDisplay">
                        Our Restorans
                    </h3>
                    <span className="text-sm text-[#999999] font-extralight font-rubic">
                        <p className="mb-8 leading-relaxed">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                        <p className="mb-8 leading-relaxed font-sans font-normal text-gray-600">If you have any questions, we are here to support you 24/7. We do our best to make your life happier and easier! See you soon!</p>
                    </span>
                    <div className="flex justify-center text-sm font-playfairDisplay leading-relaxed tracking-wide">
                        <span>
                            <p className='text-[#f4b350] '>Monday — Thursday</p>
                            <p>8 am — 11 pm</p>
                        </span>
                        <span className='mx-16'>
                            <p className='text-[#f4b350]'>Friday — Sunday</p>
                            <p>11 am — 11 pm</p>
                        </span>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mb-10 md:mb-0 flex flex-row items-center justify-center">
                    <img className="object-cover object-center rounded-sm mx-1" alt="hero" src={Img1} />
                    <img className="object-cover object-center rounded-sm mx-1" alt="hero" src={Img2} />
                </div>
            </div>
        </section>
    )
}

export default AboutResturansComponent;