import { useState } from "react";
import axios from "axios";

import Button from "../../../shared/buttons/buttons/Button";
import Input from "../../../shared/inputs/input/Input";

import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, TitleLogin } from "../styles/loginScreen.styles";
import SVGLogo from "../../../shared/icons/SVGLogo";

const LoginScreen = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/auth',
            data: {
                email: email,
                password: password
            },
        }).then( (result) => {
            alert(`Fez login ${result.data.accessToken}`);
            return result.data
        }).catch(() => {
            alert("Usuário ou senha inválido!");
        });
    };

    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png"/>
            <ContainerLogin>
                <LimitedContainer>
                    <SVGLogo />
                    <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
                    <Input title="Usuário" type="text" margin="32px 0px 0px" onChange={handleEmail} value={email}/>
                    <Input title="Senha" type="password" margin="32px 0px 0px" onChange={handlePassword} value={password}/>
                    <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>ENTRAR</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;
