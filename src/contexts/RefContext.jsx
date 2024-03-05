import React, { createContext, useEffect, useState } from 'react';

// Create a context
export const RefContext = createContext();

// Create a provider component
export const RefContextProvider = ({ children }) => {
    // Define state or any other data you want to manage
    const [homeRef, setHomeRef] = useState(null);
    const [aboutRef, setAboutRef] = useState(null);
    const [contactRef, setContactRef] = useState(null);
    const [teamRef, setTeamRef] = useState(null);
    const [reservationRef, setReservationRef] = useState(null);
    const [menuRef, setMenuRef] = useState(null);
    const [galleryRef, setGalleryRef] = useState(null);
    const [todaySpecialRef, setTodaySpecialRef] = useState(null);
    const [blogsRef, setBlogsRef] = useState(null);

    // Provide the context value to its children
    return (
        <RefContext.Provider value={{
            homeRef, setHomeRef,
            aboutRef, setAboutRef,
            contactRef, setContactRef,
            teamRef, setTeamRef,
            reservationRef, setReservationRef,
            menuRef, setMenuRef,
            galleryRef, setGalleryRef,
            todaySpecialRef, setTodaySpecialRef,
            blogsRef, setBlogsRef
        }}>
            {children}
        </RefContext.Provider>
    );
};
