/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import moment from "moment"
import { useEffect, useState } from "react";



const MyBookinRow = ({ room, handelDaleteroom }) => {

    const { hotelName,
        roomPhoto,
        fee,
        description } = room.roomDetails || {}


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
            <td className="space-x-1"><button disabled={!isDisabled} onClick={() => handelDaleteroom(room._id)} className="text-[25px] hover:text-teal-600 disabled:cursor-not-allowed"><MdCancel /></button> <button className="text-[24px] hover:text-teal-600"><FaRegEdit /></button></td>
        </tr>
    );
};

export default MyBookinRow;