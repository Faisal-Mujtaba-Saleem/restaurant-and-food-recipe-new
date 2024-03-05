import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ModalWindow({
    bookingCredentials,
    setBookingCredentials,
    handleUpdateBooking,
}) {
    const [show, setShow] = useState(false);
    //   const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const onBookingFieldsChange = (e) => {
        setBookingCredentials((prevState) => ({
            ...bookingCredentials,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <Modal show={handleOpen}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="bg-transparent flex flex-col md:mr-auto w-full md:py-8 mt-8 md:mt-0">
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
                                className="w-full bg-white border border-gray-300 outline-none text-black py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="date"
                                className="leading-7 my-2 text-sm text-white">
                                Date
                            </label>
                            <input
                                value={bookingCredentials.date}
                                onChange={onBookingFieldsChange}
                                type="date"
                                id="date"
                                name="date"
                                required
                                className="w-full bg-white border border-gray-300 outline-none text-black py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out"
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
                                    className="w-full bg-white border border-gray-300 focus:bg-transparent outline-none text-[#000000] py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out"
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
                                    className="w-full bg-white border border-gray-300 focus:bg-transparent outline-none text-black py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="text-[#f4b350] bg-transparent border-[1px] border-[#f4b350] rounded-sm py-[0.5rem] px-4 my-8 mr-auto focus:outline-none hover:!bg-[#f4b350] hover:text-[#fff] text-md"
                        onClick={handleUpdateBooking}
                        type="button">
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;