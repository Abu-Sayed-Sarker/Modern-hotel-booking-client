import Banner from "../Components/Banner";
import FeaturedRomms from "../Components/FeaturedRomms";
import Map from "../Components/Map";
import UserReaview from "../Components/UserReview";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Map></Map>
            <FeaturedRomms></FeaturedRomms>
            <UserReaview></UserReaview>
        </div>
    );
};

export default Home;