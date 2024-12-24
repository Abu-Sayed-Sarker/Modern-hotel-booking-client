import { MdOutlineVerifiedUser } from "react-icons/md";
import { PiCookingPot } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";

const PopularServices = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h1 className='text-2xl lg:text-5xl font-semibold text-teal-500 text-center pt-10'>Popular Services</h1>
            <p className='pt-5 pb-10 max-w-3xl mx-auto text-center'>Some of the important facilities of our hotel are provided in addition to these many other services are provided in our hotel.</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-5 pb-10">
                <div className="flex flex-col gap-3">
                    <MdOutlineVerifiedUser className="text-9xl" />
                    <h1 className="text-2xl font-semibold">Book with confidence</h1>
                    <p>Get 24/7 support and discover helpful reviews from our trusted community of guests.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <PiCookingPot className="text-9xl" />
                    <h1 className="text-2xl font-semibold">Find more amenities</h1>
                    <p>Explore stays based on the comforts you want for the perfect, dreamy getaway.</p>
                </div>
                <div className="flex flex-col gap-3">
                    <CiCalendar className="text-9xl" />
                    <h1 className="text-2xl font-semibold">Book with confidence</h1>
                    <p>Stays with flexible cancellation make it easy to re-book if your plans change.</p>
                </div>
            </div>
        </div>
    );
};

export default PopularServices;