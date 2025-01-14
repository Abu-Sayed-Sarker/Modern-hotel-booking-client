import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import img from '../assets/img.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const handelLogout = () => {
        logOut();
    }


    return (
        <div className="bg-teal-200 fixed z-10 w-full">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/rooms"}>Rooms</NavLink>
                            <NavLink to={'/contactus'}>Contact Us</NavLink>
                            <NavLink to={'/faq'}>FAQ</NavLink>
                            {user && <NavLink to={"/my-booking"}>My Bookings</NavLink>}
                            {user ? <button className="font-[450]" onClick={handelLogout}>Log Out</button> : <NavLink to={"/login"}><button className="font-[450]">Log In</button></NavLink>}
                        </ul>
                    </div>
                    <NavLink to={"/"}><h1 className="text-xl uppercase font-bold">Hotel <span className="text-teal-700">Master</span></h1></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5 uppercase *:border-b-black *:border-b">
                        <NavLink to={"/"}> <li>Home</li> </NavLink>
                        <NavLink to={"/rooms"}>Rooms</NavLink>
                        <NavLink to={'/contactus'}>Contact Us</NavLink>
                        <NavLink to={'/faq'}>FAQ</NavLink>
                        {user && <NavLink to={"/my-booking"}>My Bookings</NavLink>}
                        {user ? <button className="font-[450]" onClick={handelLogout}>Log Out</button> : <NavLink to={"/login"}><button className="font-[450]">Log In</button></NavLink>}

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full bg-white">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    referrerPolicy='no-referrer'
                                    src={user ? user?.photoURL : img} />
                            </div>
                        </div>
                        {
                            user && <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow flex flex-col gap-3">
                                {user && <NavLink to={'/addroom'}><button>Add Room</button></NavLink>}
                                {user && <NavLink to={'/myaddedrooms'}><button>My Added Rooms</button></NavLink>}
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;