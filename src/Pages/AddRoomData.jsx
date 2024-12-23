import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useMutation } from "@tanstack/react-query"
import useAxiosSrc from "../Hooks/useAxiosSrc";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

const AddRoomData = () => {
    const axiosSrc = useAxiosSrc();
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);

    const { mutateAsync, isPending } = useMutation({
        mutationFn: async rooData => {
            await axiosSrc.post('/add-rooms', rooData)
        },
        onSuccess: () => {
            console.log("Room Added SuccessFully")
        },
        onError: (err) => {
            console.log(err);

        }
    });


    const addRoom = async e => {
        e.preventDefault()
        const form = new FormData(e.target);
        const roomPhoto = form.get("roomPhoto");
        const hotelName = form.get("hotelName");
        const roomStatus = form.get("roomStatus");
        const roomTittle = form.get("roomTittle");
        const paerson = form.get("paerson");
        const fee = form.get("fee");
        const hotelAddress = form.get("hotelAddress");
        const description = form.get("description");
        const roomSize = form.get("roomSize");



        const email = user?.email;
        const name = user?.displayName;
        const photo = user?.photoURL;


        // array 
        const in1 = e.target.in1.checked == true ? form.get("in1") : "";
        const in2 = e.target.in2.checked == true ? form.get("in2") : "";
        const in3 = e.target.in3.checked == true ? form.get("in3") : "";
        const in4 = e.target.in4.checked == true ? form.get("in4") : "";
        const in5 = e.target.in5.checked == true ? form.get("in5") : "";
        const in6 = e.target.in6.checked == true ? form.get("in6") : "";
        const in7 = e.target.in7.checked == true ? form.get("in7") : "";
        const in8 = e.target.in8.checked == true ? form.get("in8") : "";


        const facilities = [in1, in2, in3, in4, in5, in6, in7, in8];


        const Data = {
            owner: { email, name, photo },
            hotelName,
            roomPhoto,
            roomStatus,
            roomTittle,
            facilities,
            paerson,
            fee,
            roomSize,
            hotelAddress,
            description,
            rating: 0,
            totalreview: 0
        }



        try {
            await mutateAsync(Data)
            toast.success("Your Room is added successfilly.")
            e.target.reset()
            navigate('/myaddedrooms')
        } catch (err) {
            console.log(err);
            toast.error("sothing is wrong")
        }
    }
    return (
        <div>
            <div className="bg-gray-200">
                <div className="w-10/12 mx-auto">
                    <h1 className="text-center pt-5 lg:text-5xl text-3xl font-bold text-teal-500">Add new Room</h1>
                    <form onSubmit={addRoom} className="w-full flex flex-col gap-3 py-10">
                        <div className="flex lg:flex-row flex-col gap-3">

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xl">Enter yout Room cover photo URL</span>
                                </div>
                                <input name="roomPhoto" type="url" placeholder="URL" className="input input-bordered w-full" />
                            </label>

                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-xl">Enter Hotel name</span>
                                </div>
                                <input name="hotelName" type="text" placeholder="Country name here" className="input input-bordered w-full" />
                            </label>

                        </div>

                        <div className=" flex lg:flex-row flex-col gap-3">

                            {/* chosees section  */}

                            <div className="w-full space-y-3">
                                <div className="w-full">

                                    <label>
                                        <div className="label">
                                            <span className="label-text text-xl">Status</span>
                                        </div>
                                        <select name="roomStatus" className="select select-bordered w-full">
                                            <option disabled selected>Select room status</option>
                                            <option>available</option>
                                            <option>unavailable</option>
                                        </select>
                                    </label>

                                </div>

                                <div className="p-3">
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Master Bedroom</span>
                                            <input name="in1" type="checkbox" value={"Master Bedroom"} className="checkbox" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Fully Equipped Kitchen</span>
                                            <input name="in2" type="checkbox" value={"Fully Equipped Kitchen"} className="checkbox" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Modern Bathroom</span>
                                            <input name="in3" value={"Modern Bathroom"} type="checkbox" className="checkbox" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Spacious balcony with a view</span>
                                            <input name="in4" value={"Spacious balcony with a view"} type="checkbox" className="checkbox" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Non-smoking rooms</span>
                                            <input name="in5" value={"Non-smoking rooms"} type="checkbox" className="checkbox" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Good breakfast</span>
                                            <input name="in6" value={"Good breakfast"} type="checkbox" className="checkbox" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">24-hour front desk</span>
                                            <input name="in7" value={"24-hour front desk"} type="checkbox" className="checkbox" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label cursor-pointer">
                                            <span className="label-text">Tea/coffee maker in all rooms</span>
                                            <input name="in8" value={"Tea/coffee maker in all rooms"} type="checkbox" className="checkbox" />
                                        </label>
                                    </div>
                                </div>

                            </div>






                            {/* 2nd option  */}

                            <div className="w-full space-y-3">
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl">Room tittle</span>
                                    </div>
                                    <input name="roomTittle" type="text" placeholder="Enter Room tittle or Headline" className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl">Number of parson</span>
                                    </div>
                                    <input name="paerson" type="text" placeholder="Enter Room tittle or Headline" className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl">Room Size</span>
                                    </div>
                                    <input name="roomSize" type="text" placeholder="Validity here" className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl">Hotel Address</span>
                                    </div>
                                    <input name="hotelAddress" type="text" placeholder="Validity here" className="input input-bordered w-full" />
                                </label>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl">Fee</span>
                                    </div>
                                    <input name="fee" type="number" placeholder="Enter visa fee" className="input input-bordered w-full" />
                                </label>

                            </div>
                        </div>


                        <div>
                            <div className="w-full space-y-3">
                                <div className="w-full">
                                    <div className="label">
                                        <span className="label-text text-xl">Description</span>
                                    </div>
                                    <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Type here"></textarea>
                                </div>

                            </div>
                        </div>

                        <button className="btn w-full bg-teal-200 hover:bg-teal-700 rounded-xl">{isPending ? "Addeding Room....." : "Add Room"}</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRoomData;