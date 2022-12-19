import { StyledCartEmpty } from "./styleCartEmpty";

function CartEmpty () {
    return (
        <StyledCartEmpty>
            <p>Sua sacola está vazia</p>
            <span>Adicionar itens</span>
        </StyledCartEmpty>
    )
}

export {
    CartEmpty
}