// import BookingRoomCard from "../Components/BookingRoomCard";

import { useContext, useEffect, useState } from "react";
import useAxiosSrc from "../Hooks/useAxiosSrc";
import { AuthContext } from "../Provider/AuthProvider";
import MyBookinRow from "../Components/MyBookinRow";
import axios from "axios";
import toast from "react-hot-toast";

const MyBooking = () => {

    const { user } = useContext(AuthContext)

    const axiosSrc = useAxiosSrc();
    const [rooms, setRooms] = useState([])



    useEffect(() => {
        fatchallData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    const fatchallData = async () => {
        const { data } = await axiosSrc.get(`/all-booking/${user.email}`)
        setRooms(data)
    }


    const handelDaleteroom = async (id, id2) => {

        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_LINK}/bookin-delet/${id}`)
            const newJob = rooms.filter(r => r._id !== id);
            setRooms(newJob);
            console.log(data);

        } catch (err) {
            console.log(err);
            toast.error("somthing is wrong")

        }

        const statusUpadte = { roomStatus: "available" }



        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_LINK}/updateStatus/${id2}`, statusUpadte)
            console.log(data);

        } catch (err) {
            console.log(err);
            toast.error("sothing is wrong")
        }
    }

    const updatebooking = async (newDate, id) => {
        const dateUpadte = { newDate }



        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_LINK}/dateUpdate/${id}`, dateUpadte)
            fatchallData()
            console.log(data);

        } catch (err) {
            console.log(err);
            toast.error("sothing is wrong")
        }

    }





    return (
        <div>
            <div className="w-11/12 mx-auto">
                <h1 className="text-2xl lg:text-5xl text-teal-500 py-10 text-center font-bold">My All Booking Rooms</h1>

                <div className="overflow-x-auto">
                    <h1 className="text-2xl text-teal-500">{rooms.length} Rooms</h1>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Hotel Name</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                rooms.map(room => <MyBookinRow key={room._id} room={room} handelDaleteroom={handelDaleteroom} updatebooking={updatebooking}></MyBookinRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;