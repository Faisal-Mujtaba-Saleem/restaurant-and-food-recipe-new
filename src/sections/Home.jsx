import React, { useContext, useEffect, useRef, useState } from 'react';
import { RefContext } from '../contexts/RefContext';
import Slider from '../components/commons/Slider';

function Home() {
    const homeRef = useRef(null);
    const { setHomeRef } = useContext(RefContext);
    useEffect(() => {
        setHomeRef(homeRef);
    }, [])
    return (
        <section ref={homeRef} className="body-font m-0 w-screen">
            <Slider />
        </section >
    );
}

export default Home;