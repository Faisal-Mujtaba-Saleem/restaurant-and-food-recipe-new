import React from 'react'
import BrightMediaLinks from '../commons/BrightMediaLinks';

function ContactInfo() {
    return (
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-row justify-around">
            <div className="flex flex-col items-center text-sm leading-relaxed tracking-wide font-rubic">
                <h2 className="title-font font-medium text-3xl text-white font-playfairDisplay">
                    Contact Info
                </h2>

                <p className='text-[#ccc] text-center mt-4'>
                    732/21 Second Street, Manchester,
                    <br />
                    King Street, Kingston United
                </p>

                <div className="time-month flex flex-col my-4 items-center text-[#f4b350]">
                    <span className="month leading-relaxed">
                        + 123 4567-32-21
                    </span>
                    <span className="time leading-relaxed">
                        + 123 9876-54-43
                    </span>
                </div>
                <p className='text-[#ccc]'>
                    info@mail.com
                </p>

                <div className="media-links flex my-10">
                    <BrightMediaLinks mediaNames={[
                        "facebook", "twitter", "dribble", "google", "linkedin", "pinterest"
                    ]} />
                </div>
            </div>

            <div className="flex flex-col items-center text-sm leading-relaxed tracking-wide font-rubic">
                <h2 className="title-font font-medium text-3xl text-white font-playfairDisplay">
                    Open Hours
                </h2>

                <div className="time-month flex flex-col mt-4 items-center">
                    <span className="month leading-relaxed text-[#f4b350]">
                        Monday — Thursday
                    </span>
                    <span className="time leading-relaxed text-white">
                        8 am — 11 pm
                    </span>
                </div>

                <div className="time-month flex flex-col mt-4 items-center">
                    <span className="month leading-relaxed text-[#f4b350]">
                        Monday — Thursday
                    </span>
                    <span className="time leading-relaxed text-white">
                        11 am — 11 pm
                    </span>
                </div>
                <p className='text-[#ccc] text-center mt-4'>
                    Note: Restaurant is closed on holidays.
                </p>
            </div>
        </div>
    )
}

export default ContactInfo
