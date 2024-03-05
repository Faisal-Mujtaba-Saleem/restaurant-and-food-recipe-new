import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/slider-images/slide1.jpg';
import slide2 from '../../assets/slider-images/slide2.jpg';
import slide3 from '../../assets/slider-images/slide3.jpg';
import { motion } from "framer-motion"

const carouselItems = [
    {
        img: slide1,
        imgAlt: "slide1",
        slideLabel: "Enjoy Our Food",
        slidePara: "Only the best ingredients for our dishes"
    },
    {
        img: slide3,
        imgAlt: "slide2",
        slideLabel: "Tradition & Passion",
        slidePara: "High-class Professional Service"
    },
    {
        img: slide2,
        imgAlt: "slide3",
        slideLabel: "Elegant Interior and Design",
        slidePara: "Only the best ingredients for our dishes"
    },
]
function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="w-screen">
            {
                carouselItems.map(
                    (Item, i) => {
                        return (
                            <Carousel.Item key={i} className="h-full lg:h-[90vh] w-full">
                                <Carousel.Caption className="flex flex-col h-full lg:h-[75%] justify-center items-center">
                                    <motion.h1
                                        initial={{ opacity: 0, y: -300 }}
                                        animate={{ opacity: 1, y: 1 }}
                                        transition={{ duration: 1, delay: 1 }}
                                        className="text-4xl sm:text-5xl lg:text-6xl my-2 sm:my-4 lg:mb-12 py-10 border-y-[1.5px] border-y-white w-[50vw] font-dancing" >
                                        {Item.slideLabel}
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, y: 300 }}
                                        animate={{ opacity: 1, y: 1 }}
                                        transition={{ duration: 1, delay: 1 }} className="font-medium text-xs sm:text-sm lg:text-lg font-rubic">{Item.slidePara}.</motion.p>
                                </Carousel.Caption>
                                <img src={Item.img} alt={Item.imgAlt} />
                            </Carousel.Item>
                        )
                    }

                )
            }
        </Carousel>
    );
}

export default Slider;