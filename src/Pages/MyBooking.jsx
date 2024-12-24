// import BookingRoomCard from "../Components/BookingRoomCard";

import { useContext, useEffect, useState } from "react";
import useAxiosSrc from "../Hooks/useAxiosSrc";
import { AuthContext } from "../Provider/AuthProvider";

const MyBooking = () => {

    const { user } = useContext(AuthContext)

    const axiosSrc = useAxiosSrc();
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fatchallData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    console.log(rooms)


    const fatchallData = async () => {
        const { data } = await axiosSrc.get(`/all-booking/${user.email}`)
        setRooms(data)
    }








    return (
        <div>
            <div className="w-11/12 mx-auto">
                <h1 className="text-2xl lg:text-5xl text-teal-500 py-10 text-center font-bold">My All Booking Rooms</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* <BookingRoomCard></BookingRoomCard> */}
                </div>
            </div>
        </div>
    );
};

export default MyBooking;