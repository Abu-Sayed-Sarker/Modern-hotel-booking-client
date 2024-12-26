import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RoomCard = ({ room }) => {
    const [reviews, setReviews] = useState([]);
    const {
        _id,
        roomTittle,
        roomPhoto,
        roomStatus,
        fee,
        description,
        hotelAddress,

    } = room || {};




    useEffect(() => {
        fatchallReview();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_id])






    const fatchallReview = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_LINK}/allreview/${_id}`)
        setReviews(data)
    }





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
                            {roomTittle}
                            <div className="badge badge-secondary">{roomStatus}</div>
                        </h2>
                        <p>{hotelAddress}</p>
                        <p>{description ? description.substring(0, 60) : ""}......</p>
                        <div className="card-actions justify-center">
                            <div className="badge badge-outline">Total Review {reviews.length}</div>
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