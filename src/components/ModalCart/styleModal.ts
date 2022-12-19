import styled from "styled-components";

export const StyledModalBackgroundOpenCart = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 125vh;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    
    @media(min-width: 950px){
        width: 100%;
        height: 160vh;
    }
`
export const StyledModalOpenCart = styled.div`
    margin-top: 150px;
    width: 375px;
    max-height: 375px;
    background-color: white;
    overflow: hidden;
    overflow-y: scroll;
    padding: 15px 15px;

    .header-modal {
        background-color: var(--color-primary);
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 54px;
        padding: 0px 15px;
        width: 113%;
        margin-top: -20px;
        margin-left: -17px;
        margin-bottom: 20px;
    }

    .header-modal h3 {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-6);
        color: white;
    }

    .header-modal > button {
        border: none;
        background: transparent;
        font-size: var(--font-size-8);
        color: rgba(255, 255, 255, 0.5);
    }

    ul {
        border: none;
        display: flex;
        flex-direction: column;
        padding-bottom: 15px;
        border-bottom: 1px solid var(--grey-100);
    }

    ul > li {
        border: none;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    ul > li:hover {
        border: none;
    }

    .divInfo {
        display: flex;
        gap: 10px;
    }

    .div-img {
        max-width: 80px;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--grey-100);
    }

    .div-img img {
        margin-top: 5px;
        width: 52px;
        height: 52px;
    }

    ul > li img {
        margin-top: -50px;
    }

    .name-and-buttons {
        max-width: 100px;
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .name-and-buttons h3 {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-6);
        color: #333333;
    }

    
`