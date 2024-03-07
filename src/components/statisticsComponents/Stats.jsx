import React, { useEffect, useRef } from 'react'

function Stats({ statistic }) {
    const statsRef = useRef(null);
    let count = 0;
    useEffect(() => {
        const timer = setInterval(() => {
            statsRef.current.innerText = count;
            count++;

            if (count > statistic.stats) {
                clearInterval(timer);
            }
        }, 1);

        return () => clearInterval(timer);
    }, [statistic.stats])

    return (
        <div className="md:w-1/4 sm:w-1/2 w-full">
            <div className="px-3 py-6 w-full">
                <p ref={statsRef} className='text-[#f4b350] font-playfairDisplay text-4xl tracking-wide font-medium'>
                    {count}
                </p>
                <h2 className="title-font font-medium font-playfairDisplay italic text-base text-black py-4">
                    {statistic.label}
                </h2>
                <p className="leading-normal font-rubic text-sm text-[#777777] w-full">{statistic.desc}</p>
            </div>
        </div>
    )
}

export default Stats
