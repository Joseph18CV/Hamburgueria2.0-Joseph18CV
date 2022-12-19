import styled from "styled-components";

export const StyledDashboardPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    .div-ul {
        padding-left: 12px;
        height: 360px;
        margin-top: 30px;
        max-width: 1400px;
        width: 100%;
    }

    ul {
        height: 100%;
        display: flex;
        overflow: hidden;
        overflow-x: scroll;
        gap: 20px;
    }

    ul > li {
        border: 2px solid var(--grey-100);
        width: 306px;
    }

    ul > li:hover {
        border: 2px solid var(--color-primary);
    }

    .div-img {
        width: 300px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--grey-0);
    }

    .div-info {
        height: 100%;
        padding: 25px;
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

    .div-info h3 {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-6);
        color: var(--grey-600); 
    }

    .div-info p {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        color: var(--grey-300); 
    }

    .div-info span {
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-4);
        color: var(--color-primary); 
    }

    .div-info button {
        width: 106px;
        padding: 0px 20px;
        height: 48px;
        border-radius: var(--border-radius-4);
        border: 1px solid var(--color-primary);
        background-color: var(--color-primary);
        color: white;
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-4);
    }

    .div-info button:hover {
        border: 1px solid var(--color-primary-hover);
        background-color: var(--color-primary-hover);
    }

    @media(min-width: 950px){
        .div-ul{
            padding-left: 0px;
        }
        ul{
            display: flex;
            overflow: initial;
            flex-wrap: wrap;
            gap: 58.6px;
        }
    }
`