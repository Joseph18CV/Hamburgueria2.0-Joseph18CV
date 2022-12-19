import styled from "styled-components";

export const StyledHeader = styled.header`
    height: 80px;
    padding: 10px;
    background-color: var(--grey-0);
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    .div-header {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .icons {
        display: flex;
        align-items: center;
        gap: 13px;
    }

    .div-header > img {
        width: 150px;
        height: 22px;
    }

    .div-cart {
        position: relative;
    }

    img {
        cursor: pointer;
    }

    .div-cart button{
        position: absolute;
        top: -14px;
        right: -8px;
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: var(--border-radius-2);
        padding: 2px 4.5px;
        color: white;
        font-weight: var(--font-weight-4);
    }

    @media(min-width: 950px){
        .div-header{
            max-width: 1400px;
            width: 100%;
        }
    }
`