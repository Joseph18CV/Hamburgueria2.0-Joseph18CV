import { useContext } from "react";
import { Header } from "../../components/Header";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { StyledDashboardPage } from "./styleDashboard";

function DashboardPage () {

    const { userData } = useContext(UserContext)
    const { addProductCart } = useContext(CartContext)

    return (
        <StyledDashboardPage>
            <Header/>
            <div className="div-ul">
                <ul>
                {userData?.map((product, index) => (
                    <li key={index}>
                        <div className="div-img">
                            <img src={product.img} alt="" />
                        </div>
                        <div className="div-info">
                            <h3>{product.name}</h3>
                            <p>{product.category}</p>
                            <span>{(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price))}</span>
                            <button onClick={() => addProductCart(product)}>Adicionar</button>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </StyledDashboardPage>
    )
}

export {
    DashboardPage
}