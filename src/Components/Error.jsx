import { Link } from "react-router-dom";
import errorImg from '../assets/error.jpg'



const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center p-6 w-ful rounded-lg">
                <div className="w-60 mx-auto">
                    <img src={errorImg} alt="" />
                </div>

                <h1 className="text-5xl font-extrabold text-gray-800 mt-6">404 - Page Not Found</h1>
                <p className="text-lg text-gray-600 mt-4">Oops! The page you are looking for doesn&apos;t exist.</p>

                <div className="mt-8">
                    <Link><button className="btn bg-teal-200 hover:bg-teal-600 rounded-3xl">
                        Go Back to Home
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
