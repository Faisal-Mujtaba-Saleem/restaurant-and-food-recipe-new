import React from 'react'
import Img1 from '../../assets/today-special-images/sp1.jpg';
import Img2 from '../../assets/today-special-images/sp2.jpg';

const TodaySpCardsRow1 = [
    {
        spTitle: "CAMPO LINDO CHICKEN",
        spContent: "Praesent dapibus, neque id cursus faucibus, tortor neque",
        spPricing: "$20.15",
        spLabel: "in Dinners",
        spImg: Img1
    },
    {
        spTitle: "BROCCOLI SOUP",
        spContent: "Praesent dapibus, neque id cursus faucibus, tortor neque",
        spPricing: "$7.50",
        spLabel: "in Breakfast",
        spImg: Img2
    }
]

function TodaySpecialCardsRow1() {
    return (
        TodaySpCardsRow1.map((spCard, i) => {
            return (
                <div key={i} className="w-full lg:w-1/2">
                    <div className="group flex flex-col lg:flex-row w-full h-[100vh] lg:!h-full bg-white hover:!bg-[#f4b350] relative">
                        {/* Image part */}
                        <div className="w-full h-[50vh]">
                            <div className="text-center relative z-10">
                                <img alt="gallery" className="absolute inset-0 h-[50vh] w-full object-cover object-center" src={spCard.spImg} />
                            </div>
                        </div>

                        {/* Text content part */}
                        <div className="w-full flex justify-center items-center h-[50vh]">
                            <div className="text-center relative z-10">
                                <h2 className="text-lg lg:text-sm text-[#222222] hover:text-white cursor-pointer tracking-wide font-medium title-font mb-2 font-playfairDisplay">
                                    {spCard.spTitle}
                                </h2>
                                <p className="leading-relaxed pt-3 tracking-tight text-[#999999] text-sm mx-auto w-[75%] group-hover:text-white font-light font-rubic">
                                    {spCard.spContent}
                                </p>
                                <span className="mt-3 block items-center font-medium text-[#f4b350] text-3xl group-hover:text-white font-playfairDisplay">
                                    {spCard.spPricing}
                                </span>
                                <span className="mt-3 text-[#222222] block items-center text-sm font-playfairDisplay italic">
                                    {spCard.spLabel}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    )
}

export default TodaySpecialCardsRow1
