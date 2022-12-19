import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    input {
        height: 60px;
        border-radius: var(--border-radius-3);
        border: 2px solid var(--grey-600);
        padding-left: 5px;
    }

    label {
        position: absolute;
        top: -8px;
        left: 10px;
        background-color: white;
        padding: 0px 4px;
        font-weight: var(--font-weight-1);
        font-size: var(--font-size-3);
        color: #999999;
    }
`