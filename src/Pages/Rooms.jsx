import { useContext, useEffect, useState } from "react";
import useAxiosSrc from "../Hooks/useAxiosSrc";
import { AuthContext } from "../Provider/AuthProvider";
import RoomCard from "../Components/RoomCard";

const Rooms = () => {

    const { user } = useContext(AuthContext);
    const axiosSrc = useAxiosSrc()
    const [rooms, setRooms] = useState([]);


    useEffect(() => {
        fatchallData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    const fatchallData = async () => {
        const { data } = await axiosSrc.get(`/rooms`)
        setRooms(data)
    }



    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-2xl lg:text-5xl text-teal-500 py-10 text-center font-bold">All Books</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;