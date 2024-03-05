import React, { useEffect, useState } from "react";
import ApiCalling from "../utils/ApiCalling";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import ModalWindow from "../components/commons/Modal";

function BookingResponse() {
    const [bookingres, setBookingres] = useState([]);
    const [editedBookingId, setEditedBookingId] = useState(null);
    const [bookingCredentials, setBookingCredentials] = useState({
        guestName: "",
        date: "",
        time: "",
        persons: "",
    });
    const [showEditForm, setShowEditForm] = useState(false);

    // getallbookings useeffect
    useEffect(() => {
        getAllBookings();
    }, []);

    // all data is shown
    const getAllBookings = async () => {
        const data = await ApiCalling("https://json-food-server-api-rk5d.vercel.app/reservation", "GET");
        setBookingres(data);
    };

    // data is deleted from jsonserver api
    // const handleDelete = async (id) => {
    //     await ApiCalling(`http://localhost:3000/reservation/${id}`, "DELETE");
    //     setBookingres((prevData) =>
    //         prevData.filter((booking) => booking.id !== id)
    //     );
    // };
    // //data is updtae form is shown on clicking edit btn
    // const handleUpdate = (booking) => {
    //     setEditedBookingId(booking.id);
    //     setShowEditForm(true);
    //     setBookingCredentials({
    //         guestName: booking.guestName,
    //         date: booking.date,
    //         time: booking.time,
    //         persons: booking.persons,
    //     });
    // };
    // // data is updated from jsonserver api
    // const handleUpdateBooking = async () => {
    //     const data = await ApiCalling(
    //         `http://localhost:3000/reservation/${editedBookingId}`,
    //         "PATCH",
    //         JSON.stringify(bookingCredentials)
    //     );

    //     setShowEditForm(false);

    //     setBookingCredentials({
    //         guestName: "",
    //         date: "",
    //         time: "",
    //         persons: "",
    //     });
    //     getAllBookings(); // Refresh booking data
    // };

    const onBookingFieldsChange = (e) => {
        setBookingCredentials({
            ...bookingCredentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section
            id="bookingResponse-section"
            className="text-[#fff] font-rubic h-screen body-font relative overflow-x-hidden">
            <div className="bg-black w-screen h-screen absolute opacity-30"></div>

            <div className="overflow-x-auto ">
                <table className="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">
                    <thead className="text-md border-b   text-white uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Guest Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Persons
                            </th>
                            {/* <th scope="col" className="px-6 py-3">
                                Delete
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Edit
                            </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {bookingres.map((booking) => (
                            <tr
                                key={booking.id}
                                className="dark:bg-gray-800 dark:border-gray-700 relative">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                    {booking.guestName}
                                </th>
                                <td className="px-6 py-4">{booking.time}</td>
                                <td className="px-6 py-4">{booking.date}</td>
                                <td className="px-6 py-4 text-md">{booking.persons}</td>
                                {/* <td className="px-6 py-4">
                                    <MdDeleteForever
                                        onClick={() => handleDelete(booking.id)}
                                        style={{ fontSize: "2rem", color: "#fa2828" }}
                                    />
                                </td>
                                <td className="px-6 py-4">
                                    <MdEdit
                                        style={{ fontSize: "1.5rem", color: "#111827" }}
                                        onClick={() => handleUpdate(booking)}
                                    />
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="container w-[100vw]  h-[50vh] py-24 mx-auto flex items-center   justify-center sm:flex-nowrap flex-wrap">
                {/* {showEditForm && (
          <form className="lg:w-1/3 md:w-1/2 bg-transparent  flex flex-col md:mr-auto w-full md:py-8 mt-8 md:mt-0">
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
                <button
                  className="text-[#f4b350] bg-transparent border-[1px] border-[#f4b350] rounded-sm py-[0.5rem] px-4 my-8 mr-auto focus:outline-none hover:!bg-[#f4b350] hover:text-[#fff] text-md"
                  onClick={handleUpdateBooking}
                  type="button">
                  Save
                </button>
              </div>
            </div>
          </form>
        )} */}

                {showEditForm && (
                    <ModalWindow
                        bookingCredentials={bookingCredentials}
                        setBookingCredentials={setBookingCredentials}
                        handleUpdateBooking={handleUpdateBooking}
                    />
                )}
            </div>
        </section>
    );
}

export default BookingResponse;