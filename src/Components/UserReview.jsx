import { useEffect, useState } from "react";
import useAxiosSrc from "../Hooks/useAxiosSrc";
import img from '../assets/img.png';
import ReactStars from 'react-stars';


const UserReview = () => {
    const axiosSrc = useAxiosSrc()
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fatchallData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const fatchallData = async () => {
        const { data } = await axiosSrc.get(`/reviwes`)
        setReviews(data)
    }
    return (
        <div className="w-10/12 mx-auto mt-16">
            <h1 className='text-2xl lg:text-5xl font-semibold text-teal-500 text-center pt-10'>User Reviews</h1>
            <p className='pt-5 pb-10 max-w-3xl mx-auto text-center'>See what our guests are saying about their stay! Read authentic feedback to help you choose the perfect room for your next visit. Share your experience and help others make the right choice!</p>

            <div>
                <div className="carousel carousel-vertical w-full rounded-box h-96">
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
                                    <p><ReactStars
                                        count={5}
                                        size={24}
                                        value={revi?.rating}
                                        color2={'#ffd700'}
                                        edit={false} /></p>
                                </div>
                            </div>
                            <p> {revi.date}</p>

                            <p className="pb-4">{revi.comment}</p>
                            <hr />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UserReview;