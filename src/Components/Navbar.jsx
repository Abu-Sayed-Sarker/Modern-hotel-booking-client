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
        <div className="bg-teal-200 ">
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
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl uppercase font-bold">Hotel <span className="text-teal-700">Master</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5 uppercase *:border-b-black *:border-b">
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/rooms"}>Rooms</NavLink>
                        <NavLink to={"/my-booking"}>My Bookings</NavLink>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full bg-white">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user ? user?.photoURL : img} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow flex flex-col gap-3">
                            <NavLink to={'/addroom'}><button>Add Room</button></NavLink>
                            <NavLink to={'/myaddedrooms'}><button>My Added Rooms</button></NavLink>


                            {user ? <button onClick={handelLogout}>Log Out</button> : <NavLink to={"/login"}><button>Log In</button></NavLink>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;