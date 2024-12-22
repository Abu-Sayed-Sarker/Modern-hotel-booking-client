import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);



    if (loading) return <div>loding in runing</div>
    if (user) return children


    return <Navigate to={'/login'}></Navigate>
};

export default PrivetRoute;