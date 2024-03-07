import React, { useContext, useEffect, useRef, useState } from "react";
import { RefContext } from "../contexts/RefContext";
import { MdDeleteForever, MdEdit } from "react-icons/md";
import ModalWindow from "../components/commons/Modal";

function ReservationResponse() {
  // States 
  const [reservationRes, setReservationRes] = useState([
    {
      guestName: "",
      date: "",
      time: "",
      persons: "",
    }
  ]);
  const [reservationCredentials, setReservationCredentials] = useState({
    guestName: "",
    date: "",
    time: "",
    persons: "",
  });
  const [showEditForm, setShowEditForm] = useState(false);
  const [updationIndex, setUpdationIndex] = useState(null);
  const [deletionIndex, setDeletionIndex] = useState(null);

  // Refs 
  const reservedSeatsRef = useRef(null);

  // Contexts 
  const { setSeatsRef } = useContext(RefContext);

  // Effects 

  // Get all Reservation on very first/initial effect
  useEffect(() => {
    setSeatsRef(reservedSeatsRef);
    getAllReservations();
  }, []);

  // Utility Functions 

  // Show all data
  const getAllReservations = () => {
    const seats = JSON.parse(
      localStorage.getItem('Seats_Reserved')
    )
    if (!!seats)
      setReservationRes(seats);
  }

  const getIndex = (id) => {
    let index = id.split("-");
    index = index[index.length - 1];
    return index;
  }

  // Handlers 

  // data is deleted from localstorage
  const handleDeleteClick = (id) => {
    let index = getIndex(id);
    setDeletionIndex(index);

    const seats = JSON.parse(
      localStorage.getItem('Seats_Reserved')
    )

    if (!!seats) {
      seats.splice(index, 1);
      localStorage.setItem('Seats_Reserved', JSON.stringify(seats));
    }

    getAllReservations(); // Refresh Reservation data
  }

  // data updating form is showing on clicking edit btn
  const handleUpdateClick = (id) => {
    let index = getIndex(id);
    setUpdationIndex(index);

    setReservationCredentials({
      ...reservationRes[index]
    })
    setShowEditForm(true);
  }

  // data is updated from localstorage
  const handleUpdateReservation = () => {
    const seats = JSON.parse(
      localStorage.getItem('Seats_Reserved')
    )

    if (!!seats) {
      seats[updationIndex] = reservationCredentials;
      localStorage.setItem('Seats_Reserved', JSON.stringify(seats));
    } else {
      localStorage.setItem('Seats_Reserved', JSON.stringify(
        [reservationCredentials]
      ));
    }

    getAllReservations(); // Refresh Reservation data
  }

  // Styles 
  const deleteIconStyling = {
    fontSize: "2rem",
    color: "#fa2828",
    margin: "0 auto",
    cursor: "pointer"
  }
  const editIconStyling = {
    fontSize: "2rem",
    color: "#f4b350",
    margin: "0 auto",
    cursor: "pointer"
  }
  return (
    <main ref={reservedSeatsRef} id="ReservationResponse" className="text-[#fff] font-rubic h-screen body-font relative overflow-x-hidden">
      <div className="bg-black w-screen h-screen absolute opacity-30"></div>

      <div className="overflow-x-auto ">

        {/* Table  */}
        <table className="w-full text-sm text-left rtl:text-right text-white dark:text-gray-400">

          {/* Table Head */}
          <thead className="text-md border-b text-center text-[#FFC125] uppercase dark:bg-gray-700 dark:text-gray-400 font-playfairDisplay">
            <tr>
              <th scope="col" className="px-9 py-4">
                Guest Name
              </th>
              <th scope="col" className="px-9 py-4">
                Time
              </th>
              <th scope="col" className="px-9 py-4">
                Date
              </th>
              <th scope="col" className="px-9 py-4">
                Persons
              </th>
              <th scope="col" className="px-9 py-4">
                Delete
              </th>
              <th scope="col" className="px-9 py-4">
                Edit
              </th>
            </tr>
          </thead>

          {/* Table Body  */}
          <tbody className="text-center">
            {reservationRes.map((Reservation, i) => (
              <tr
                key={i}
                className="dark:bg-gray-800 dark:border-gray-700 relative">
                <th
                  scope="row"
                  className="px-9 py-3 font-medium text-white whitespace-nowrap dark:text-white">
                  {Reservation.guestName}
                </th>
                <td className="px-9 py-3">{Reservation.time}</td>
                <td className="px-9 py-3">{Reservation.date}</td>
                <td className="px-9 py-3 text-md">{Reservation.persons}</td>
                <td className="px-9 py-3">
                  <MdDeleteForever
                    id={`delete-${i}`}
                    style={deleteIconStyling}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteClick(e.target.id);
                    }}
                  />
                </td>
                <td className="px-9 py-3">
                  <MdEdit
                    id={`edit-${i}`}
                    style={editIconStyling}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUpdateClick(e.target.id)
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container w-[100vw]  h-[50vh] py-24 mx-auto flex items-center   justify-center sm:flex-nowrap flex-wrap">

        <ModalWindow
          showEditForm={showEditForm}
          setShowEditForm={setShowEditForm}
          reservationCredentials={reservationCredentials}
          setReservationCredentials={setReservationCredentials}
          handleUpdateReservation={handleUpdateReservation}
        />

      </div>
    </main>
  );
}

export default ReservationResponse;