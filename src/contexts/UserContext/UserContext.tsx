import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { iLoginData } from "../../pages/LoginPage";
import { iRegisterData } from "../../pages/RegisterPage";
import { api } from "../../services/api";

interface iUserProviderProps{
    children: React.ReactNode;
}

interface iUserProviderValue{
    login: (data: iLoginData) => Promise<void>;
    registerSubmit: (data: iRegisterData) => Promise<void>;
    loading: boolean;
    userData: iUserData[];
    setUserData: React.Dispatch<React.SetStateAction<Array<iUserData>>>
}

export interface iUserData{
    category: string,
    id: number,
    img: string,
    name: string,
    price: number,
    quantity: number;
}

const UserContext = createContext<iUserProviderValue>({} as iUserProviderValue)

function UserProvider ({children}: iUserProviderProps) {

    const navigate = useNavigate()
    const location = useLocation()
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState([] as iUserData[])
    const [navigateLocation, setNavigateLocation] = useState("")

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("@TOKEN")
            api.defaults.headers.common.authorization = `Bearer ${token}` 
            if(!token) {
                setLoading(false)
                return;
            }

            try {
                const { data } = await api.get("products")
                setUserData(data)
            } catch (error) {
                console.error(error)
            }finally{
                setLoading(false)
            }
        }

        loadUser()
    }, [navigateLocation])

    async function login (data: iLoginData) {
        try {
            const response = await api.post("login", data)
            window.localStorage.clear()
            window.localStorage.setItem("@TOKEN", response.data.accessToken)
            api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`
            const toNavigate = location.state?.from?.pathname || "/dashboard"
            setNavigateLocation(toNavigate)
            setTimeout(function() {
                (navigate(toNavigate, {replace: true}))
            }, 1000) 
        } catch (error) {
            console.error(error)
        }
    }

    async function registerSubmit (data: iRegisterData) {
        try {
            const response = await api.post("users", data)
            console.log(response)
            setTimeout(function() {
                (navigate("/"))
            }, )
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <UserContext.Provider value={{login, registerSubmit, userData, setUserData, loading}}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserProvider,
}