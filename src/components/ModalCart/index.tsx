import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { CartEmpty } from "../CartEmpty";
import { TotalCart } from "../TotalCart";
import { StyledModalBackgroundOpenCart, StyledModalOpenCart } from "./styleModal";
import Trash from "../../@types/assets/trash.svg";

function ModalOpenCart () {

    const {setModalOpenCart, userDataCart, removeProductCart} = useContext(CartContext)

    return (
        <StyledModalBackgroundOpenCart>
            <StyledModalOpenCart>
                <div className="header-modal">
                    <h3>Carrinho de compras</h3>
                    <button onClick={() => setModalOpenCart(false)}>x</button>
                </div>
                {userDataCart.length < 1 ? <CartEmpty/> : ""}
                <ul>
                    {userDataCart?.map((product, index) => (
                        <li key={index}>
                            <div className="divInfo">
                                <div className="div-img">
                                    <img src={product.img} alt="" />
                                </div>
                                <div className="name-and-buttons">
                                    <h3>{product.name}</h3>
                                    <div className="buttons">
                                        <button>-</button>
                                        <span>{1}</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                            <img src={Trash} alt="" onClick={() => removeProductCart(product)} />
                        </li>
                    ))}
                </ul>
                {userDataCart.length < 1 ? "" : <TotalCart/>}
            </StyledModalOpenCart>
        </StyledModalBackgroundOpenCart>
    )
}

export {
    ModalOpenCart
}