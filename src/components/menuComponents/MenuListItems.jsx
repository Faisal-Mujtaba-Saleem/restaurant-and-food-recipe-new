import React from 'react'
import Img1 from '../../assets/menu-images/menu1.jpg';
import Img2 from '../../assets/menu-images/menu2.jpg';
import Img3 from '../../assets/menu-images/menu3.jpg';
import Img4 from '../../assets/menu-images/menu4.jpg';

const menuLis = [
    {
        liTitle: "Roasted Steak Roulade",
        liDesc: "Mint parsley with apple cider vinegar, salt, sugar & spices",
        liPricing: "$20.15",
        liImg: Img1
    },
    {
        liTitle: "Fresh Baked Chicken Pot Pie",
        liDesc: "Chunks of tender, all-white chicken with carrots, onions, celery and peas in a rich cream.",
        liPricing: "$25.55",
        liImg: Img2
    },
    {
        liTitle: "Butterball Turkey & Dressing",
        liDesc: "Oven-roasted and hand-carved slices, served on homestyle sage dressing with hearty turkey.",
        liPricing: "$18.00",
        liImg: Img3
    },
    {
        liTitle: "Mushroom ‘n Swiss Chicken",
        liDesc: "Spinach, roma tomatoes, Italian black olives, feta and mozzarella",
        liPricing: "$30.15",
        liImg: Img4
    },
]

function MenuListItems() {
    return menuLis.map(
        (li, i) => {
            return (
                <div key={i} className="menu-li flex flex-row justify-between border-b border-dashed py-10">
                    <div className="sm:w-16 sm:h-11 h-8 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                        <img src={li.liImg} alt="" />
                    </div>
                    <div className="flex flex-row flex-grow justify-between sm:text-left mt-6 sm:mt-0">
                        <div className="description">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2 font-playfairDisplay">
                                {li.liTitle}
                            </h2>
                            <p className="leading-normal text-sm text-[#999999] font-light tracking-wide line break-words font-rubic">
                                {li.liDesc}
                            </p>
                        </div>
                        <div className="pricing">
                            <span className="block items-center text-sm text-[#f4b350] group-hover:text-white font-playfairDisplayItalic">
                                {li.liPricing}
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
    )
}

export default MenuListItems;
