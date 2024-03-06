import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ModalWindow({
    showEditForm, setShowEditForm,
    reservationCredentials,
    setReservationCredentials,
    handleUpdateReservation,
}) {

    const handleClose = () => setShowEditForm(false);

    const onReservationFieldsChange = (e) => {
        setReservationCredentials((prevState) => ({
            ...reservationCredentials,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <Modal show={showEditForm} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="font-playfairDisplay font-medium tracking-tight font-playfairDisplay after:bg-[#f4b350] after:block after:mr-auto after:w-8 after:h-[3px] after:mt-4">Update Seats</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="w-full h-full bg-transparent flex flex-col">
                        <div className="relative mb-4">
                            <label
                                htmlFor="guestName"
                                className="leading-7 text-sm text-white">
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
                            <label htmlFor="date" className="leading-7 text-sm text-white">
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
                        <div className="mb-4 px-2 flex justify-between items-center w-full">
                            <div className="relative w-[50%] -ml-2">
                                <label
                                    htmlFor="time"
                                    className="leading-7 text-sm text-white">
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
                                    className="leading-7 text-sm text-white">
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
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-[#f4b350] text-[#fff]  border-[1px] rounded-sm py-[0.5rem] px-4 my-8 mr-auto focus:outline-none hover:!bg-transparent hover:text-[#f4b350] hover:border-[#f4b350] text-md"
                        onClick={
                            e => {
                                handleUpdateReservation();
                                handleClose();
                            }
                        }
                        type="button">
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow;