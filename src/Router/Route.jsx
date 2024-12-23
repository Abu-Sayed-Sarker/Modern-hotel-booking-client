import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Rooms from "../Pages/Rooms";
import MyBooking from "../Pages/MyBooking";
import Login from "../Pages/Authentica/Login";
import Register from "../Pages/Authentica/Register";
import AddRoomData from "../Pages/AddRoomData";
import PrivetRoute from "./PrivetRoute";
import MyAddedRooms from "../Pages/MyAddedRooms";
import UpdateRoom from "../Pages/UpdateRoom";
import RoomDettless from "../Pages/RoomDettless";


const Route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },

            {
                path: '/my-booking',
                element: <PrivetRoute><MyBooking></MyBooking></PrivetRoute>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addroom',
                element: <PrivetRoute><AddRoomData></AddRoomData></PrivetRoute>
            },
            {
                path: '/myaddedrooms',
                element: <PrivetRoute><MyAddedRooms></MyAddedRooms></PrivetRoute>
            },
            {
                path: '/upadate/:id',
                element: <PrivetRoute><UpdateRoom></UpdateRoom></PrivetRoute>
            },
            {
                path: '/room-dettles/:id',
                element: <PrivetRoute><RoomDettless></RoomDettless></PrivetRoute>
            },


        ]
    }
])

export default Route;