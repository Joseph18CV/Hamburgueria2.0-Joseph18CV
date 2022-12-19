import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { StyledTotalCart } from "./styleTotalCart";

function TotalCart () {

    const {userDataCart, removeAllProductCart} = useContext(CartContext)

    const totalPrice = userDataCart.reduce((acc, value) => {
        return (acc + (value.price))
    }, 0)

    return (
        <StyledTotalCart>
            <div className="total-and-price">
                <p>Total</p>
                <span>R${totalPrice.toFixed(0)},00</span>
            </div>
            <button onClick={() => removeAllProductCart("")}>Remover todos</button>
        </StyledTotalCart>
    )
}

export {
    TotalCart
}