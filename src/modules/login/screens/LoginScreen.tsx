import Button from "../../../shared/buttons/buttons/Button";
import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage, TitleLogin } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png"/>
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png"/>
                    <TitleLogin level={2} type="secondary">LOGIN</TitleLogin>
                    <Input title="Usuário" type="text"/>
                    <Input title="Senha" type="password"/>
                    <Button type="primary" margin="64px 0px 16px 0px">ENTRAR</Button>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;
