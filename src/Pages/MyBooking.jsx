// import BookingRoomCard from "../Components/BookingRoomCard";

import { useContext, useEffect, useState } from "react";
import useAxiosSrc from "../Hooks/useAxiosSrc";
import { AuthContext } from "../Provider/AuthProvider";
import MyBookinRow from "../Components/MyBookinRow";
import axios from "axios";
import toast from "react-hot-toast";
import ReactHelmet from "../Components/ReactHelmet";
import DatePicker from "react-date-picker";
import moment from "moment";

const MyBooking = () => {
    <ReactHelmet tittle={"My booking page"}></ReactHelmet>
    const { user } = useContext(AuthContext)

    const [value, onChange] = useState(new Date())

    const [roomId, setRoomId] = useState("")
    const [currentid, setcurrentId] = useState("")
    const [reviews, setReviews] = useState([]);


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
            toast.success("Update your date update!")
            console.log(data);

        } catch (err) {
            console.log(err);
            toast.error("sothing is wrong")
        }

    }




    useEffect(() => {
        if (currentid) {
            fatchallReview();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentid])






    const fatchallReview = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_LINK}/allreview/${currentid}`)
        setReviews(data)
    }
    // reviwe system implement



    // review system implement

    const handelReveiw = async (e, id) => {
        e.preventDefault();


        const from = e.target;

        const userName = from.userName.value;
        const rating = from.rating.value;
        const comment = from.comment.value;
        const date = moment().format('MM/D/YYYY, h:mm:ss a');
        const roomId = id

        if (rating > 5) return toast.error("enter rating 1 to 5 number!")

        const reviewData = { email: user?.email, photo: user?.photoURL, userName, rating, comment, date, roomId }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_LINK}/review`, reviewData)
            console.log(data);

        } catch (err) {
            console.log(err);
            toast.error("sothing is wrong")
        }




        const statusUpadte = { roomStatus: "unavailable", newrating: reviews.length + 1 }



        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_LINK}/updateStatus/${id}`, statusUpadte)
            console.log(data);

        } catch (err) {
            console.log(err);
            toast.error("sothing is wrong")
        }






        document.getElementById('my_modal_1').close()

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
                                rooms.map(room => <MyBookinRow key={room._id} room={room} setRoomId={setRoomId} setcurrentId={setcurrentId}></MyBookinRow>)
                            }
                        </tbody>
                    </table>
                    {/* delete booking room */}

                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-80 mx-auto">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you sure!</h3>
                            <p className="py-4">Do you want to cancel your booking?</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button onClick={() => handelDaleteroom(roomId, currentid)} className="btn hover:bg-teal-600 bg-teal-200">confirm</button>
                                </form>
                            </div>
                        </div>
                    </dialog>


                    {/* Update booking date model  */}

                    <dialog id="my_modal_4" className="modal">
                        <div className="modal-box w-96">
                            <h3 className="font-bold text-lg text-center">Update your booking Date</h3>
                            <div className="mt-5 flex justify-center">
                                <DatePicker onChange={onChange} value={value} />
                            </div>
                            <div className="modal-action mt-4 flex justify-center">
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button onClick={() => updatebooking(value, roomId)} className="btn bg-teal-200 hover:bg-teal-600">Update Date</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h1 className="text-2xl text-teal-500 font-semibold">Give Your Review</h1>
                            <div className="modal-action">
                                <form onSubmit={(e) => handelReveiw(e, currentid)} className="space-y-3 flex flex-col w-full" method="dialog">

                                    <div className="flex gap-3">
                                        <input name="userName" type="text" disabled defaultValue={user.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                                        <input name="rating" type="number" placeholder="Give rating 1 to 5" className="input input-bordered w-full max-w-xs" />
                                    </div>

                                    <textarea name="comment" className="textarea textarea-bordered w-full" placeholder="Comment here......"></textarea>


                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn bg-teal-200 hover:bg-teal-600 ">Give Review</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;