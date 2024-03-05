import React from 'react'

function ImageCard({ image }) {
    return (
        <div className="lg:w-1/4 sm:w-1/2 w-full">
            <div className="gallery-card flex relative h-full my-[12vh]">
                <div className="absolute w-full">
                    <img alt="gallery" className="inset-0 w-full h-full object-cover object-center" src={image.src} />
                </div>
                <div className="px-8 py-10 relative z-10 w-full border-0 bg-[black] !opacity-0 hover:!opacity-60 flex justify-center items-center flex-col font-playfairDisplay">
                    <h2 className="tracking-widest text-sm title-font font-semibold text-[#f4b350] mb-1">
                        {image.label}
                    </h2>
                    <p className="leading-relaxed text-[#aaa] italic">
                        {
                            image.album
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
