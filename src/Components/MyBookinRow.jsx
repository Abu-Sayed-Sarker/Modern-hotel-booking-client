/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import moment from "moment"
import { useEffect, useState } from "react";



const MyBookinRow = ({ room, handelDaleteroom }) => {

    const { hotelName,
        roomPhoto,
        fee,
        description,
        _id
    } = room.roomDetails || {}


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const bookingDate = new Date(room.bookingDate);


    const [isDisabled, setIsDisabled] = useState(true);



    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = currentDate - bookingDate;

            if (timeDifference >= 86400000) {
                setIsDisabled(false);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [bookingDate]);






    return (
        <tr>
            <td><img className="w-16 rounded-xl" src={roomPhoto} alt="" /></td>
            <td>{hotelName}</td>
            <td>{fee}</td>
            <td>{room.bookingDate ? moment(room.bookingDate).format('MMM Do YY') : ""}</td>
            <td> {description.substring(0, 40)} ...</td>
            <td className="space-x-1"><button disabled={!isDisabled} onClick={() => document.getElementById('my_modal_5').showModal()} className="text-[25px] hover:text-teal-600 disabled:cursor-not-allowed"><MdCancel /></button> <button className="text-[24px] hover:text-teal-600"><FaRegEdit /></button></td>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-80 mx-auto">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure!</h3>
                    <p className="py-4">Do you want to cancel your booking?</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => handelDaleteroom(room._id, _id)} className="btn hover:bg-teal-600 bg-teal-200">confirm</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </tr>
    );
};

export default MyBookinRow;