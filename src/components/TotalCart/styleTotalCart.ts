import styled from "styled-components";

export const StyledTotalCart = styled.div`
    display: flex;
    flex-direction: column;

    .total-and-price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    button {
        border: 2px solid var(--grey-100);
        background-color: var(--grey-100);
        border-radius: var(--border-radius-2);
        height: 48px;
        color: var(--grey-300);
    }
`