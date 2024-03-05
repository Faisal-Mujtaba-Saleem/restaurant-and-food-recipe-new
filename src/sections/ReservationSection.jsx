import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RefContext } from '../contexts/RefContext';
import ApiCalling from "../utils/ApiCalling";
import Alert from "react-bootstrap/Alert";

function ReservationSection() {
    const navigate = useNavigate();
    const reservationSectionRef = useRef(null);
    const { setReservationRef } = useContext(RefContext);
    useEffect(() => {
        setReservationRef(reservationSectionRef);
    }, []);

    const [show, setShow] = useState(true);

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);

    const [bookingCredentials, setBookingCredentials] = useState({
        guestName: "",
        date: "",
        time: "",
        persons: "",
    });

    // post method using custom hook
    // const Postmethod = async (e) => {
    //     const data = await ApiCalling(
    //         "http://localhost:3000/reservation",
    //         "POST",
    //         JSON.stringify(bookingCredentials)
    //     );
    // };
    const onBookingFieldsChange = (e) => {
        setBookingCredentials({
            ...bookingCredentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleClickToBook = async (e) => {
        localStorage.setItem(
            "Booking Credentials",
            JSON.stringify(bookingCredentials)
        );

        // POST METHOD

        setBookingCredentials({
            guestName: "",
            date: "",
            time: "",
            persons: "",
        });

        // only alert maeesage is left
        if (
            bookingCredentials.guestName &&
            bookingCredentials.persons &&
            bookingCredentials.date &&
            bookingCredentials.time
        ) {
            // Navigate to "/seatsbooking"
            navigate("/seats");
            // Postmethod();
            setShowSuccessAlert(true);
            setShowDangerAlert(false);
        } else {
            setShowDangerAlert(true);
            setShowSuccessAlert(false);
        }
    };
    return (
        <section
            id="reservation-section"
            className="text-white body-font relative"
            ref={reservationSectionRef}>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <form className="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:mr-auto w-full md:py-8 mt-8 md:mt-0">
                    <h1 className="title-font sm:text-4xl !text-[2.5rem] mb-4 font-medium tracking-tight text-white font-playfairDisplay after:bg-[#f4b350] after:block after:mr-auto after:w-8 after:h-[3px] after:my-4">
                        Make Reservation
                    </h1>
                    <p className="leading-relaxed mb-5 text-[#ccc]">
                        Booking a table has never been so easy with free & instant online
                        restaurant reservations, book now!!
                    </p>
                    <div className="relative mb-4">
                        <label
                            htmlFor="guestName"
                            className="leading-7 my-2 text-sm text-white">
                            Guest Name
                        </label>
                        <input
                            value={bookingCredentials.guestName}
                            onChange={onBookingFieldsChange}
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
                            value={bookingCredentials.date}
                            onChange={onBookingFieldsChange}
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
                                value={bookingCredentials.time}
                                onChange={onBookingFieldsChange}
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
                                value={bookingCredentials.persons}
                                onChange={onBookingFieldsChange}
                                placeholder="2 people"
                                type="number"
                                id="persons"
                                name="persons"
                                required
                                className="w-full bg-white border border-gray-300 focus:bg-transparent outline-none text-[#999999] py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                    </div>

                    {/* for validation is succesfully ture  */}
                    {showSuccessAlert && (
                        <Alert
                            variant="success"
                            onClose={() => setShowSuccessAlert(false)}
                            dismissible>
                            Message sent successfully!
                        </Alert>
                    )}
                    {/* for validation is false   */}
                    {showDangerAlert && (
                        <Alert
                            variant="danger"
                            onClose={() => setShowDangerAlert(false)}
                            dismissible>
                            Please fill out all fields.
                        </Alert>
                    )}
                    <button
                        type="button"
                        onClick={handleClickToBook}
                        className="text-[#f4b350] bg-transparent border-[1px] border-[#f4b350] rounded-sm py-[0.5rem] px-4 my-8 mr-auto focus:outline-none hover:!bg-[#f4b350] hover:text-[#fff] text-md">
                        Find A Table
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ReservationSection;