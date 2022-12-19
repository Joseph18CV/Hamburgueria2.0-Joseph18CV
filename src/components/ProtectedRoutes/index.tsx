import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext/UserContext";

function ProtectedRoutes () {

    const {loading} = useContext(UserContext)
    const token = localStorage.getItem("@TOKEN")
    const location = useLocation()

    if(loading) {
        return null;
    }

    return token ? <Outlet/> : <Navigate to="/" state={{from: location}}/>
}

export {
    ProtectedRoutes
}