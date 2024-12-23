/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
const MyaddedRoomsTableRow = ({ room, handelDaleteroom }) => {
    const { hotelName,
        roomTittle,
        fee,
        description,
        roomStatus, _id } = room || {}
    return (
        <tr>
            <td>{hotelName}</td>
            <td>{roomTittle}</td>
            <td>{fee}</td>
            <td>{roomStatus}</td>
            <td> {description.substring(0, 50)} ...</td>
            <td className="space-x-1"><button onClick={() => handelDaleteroom(_id)} className="text-[25px] hover:text-teal-600"><MdDeleteOutline></MdDeleteOutline></button> <Link to={`/upadate/${_id}`}><button className="text-[24px] hover:text-teal-600"><FaRegEdit /></button></Link></td>
        </tr>
    );
};

export default MyaddedRoomsTableRow;