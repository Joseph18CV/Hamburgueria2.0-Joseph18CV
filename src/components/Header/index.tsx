import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { ModalOpenCart } from "../ModalCart";
import Logo from "../../@types/assets/logo.svg";
import Loop from "../../@types/assets/loop.svg";
import Cart from "../../@types/assets/cart.svg";
import logout from "../../@types/assets/logout.svg";
import { StyledHeader } from "./styleHeader";

function Header () {

    const {logOut, userDataCart, setFilteredProducts, filterProducts, modalOpenCart, setModalOpenCart} = useContext(CartContext)

    return (
        <>
            {modalOpenCart === true ? <ModalOpenCart/> : ""}
            <StyledHeader>
                <div className="div-header">
                    <img src={Logo} alt="" />
                    {/* <input onChange={(event: any) => setFilteredProducts(event.target.value)}/> */}
                    <div className="icons">
                        <img src={Loop} alt="" onClick={() => filterProducts()} />
                        <div className="div-cart">
                            <img src={Cart} alt="" onClick={() => setModalOpenCart(true)}/>
                            <button onClick={() => setModalOpenCart(true)}>{userDataCart.length}</button>
                        </div>
                        <img src={logout} alt="" onClick={() => logOut()} />
                    </div>
                </div>
            </StyledHeader>
        </>
    )
}

export {
    Header
}