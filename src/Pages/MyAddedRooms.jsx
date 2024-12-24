import { useContext, useEffect, useState } from "react";
import MyaddedRoomsTableRow from "../Components/MyaddedRoomsTableRow";
import { AuthContext } from "../Provider/AuthProvider";
import useAxiosSrc from "../Hooks/useAxiosSrc";
import toast from 'react-hot-toast'
import axios from "axios";
import ReactHelmet from "../Components/ReactHelmet";

// 
const MyAddedRooms = () => {
    const { user } = useContext(AuthContext);
    const axiosSrc = useAxiosSrc()
    const [rooms, setRooms] = useState([]);



    useEffect(() => {
        fatchallData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    const fatchallData = async () => {
        <ReactHelmet tittle={"My added rooms page"}></ReactHelmet>
        const { data } = await axiosSrc.get(`/all-rooms/${user.email}`)
        setRooms(data)
    }


    const handelDaleteroom = async id => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_LINK}/room/${id}`)
            const newJob = rooms.filter(r => r._id !== id);
            setRooms(newJob);
            console.log(data);

        } catch (err) {
            console.log(err);
            toast.error("somthing is wrong")

        }
    }

    return (
        <div className="lg:w-11/12 mx-auto">
            <h1 className="text-2xl lg:text-5xl font-bold text-teal-600 text-center py-10">My Added Rooms</h1>
            <div className="overflow-x-auto">
                <h1 className="text-2xl text-teal-500">{rooms.length} Rooms</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Hotel Name</th>
                            <th>Hotel</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rooms.map(singlRoom => <MyaddedRoomsTableRow key={singlRoom._id} room={singlRoom} handelDaleteroom={handelDaleteroom}></MyaddedRoomsTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAddedRooms;