import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext/CartContext"
import Trash from "../../@types/assets/trash.svg";

function Ul () {

    const {userDataCart, removeProductCart, addProductCart} = useContext(CartContext)

    return (
        <ul className="ul-modal">
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
                            <span>{product.quantity}</span>
                            <button onClick={() => addProductCart(product)}>+</button>
                        </div>
                        </div>
                    </div>
                    <img src={Trash} alt="" onClick={() => removeProductCart(product)} />
                </li>
            ))}
        </ul>
    )
}

export {
    Ul
}