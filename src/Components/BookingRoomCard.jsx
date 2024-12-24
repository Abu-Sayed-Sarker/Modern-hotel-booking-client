/* eslint-disable react/prop-types */

const BookingRoomCard = ({ room }) => {
    const {
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
                    <p>{description.substring(0, 60)}......</p>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline">Total Review {rating}</div>
                        <div className="badge badge-outline">One night</div>
                        <div className="badge badge-outline">BDT {fee} TK</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookingRoomCard;