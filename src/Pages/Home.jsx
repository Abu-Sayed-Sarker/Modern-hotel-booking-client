import Banner from "../Components/Banner";
import FeaturedRomms from "../Components/FeaturedRomms";
import Map from "../Components/Map";
import ReactHelmet from "../Components/ReactHelmet";
import UserReaview from "../Components/UserReview";
import { useEffect } from "react";
import img from '../assets/ads.jpg'


const Home = () => {
    <ReactHelmet tittle={"Homepage"}></ReactHelmet>
    useEffect(() => {
        document.getElementById('my_modal_3').showModal();
    }, []);
    return (
        <div className="">
            <Banner></Banner>
            <FeaturedRomms></FeaturedRomms>
            <Map></Map>
            <UserReaview></UserReaview>
            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>open modal</button> */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box p-0">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-teal-200 hover:bg-teal-100 hover:text-black">✕</button>
                        </form>
                        <img className="w-full" src={img} alt="" />
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Home;