import axios from "axios"
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const axiosSrc = axios.create({
    baseURL: import.meta.env.VITE_API_LINK,
    withCredentials: true,
})



const useAxiosSrc = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext)
    useEffect(() => {
        axiosSrc.interceptors.response.use(
            res => {
                return res
            },
            async error => {
                console.log('Error is :', error?.response)
                if (error.response.status === 401 || error.response.status === 403) {
                    logOut();
                    navigate("/login")
                }
            }
        )
    }, [logOut, navigate])
    return axiosSrc;
}

export default useAxiosSrc;