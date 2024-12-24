import { useEffect, useState } from "react";
import useAxiosSrc from "../Hooks/useAxiosSrc";

import RoomCard from "../Components/RoomCard";

const Rooms = () => {

    const axiosSrc = useAxiosSrc()
    const [rooms, setRooms] = useState([]);

    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");




    useEffect(() => {
        fatchallData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minPrice, maxPrice])


    const fatchallData = async () => {
        const { data } = await axiosSrc.get(`/rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`)
        setRooms(data)
    }



    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-2xl lg:text-5xl text-teal-500 pt-10 pb-5 text-center font-bold">All Books</h1>
            <div className="flex justify-between pb-10">
                <h1 className="text-xl text-teal-400 font-semibold">Filter Room by price</h1>
                <div>
                    <span className="text-base font-semibold pr-2">Min price: </span>
                    <input onChange={(e) => setMinPrice(e.target.value)} className="p-2 border border-teal-600 rounded-2xl" type="number" />

                    <span className="text-base font-semibold px-2">Max price: </span>
                    <input onChange={(e) => setMaxPrice(e.target.value)} className="p-2 border border-teal-600 rounded-2xl" type="number" />

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    rooms.map(room => <RoomCard key={room._id} room={room}></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Rooms;