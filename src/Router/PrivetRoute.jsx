import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import LodingSpner from "../Components/LodingSpner";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);



    if (loading) return <LodingSpner></LodingSpner>
    if (user) return children


    return <Navigate to={'/login'}></Navigate>
};

export default PrivetRoute;