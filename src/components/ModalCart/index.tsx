import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { CartEmpty } from "../CartEmpty";
import { TotalCart } from "../TotalCart";
import { Ul } from "../Ul";
import { StyledModalBackgroundOpenCart, StyledModalOpenCart } from "./styleModal";

function ModalOpenCart () {

    const {setModalOpenCart, userDataCart} = useContext(CartContext)

    return (
        <StyledModalBackgroundOpenCart>
            <StyledModalOpenCart>
                <div className="header-modal">
                    <h3>Carrinho de compras</h3>
                    <button onClick={() => setModalOpenCart(false)}>X</button>
                </div>
                {userDataCart.length < 1 ? <CartEmpty/> : <Ul/>}
                
                {userDataCart.length < 1 ? "" : <TotalCart/>}
            </StyledModalOpenCart>
        </StyledModalBackgroundOpenCart>
    )
}

export {
    ModalOpenCart
}