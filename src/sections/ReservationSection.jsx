import React, { useContext, useEffect, useRef, useState } from 'react'
import { RefContext } from '../contexts/RefContext';
import AppAlert from '../components/commons/Alert';
import { AlertContext } from '../contexts/AlertContext';

function ReservationSection() {
    // Refs 
    const reservationSectionRef = useRef(null);

    // Contexts 
    const { showAlert } = useContext(AlertContext);
    const { setReservationRef } = useContext(RefContext);

    // States 
    const [reservationCredentials, setReservationCredentials] = useState({
        guestName: "",
        date: "",
        time: "",
        persons: "",
    });
    const [reservationCredentialsStore, setReservationCredentialsStore] = useState([]);

    // Effects
    useEffect(() => {
        setReservationRef(reservationSectionRef);
    }, []);

    useEffect(() => {
        const seats = JSON.parse(
            localStorage.getItem("Seats_Reserved")
        );
        if (!!seats) {
            localStorage.setItem(
                "Seats_Reserved",
                JSON.stringify(
                    [...seats, ...reservationCredentialsStore]
                )
            );
        } else {
            localStorage.setItem(
                "Seats_Reserved",
                JSON.stringify(reservationCredentialsStore)
            );
        }
    }, [reservationCredentialsStore])

    // Utility Functions 
    const onInvalidCredentials = () => {
        showAlert("Invalid or empty credentials!", "danger");
    }

    const clearForm = () => {
        setReservationCredentials(
            { guestName: "", date: "", time: "", persons: "", }
        )
    }

    // Handlers

    const onReservationFieldsChange = (e) => {
        setReservationCredentials(
            {
                ...reservationCredentials,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleClickToBook = (e) => {
        let condition = Object.keys(reservationCredentials);
        condition = condition.every(
            (key) => reservationCredentials[key] !== ""
        )

        if (condition) {
            if (
                reservationCredentials.guestName.length >= 3
                &&
                parseInt(reservationCredentials.persons) > 0
            ) {
                setReservationCredentialsStore(
                    (currentStore) => {
                        return [...currentStore, reservationCredentials];
                    }
                );

                clearForm();
                showAlert("Your seat has been saved successfully!", "success")
            } else
                onInvalidCredentials();
        }
        else {
            onInvalidCredentials();
        }
    };
    return (
        <section
            id="reservation-section"
            className="text-white body-font relative"
            ref={reservationSectionRef}>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <form className="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:mr-auto w-full md:py-8 mt-8 md:mt-0">
                    <h1 className="title-font sm:text-4xl !text-[2.5rem] mb-2 font-medium tracking-tight text-white font-playfairDisplay after:bg-[#f4b350] after:block after:mr-auto after:w-8 after:h-[3px] after:my-4">
                        Make Reservation
                    </h1>
                    <p className="leading-relaxed mb-5 text-[#ccc]">
                        Reservation a table has never been so easy with free & instant online
                        restaurant reservations, book now!!
                    </p>
                    <div className="relative mb-4">
                        <label
                            htmlFor="guestName"
                            className="leading-7 my-2 text-sm text-white">
                            Guest Name
                        </label>
                        <input
                            value={reservationCredentials.guestName}
                            onChange={onReservationFieldsChange}
                            placeholder="Name"
                            type="text"
                            id="guestName"
                            name="guestName"
                            required
                            className="w-full bg-white border border-gray-300 outline-none text-[#999999] py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="date" className="leading-7 my-2 text-sm text-white">
                            Date
                        </label>
                        <input
                            value={reservationCredentials.date}
                            onChange={onReservationFieldsChange}
                            type="date"
                            id="date"
                            name="date"
                            required
                            className="w-full bg-white border border-gray-300 outline-none text-[#999999] py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="p-2 flex justify-between items-center w-full">
                        <div className="relative w-[50%] -ml-2">
                            <label
                                htmlFor="time"
                                className="leading-7 my-2 text-sm text-white">
                                Time
                            </label>
                            <input
                                value={reservationCredentials.time}
                                onChange={onReservationFieldsChange}
                                type="time"
                                id="time"
                                name="time"
                                required
                                className="w-full bg-white border border-gray-300 focus:bg-transparent outline-none text-[#999999] py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative w-[50%] -mr-2">
                            <label
                                htmlFor="persons"
                                className="leading-7 my-2 text-sm text-white">
                                Persons
                            </label>
                            <input
                                value={reservationCredentials.persons}
                                onChange={onReservationFieldsChange}
                                placeholder="2 people"
                                type="number"
                                id="persons"
                                name="persons"
                                required
                                className="w-full bg-white border border-gray-300 focus:bg-transparent outline-none text-[#999999] py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>

                    <div className="px-2 flex justify-between items-center w-full">
                        <span className="relative w-[50%] -ml-2">
                            <button
                                type="button"
                                onClick={handleClickToBook}
                                className="text-[#f4b350] bg-transparent border-[1px] border-[#f4b350] rounded-sm py-[0.5rem] px-4 my-8 mr-auto focus:outline-none hover:!bg-[#f4b350] hover:text-[#fff] text-md">
                                Find A Table
                            </button>
                        </span>
                        <span className="relative w-[50%] -mr-2">
                            <AppAlert />
                        </span>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ReservationSection;