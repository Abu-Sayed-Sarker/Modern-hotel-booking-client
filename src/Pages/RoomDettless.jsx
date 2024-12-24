import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import img from '../assets/img.png';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { AuthContext } from "../Provider/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import useAxiosSrc from "../Hooks/useAxiosSrc";
import toast from "react-hot-toast";
import ReactHelmet from "../Components/ReactHelmet";



const RoomDettless = () => {
    <ReactHelmet tittle={"Room dittles"}></ReactHelmet>
    const { id } = useParams()

    const { user } = useContext(AuthContext)

    const [room, setRoom] = useState({});

    const axiosSrc = useAxiosSrc();

    const [reviews, setReviews] = useState([]);

    const [value, onChange] = useState(new Date())



    const {
        owner,
        hotelName,
        roomPhoto,
        roomStatus,
        roomTittle,
        facilities,
        paerson,
        hotelAddress,
        fee,
        roomSize,
        description,
        _id
    } = room || {};

    // bookin button handle 

    const newArray = facilities ? facilities.filter(f => f !== "") : "";
    const [review, setReview] = useState(false);

    const { mutateAsync } = useMutation({
        mutationFn: async rooData => {
            await axiosSrc.post('/booking-room', rooData)
        },
        onSuccess: () => {
            console.log("Room booking SuccessFully")
        },
        onError: (err) => {
            console.log(err);

        }
    });

    const handleBookButn = async () => {

        setReview(true);

        if (value < new Date()) {
            return toast.error("Enter right Booking Date")
        }

        const bookigData = {
            bookingDate: value,
            roomId: _id,
            currentDate: new Date(),
            clinetEmail: user.email,
            roomDetails: room
        }
        // post Data in data base 

        try {
            await mutateAsync(bookigData)
            toast.success("Your Room is added successfilly.")

        } catch (err) {
            console.log(err);
            toast.error("sothing is wrong")
        }

        // update room data

        const statusUpadte = { roomStatus: "unavailable", newrating: reviews.length }



        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_LINK}/updateStatus/${id}`, statusUpadte)
            console.log(data);

        } catch (err) {
            console.log(err);
            toast.error("sothing is wrong")
        }

        fatchallData();


    }

    useEffect(() => {
        fatchallData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])




    const fatchallData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_LINK}/single-room/${id}`)
        setRoom(data)
    }



    //reviw section

    const handelReveiw = async e => {
        e.preventDefault();

        const from = e.target;

        const userName = from.userName.value;
        const rating = from.rating.value;
        const comment = from.comment.value;
        const date = new Date();
        const roomId = _id

        if (rating > 5) return toast.error("enter rating 1 to 5 number!")

        const reviewData = { email: user?.email, photo: user?.photoURL, userName, rating, comment, date, roomId }

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_LINK}/review`, reviewData)
            console.log(data);

        } catch (err) {
            console.log(err);
            toast.error("sothing is wrong")
        }


        //update reviwe

        const statusUpadte = { roomStatus: roomStatus, newrating: 1 + reviews.length }



        try {
            const { data } = await axios.put(`${import.meta.env.VITE_API_LINK}/updateStatus/${id}`, statusUpadte)
            console.log(data);

        } catch (err) {
            console.log(err);
            toast.error("sothing is wrong")
        }






        fatchallReview();
        document.getElementById('my_modal_1').close()

    }



    // fatch reviw


    useEffect(() => {
        fatchallReview();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])






    const fatchallReview = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_LINK}/allreview/${id}`)
        setReviews(data)
    }
    console.log(reviews);







    return (
        <div className="w-7/12 mx-auto">
            <h1 className="text-2xl font-bold lg:text-6xl text-teal-500 text-center py-10">Room Detteles</h1>
            <div>
                <div className="flex gap-5 pb-7">
                    <div>
                        <div className="w-10 rounded-full overflow-hidden bg-teal-100/55 border-4 ">
                            <img
                                alt="Tailwind CSS Navbar component"
                                referrerPolicy='no-referrer'
                                src={owner?.photo ? owner?.photo : img} />
                        </div>
                    </div>

                    <div>
                        <h1 className="text-xl font-semibold">{owner?.name}</h1>


                        <p>Rating : {room.rating}</p>

                    </div>
                </div>
                <div className="">
                    <img className="rounded-3xl overflow-hidden" src={roomPhoto} alt="" />
                </div>

                <h1 className="text-xl lg:text-4xl font-semibold text-teal-500 mt-8">{hotelName}</h1>

                <p className="flex items-center gap-3 py-5"><FaMapMarkerAlt /> {hotelAddress}</p>

                <div className="flex justify-start pb-5">
                    <p className="px-5 py-2 border bg-teal-100/50 rounded-3xl">{roomStatus}</p>
                    <p className="px-5 py-2 border rounded-3xl ml-5">BDT: {fee}TK</p>
                </div>

                <p>{description}</p>
            </div>

            <span className="text-xl text-teal-500 py-5">Most popular facilities</span>

            {
                facilities ? <div className="flex flex-wrap gap-10 py-5">
                    {newArray.map((fa, index) => <li className="list-none" key={index}><span className="text-teal-500">={">"}</span>  {fa}</li>)}

                </div> : ""
            }
            <span className="text-xl text-teal-500 py-5">More Info</span>
            <div>
                <h1 className="text-2xl">{roomTittle}</h1>
                <div>
                    <p><span>Room Size {"=>"}</span> {roomSize}</p>
                    <p><span>Paerson {"=>"}</span> {paerson}</p>
                </div>
            </div>




            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="space-x-4">
                <button disabled={roomStatus === "unavailable"} className="btn disabled:cursor-not-allowed bg-teal-200 hover:bg-teal-600 my-10" onClick={() => document.getElementById('my_modal_5').showModal()}>Booking Now</button>

                {
                    review ? <button className="btn bg-teal-200 hover:bg-teal-600 " onClick={() => document.getElementById('my_modal_1').showModal()}>Give Review</button> : ""
                }

            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>
                        <p className="tex-xl font-semibold py-2">Description:</p>
                        <p>{description}</p>
                    </div>
                    <p className="tex-xl font-semibold py-2"><span>Booking Price: </span>{fee} TK</p>
                    <p className="tex-xl font-semibold py-2">Select Booking Date</p>
                    <DatePicker onChange={onChange} value={value} />
                    <div className="modal-action">
                        <form method="dialog">
                            <button onClick={handleBookButn} className="btn bg-teal-200 hover:bg-teal-600 my-10 mx-auto">Confirm</button>
                        </form>
                    </div>
                </div>
            </dialog>



            <div>
                <h1 className="text-2xl text-teal-500 mb-11">User Review :</h1>

                {/* Open the modal using document.getElementById('ID').showModal() method */}

                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box">
                        <h1 className="text-2xl text-teal-500 font-semibold">Give Your Review</h1>
                        <div className="modal-action">
                            <form onSubmit={handelReveiw} className="space-y-3 flex flex-col w-full" method="dialog">

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

                <div>
                    {
                        reviews.map(revi => <div className="py-4 space-y-2" key={revi._id}>
                            <div className="flex gap-4">
                                <div>
                                    <div className="w-10 rounded-full overflow-hidden bg-teal-100/55 border-4 ">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            referrerPolicy='no-referrer'
                                            src={revi.photo ? revi.photo : img} />
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-xl">{revi.userName}</h1>
                                    <p><span>Rating: 5 / </span>{revi?.rating}</p>
                                </div>
                            </div>
                            <p>{revi.date}</p>
                            <p className="pb-4">{revi.comment}</p>
                            <hr />
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default RoomDettless;