import { useEffect, useState } from "react";
import useAxiosSrc from "../Hooks/useAxiosSrc";
import FeatuedCard from "./FeatuedCard";

const FeaturedRomms = () => {


    const axiosSrc = useAxiosSrc();
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        fatchallData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(rooms)


    const fatchallData = async () => {
        const { data } = await axiosSrc.get(`/featured-rooms`)
        setRooms(data)
    }


    return (
        <div className="w-11/12 mx-auto mt-16">
            <h1 className='text-2xl lg:text-5xl font-semibold text-teal-500 text-center pt-10'>Feature Rooms</h1>
            <p className='pt-5 pb-10 max-w-3xl mx-auto text-center'>Below is the list of best and quality hotels. These hotels offer choice and extra features. If you are looking for a good hotel for a luxurious and relaxing stay, click on the Book Now button below.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    rooms.map(room => <FeatuedCard key={room._id} room={room}></FeatuedCard>)
                }
            </div>

        </div>
    );
};

export default FeaturedRomms;