/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const FeatuedCard = ({ room }) => {
    const {
        roomTittle,
        roomPhoto,
        facilities,
        description,
        hotelAddress,
    } = room || {};

    const newArray = facilities ? facilities.filter(f => f !== "") : "";



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
                        {roomTittle}
                    </h2>
                    <p>{hotelAddress}</p>
                    <p>{description.substring(0, 100)}......</p>

                    <div className="flex lg:justify-between lg:flex-row md:flex-row flex-col gap-2 lg:gap-0 pt-4">
                        {
                            newArray.length >= 0 ? <div className="badge badge-outline">{newArray[0]}</div> : ""
                        }
                        {
                            newArray.length > 1 ? <div className="badge badge-outline">{newArray[1]}</div> : ""
                        }

                    </div>

                    <div className="mt-4">
                        <Link to={'/rooms'}><button className="w-full bg-teal-200 hover:bg-teal-600 py-2 rounded-2xl font-semibold">Book Now</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeatuedCard;