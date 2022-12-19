import { forwardRef, InputHTMLAttributes } from "react";
import { StyledInput } from "./styleInput";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Input = forwardRef<HTMLInputElement, iInputProps>(({label, id, type, placeholder, ...rest}, ref) => {
    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} ref={ref} {...rest}/>
        </StyledInput>
    )
})
