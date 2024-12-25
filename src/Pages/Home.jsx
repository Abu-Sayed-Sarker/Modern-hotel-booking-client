import Banner from "../Components/Banner";
import FeaturedRomms from "../Components/FeaturedRomms";
import ReactHelmet from "../Components/ReactHelmet";
import UserReaview from "../Components/UserReview";
import { useEffect } from "react";
import img from '../assets/ads.jpg'
import PopularServices from "../Components/PopularServices";
import About from "../Components/About";
import HotelMap from "../Components/HotelMap";


const Home = () => {
    <ReactHelmet tittle={"Homepage"}></ReactHelmet>
    useEffect(() => {
        document.getElementById('my_modal_3').showModal();
    }, []);
    return (
        <div className="">
            <Banner></Banner>
            <FeaturedRomms></FeaturedRomms>
            <HotelMap></HotelMap>
            <UserReaview></UserReaview>
            <PopularServices></PopularServices>
            <About></About>
            <div>
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