import { useForm } from "react-hook-form"
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { Link } from "react-router-dom";
import Logo from "../../@types/assets/logo.svg";
import subLogo from "../../@types/assets/logo2.svg";
import Balls from "../../@types/assets/balls.svg";
import { StyledRegisterPage } from "./styleRegister";

export interface iRegisterData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

function RegisterPage () {

    const {registerSubmit} = useContext(UserContext)
    
    const RegisterSchema = yup.object().shape({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().required("O email é obrigatório"),
        password: yup.string().required("A senha é obrigatória"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas precisam coincidir")
    })

    const { register, handleSubmit, formState:{errors} } = useForm<iRegisterData>({
        resolver: yupResolver(RegisterSchema)
    })

    return (
        <StyledRegisterPage>
            <div className="div-logo-and-subLogo">
                <div className="div-logo">
                    <img src={Logo} alt=""/>
                </div>
                <div className="div-sub-logo">
                    <div className="bg-green">
                        <img src={subLogo} alt=""/>
                    </div>
                    <p>
                        A vida é como um sanduíche, 
                        é preciso recheá-la com os 
                        <strong> melhores </strong>
                        ingredientes
                    </p>
                </div>
                <img src={Balls} alt=""/>
            </div>
            <form onSubmit={handleSubmit(registerSubmit)}>
                <div className="div-header-register">
                    <h2>Cadastro</h2>
                    <Link to="/">Retornar para o login</Link>
                </div>
                <Input label="Nome" id="name" type="text" placeholder="Digite aqui seu nome" {...register("name")} />
                {errors.name?.message && <p>{errors.name.message}</p>}
                <Input label="Email" id="email" type="email" placeholder="Digite aqui seu email" {...register("email")} />
                {errors.email?.message && <p>{errors.email.message}</p>}
                <Input label="Senha" id="password" type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                {errors.password?.message && <p>{errors.password.message}</p>}
                <Input label="confirmar senha" id="confirmPassword" type="password" placeholder="Digite aqui sua senha" {...register("confirmPassword")} />
                {errors.confirmPassword?.message && <p>{errors.confirmPassword.message}</p>}
                <button type="submit">Cadastrar</button>
            </form>
        </StyledRegisterPage>
    )
}

export {
    RegisterPage
}