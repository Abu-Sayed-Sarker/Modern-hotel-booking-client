import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RoomCard = ({ room }) => {
    const {
        _id,
        hotelName,
        roomPhoto,
        roomStatus,
        fee,
        description,
        hotelAddress,
        rating

    } = room || {};
    return (
        <div>
            <Link to={`/room-dettles/${_id}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="h-56">
                        <img
                            src={roomPhoto}
                            alt="Room image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {hotelName}
                            <div className="badge badge-secondary">{roomStatus}</div>
                        </h2>
                        <p>{hotelAddress}</p>
                        <p>{description ? description.substring(0, 60) : ""}......</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline">Total Review {rating}</div>
                            <div className="badge badge-outline">One night</div>
                            <div className="badge badge-outline">BDT {fee} TK</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default RoomCard;