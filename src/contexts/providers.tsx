import { CartProvider } from "./CartContext/CartContext";
import { UserProvider }  from "./UserContext/UserContext"; 

interface iContextsProps{
    children: React.ReactNode;
}

function Contexts ({children}: iContextsProps) {
    return (
        <UserProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </UserProvider>
    )
}

export {
    Contexts
}