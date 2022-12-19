import styled from "styled-components";

export const StyledRegisterPage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    height: 100vh;
    margin-top: 60px;
    padding: 0px 15px;

    .div-logo-and-subLogo {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .div-sub-logo {
        border: 1px solid var(--grey-100);
        border-radius: var(--border-radius-3);
        display: flex;
        width: 100%;
        padding: 10px;
        gap: 10px;
        align-items: center;
    }

    .bg-green {
        background-color: rgba(39, 174, 96, 0.1);
        border-radius: var(--border-radius-3);
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .div-sub-logo p {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-4);
        color: var(--grey-300);
    }

    .div-sub-logo p strong {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-4);
        color: var(--grey-600);
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 20px;
        border: 2px solid var(--grey-0);
    }

    .div-header-register {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    form h2 {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-6);
        color: var(--grey-600); 
    }

    form button {
        background-color: var(--grey-0);
        border: 1px solid var(--grey-0);
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-5);
        color: var(--grey-300); 
        height: 60px;
        border-radius: var(--border-radius-4);
    }

    form button:hover {
        background-color: var(--grey-300);
        border: 1px solid var(--grey-300);
        color: var(--grey-0);
    }

    form p {
        text-align: center;
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-4);
        color: #999999; 
    }

    form a {
        border-bottom: 1px solid var(--grey-300);
        font-weight: var(--font-weight-2);
        font-size: var(--font-size-4);
        color: var(--grey-300);
    }
    
    .div-logo-and-subLogo > img {
        display: none;
    }

    @media (min-width: 950px){
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        gap: 60px;
        margin-top: 0px;

        form {
            width: 500px;
            height: 461px;
        }
        .div-p {
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            height: 50px;
        }

        .div-p p {
            max-width: 300px;
        }
        .div-logo-and-subLogo > img {
            display: flex;
            width: 180px;
            height: 80px;
        }
        .div-logo-and-subLogo {
            gap: 30px;
        }
        .div-sub-logo {
            max-width: 340px;
        }
    }
`