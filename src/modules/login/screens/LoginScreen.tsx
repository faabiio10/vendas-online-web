import { useState } from "react";

import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/input/Input";

import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, TitleLogin } from "../styles/loginScreen.styles";
import SVGLogo from "../../../shared/components/icons/SVGLogo";
import { useRequests } from "../../../shared/hooks/useRequests";
import { useGlobalContext } from "../../../shared/hooks/useGlobalContext";
import { UserType } from "../types/userType";

const LoginScreen = () => {
    const { accessToken, setAccessToken } = useGlobalContext();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const { postRequest, loading } = useRequests();

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {

        const user = await postRequest<UserType>('http://localhost:3000/auth', {
            email: email,
            password: password
        });

        setAccessToken(user?.accessToken || '');
    };

    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png"/>
            <ContainerLogin>
                <LimitedContainer>
                    <SVGLogo />
                    <TitleLogin level={2} type="secondary">LOGIN ({accessToken})</TitleLogin>
                    <Input title="Usuário" type="text" margin="32px 0px 0px" onChange={handleEmail} value={email}/>
                    <Input title="Senha" type="password" margin="32px 0px 0px" onChange={handlePassword} value={password}/>
                    <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>ENTRAR</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;
