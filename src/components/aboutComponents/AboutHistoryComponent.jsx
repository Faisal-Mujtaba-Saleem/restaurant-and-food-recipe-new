import React from 'react';
import Sign from '../../assets/about-images/sign.png';
import Img1 from '../../assets/about-images/history-img1.jpg';
import Img2 from '../../assets/about-images/history-img2.jpg';

function AboutHistoryComponent() {
    return (
        <section className="text-gray-600 body-font py-20">
            <div className="w-screen flex px-5 lg:flex-row flex-col items-center justify-center lg:justify-between">
                <div className="w-full lg:w-1/2 mb-10 md:mb-0 flex flex-row items-center justify-center">
                    <img className="object-cover object-center rounded-sm mx-1 h-[45%]" alt="hero" src={Img1} />
                    <img className="object-cover object-center rounded-sm mx-1 h-[50%]" alt="hero" src={Img2} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
                    <h3 className="title-font sm:text-base !text-[1.90rem] mb-4 font-medium text-gray-900 font-playfairDisplay">Our History
                    </h3>
                    <p className="mb-8 leading-relaxed font-rubic text-sm text-[#999999] font-light">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                    </p>
                    <div className="flex justify-center">
                        <img src={Sign} alt="Sign" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHistoryComponent;