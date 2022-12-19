import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/UserContext";
import { Link } from "react-router-dom";
import Logo from "../../@types/assets/logo.svg";
import subLogo from "../../@types/assets/logo2.svg";
import Balls from "../../@types/assets/balls.svg";
import { StyledLoginPage } from "./styleLogin";

export interface iLoginData {
    email: string;
    password: string;
}

function LoginPage () {

    const {login} = useContext(UserContext)
    
    const loginSchema = yup.object().shape({
        email: yup.string().required("O email é obrigatório"),
        password: yup.string().required("A senha é obrigatória"),
    })

    const { register, handleSubmit, formState:{errors} } = useForm<iLoginData>({
        resolver: yupResolver(loginSchema)
    })

    return (
        <StyledLoginPage>
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
            <form noValidate autoComplete="off" onSubmit={handleSubmit(login)}>
                <h2>Login</h2>
                <Input label="email" id="email" type="email" placeholder="Digite aqui seu email" {...register("email")} />
                {errors.email?.message && <p>{errors.email.message}</p>}
                <Input label="senha" id="password" type="password" placeholder="Digite aqui sua senha" {...register("password")} />
                {errors.password?.message && <p>{errors.password.message}</p>}
                <button type="submit">Logar</button>
                <div className="div-p">
                    <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
                </div>
                <Link to="/register">Cadastrar</Link>
            </form>
        </StyledLoginPage>
    )
}

export {
    LoginPage
}