
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RoomCard = ({ room }) => {

    const {
        _id,
        roomTittle,
        roomPhoto,
        roomStatus,
        fee,
        description,
        hotelAddress,

    } = room || {};







    return (
        <div>
            <Link to={`/room-dettles/${_id}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="h-56">
                        <img
                            className="object-fill"
                            src={roomPhoto}
                            alt="Room image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {roomTittle ? roomTittle.substring(0, 22) : ""}...
                        </h2>
                        <p>{hotelAddress}</p>
                        <p>{description ? description.substring(0, 60) : ""}......</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-secondary">{roomStatus}</div>
                            <div className="badge badge-outline">BDT {fee} TK</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RoomCard;