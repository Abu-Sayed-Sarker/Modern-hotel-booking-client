/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { MdCancel, MdOutlineRateReview } from "react-icons/md";
import moment from "moment"
import { useEffect, useState } from "react";





const MyBookinRow = ({ room, setRoomId, setcurrentId }) => {



    const { hotelName,
        roomPhoto,
        fee,
        description,
        _id,
    } = room.roomDetails || {}





    // eslint-disable-next-line react-hooks/exhaustive-deps
    const bookingDate = new Date(room.bookingDate);


    const [isDisabled, setIsDisabled] = useState(true);



    useEffect(() => {
        const interval = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = currentDate - bookingDate;

            if (timeDifference <= 86400000) {
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
            <td className="space-x-1">
                <button disabled={isDisabled} onClick={() => {
                    setRoomId(room._id)
                    setcurrentId(_id)
                    document.getElementById('my_modal_5').showModal()
                }} className="text-[25px] hover:text-teal-600 disabled:cursor-not-allowed"><MdCancel /></button>
                <button onClick={() => {
                    setRoomId(room._id)
                    document.getElementById('my_modal_4').showModal()
                }} className="text-[24px] hover:text-teal-600"><FaRegEdit /></button>
                <button onClick={() => {
                    setcurrentId(_id)
                    document.getElementById('my_modal_1').showModal()
                }} className="text-[24px] hover:text-teal-600"><MdOutlineRateReview /> </button>
            </td>
        </tr>
    );
};

export default MyBookinRow;