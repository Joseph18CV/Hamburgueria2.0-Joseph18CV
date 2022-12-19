import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";

function ProtectedLogin () {

    const {loading} = useContext(UserContext)
    const token = localStorage.getItem("@TOKEN")
    const location = useLocation()

    if(loading) {
        return null;
    }

    return !token ? <Outlet/> : <Navigate to="/dashboard" state={{from: location}}/>
}

export {
    ProtectedLogin
}