import { useContext, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { iUserData, UserContext } from "../UserContext/UserContext";

interface iCartProviderProps{
    children: React.ReactNode;
}

interface iCartProviderValue{
    addProductCart: (productData: iUserData) => void;
    filterProducts: () => void;
    logOut: () => void;
    userDataCart: iUserData[];
    setFilteredProducts: React.Dispatch<React.SetStateAction<string>>
    setModalOpenCart: React.Dispatch<React.SetStateAction<boolean>>
    modalOpenCart: boolean;
    removeProductCart: (productData: iUserData) => void
    removeAllProductCart: (productData: any) => void;
}

const CartContext = createContext<iCartProviderValue>({} as iCartProviderValue)

function CartProvider ({children}: iCartProviderProps) {

    const {setUserData, userData} = useContext(UserContext)
    const [userDataFiltered, setUserDataFiltered] = useState([] as iUserData[])
    const [userDataCart, setUserDataCart] = useState([] as iUserData[])
    const [filteredProducts, setFilteredProducts] = useState("")
    const navigate = useNavigate()
    const [modalOpenCart, setModalOpenCart] = useState(false)

    function filterProducts () {
        setUserDataFiltered(userData)
        const productsFiltered = userDataFiltered.filter((product) => {return (product.category.toUpperCase().includes(filteredProducts.toUpperCase()) || product.name.toUpperCase().includes(filteredProducts.toUpperCase()))})
        setUserData(productsFiltered)
    }

    function logOut () {
        localStorage.removeItem("@TOKEN")
        navigate("/")
    }

    function addProductCart (productData: iUserData) {
        const cart = userDataCart.find((product => product.id === productData.id))
        if(cart){
            const cartIndex = userDataCart.findIndex((product => product.id === productData.id))
            const item = userDataCart.splice(cartIndex, 1)
            item[0].quantity += 1
            setUserDataCart([item[0], ...userDataCart])    
        }else{ 
            productData.quantity = 1 
            setUserDataCart([...userDataCart, productData])                                                                                               
        }
    }

    function removeProductCart (productData: iUserData) {
        const cart = userDataCart.filter((product => product.id !== productData.id))
        setUserDataCart(cart)
    }

    function removeAllProductCart (productData: any) {
        const cart = userDataCart.filter((product => product.id === productData.id))
        setUserDataCart(cart)
    }

    return (
        <CartContext.Provider value={{
            logOut, 
            addProductCart, 
            userDataCart, 
            filterProducts, 
            setFilteredProducts, 
            setModalOpenCart, 
            modalOpenCart,
            removeProductCart,
            removeAllProductCart
            }}>
            {children}
        </CartContext.Provider>
    )
}

export {
    CartContext,
    CartProvider,
}