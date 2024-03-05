import React from 'react'

function SectionHead({ sectionTitle, sectionDescription, titleTextClr = "white", paraTextClr = "[#999999]" }) {
    return (
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className={`title-font text-4xl font-medium tracking-normal text-${titleTextClr} font-playfairDisplay after:bg-[#f4b350] after:block after:m-auto after:w-8 after:h-[3px] after:my-4`}>
                {sectionTitle}
            </h1>
            <p className={`lg:w-2/3 mx-auto leading-relaxed text-sm text-${paraTextClr}`}>
                {sectionDescription}
            </p>
        </div>
    )
}

export default SectionHead;
