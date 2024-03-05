import React from 'react'

const variants = [
  "Lunch",
  "Dinner",
  "Desserts",
  "Drinks"
]

function MenuVariants() {
  return variants.map(
    (varient, i) => {
      return <span key={i} className="mx-[1px] my-0 sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-[#f4b350] inline-flex items-center leading-none text-white tracking-wider rounded-sm cursor-default font-playfairDisplay">
        {varient}
      </span>
    }
  )
}

export default MenuVariants;
