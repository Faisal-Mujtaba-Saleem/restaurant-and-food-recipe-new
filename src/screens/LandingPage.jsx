import React from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import TodaySpecial from '../sections/TodaySpecial';
import Menu from '../sections/Menu';
import ReservationSection from '../sections/ReservationSection'
import Team from '../sections/Team';
import Statistics from '../sections/Statistics';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact';
import Directions from '../sections/Directions';

function LandingPage() {
    return (
        <main>
            <Home />
            <About />
            <TodaySpecial />
            <Menu />
            <ReservationSection />
            <Team />
            <Statistics />
            <Gallery />
            <Contact />
            <Directions />
        </main>
    )
}

export default LandingPage
