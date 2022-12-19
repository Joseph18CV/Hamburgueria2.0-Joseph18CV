import styled from "styled-components";

export const StyledModalBackgroundOpenCart = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
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
    height: 245px;
    max-height: 100%;
    overflow-y: scroll;
    background-color: white;
    padding: 15px 0px;

    .header-modal {
        background-color: var(--color-primary);
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 54px;
        padding: 0px 15px;
        width: 100%;
        margin-top: -20px;
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

    .ul-modal {
        border: none;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid var(--grey-100);
        padding-bottom: 15px;
        padding-left: 15px;
        padding-right: 15px;
        gap: 20px;
    }

    ul > li {
        border: none;
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: flex-start;
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
        margin-top: 4px;
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

    @media(min-width: 950px){
        height: 375px; 
    }
    
`