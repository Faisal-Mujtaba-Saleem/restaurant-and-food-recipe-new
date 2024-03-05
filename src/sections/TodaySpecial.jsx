import React, { useContext, useEffect, useRef } from 'react';
import TodaySpecialCardsRow1 from '../components/TodaySpecialComponents/TodaySpecialCardsRow1'
import TodaySpecialCardsRow2 from '../components/TodaySpecialComponents/TodaySpecialCardsRow2'
import SectionHead from '../components/commons/SectionHead'
import { RefContext } from '../contexts/RefContext';

const sectionTitle = "Today's Special";
const sectionDescription = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.`;

function TodaySpecial() {
    const todaySpecialRef = useRef(null);
    const { setTodaySpecialRef } = useContext(RefContext);
    useEffect(() => {
        setTodaySpecialRef(todaySpecialRef);
    }, [])
    return (
        <section ref={todaySpecialRef} id="today-special-section" className="text-gray-600 body-font w-screen">
            <div className="container px-5 lg:!px-0 py-24 mx-auto w-screen">

                <SectionHead sectionTitle={sectionTitle} sectionDescription={sectionDescription} titleTextClr={'white'} />

                <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center w-full">
                    <TodaySpecialCardsRow1 />
                    <TodaySpecialCardsRow2 />
                </div>
            </div>
        </section>
    )
}

export default TodaySpecial;
