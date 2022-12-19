import styled from "styled-components";

export const StyledTotalCart = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;

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