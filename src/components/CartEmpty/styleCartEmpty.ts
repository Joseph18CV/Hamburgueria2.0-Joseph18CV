import styled from "styled-components";

export const StyledCartEmpty = styled.div`
    height: 158px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    p {
        font-weight: var(--font-weight-4);
        font-size: var(--font-size-6);
        color: var(--grey-600);
    }

    span {
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-4);
        color: var(--grey-300);
    }
`