import React from 'react';
import { RiPushpinFill } from "react-icons/ri";
import { BiBadgeCheck } from "react-icons/bi";


function Details({ details, title }) {
    return (
        <div className="p-4 w-full">
            <h2 className="font-medium title-font tracking-widest text-[#f4b350] mb-4 text-sm sm:text-left uppercase underline">
                {title}
            </h2>
            <div className={`flex ${title === 'ingredients' && 'flex-col'} flex-wrap sm:items-start sm:text-left items-center -mb-1 space-y-2.5`}>
                {
                    details?.map(
                        (detail, i) => {
                            return (
                                <p key={i} className={`${title === 'health labels' ? 'w-full md:w-1/2 lg:w-1/3' : 'w-full'} `}>
                                    <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                        {
                                            title === "ingredients" ?
                                                <RiPushpinFill className='text-[#f4b350]' /> :
                                                <BiBadgeCheck className='text-[#fff] bg-[#f4b350] rounded-full' />
                                        }
                                    </span>
                                    {detail?.text || detail}
                                </p>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default Details;