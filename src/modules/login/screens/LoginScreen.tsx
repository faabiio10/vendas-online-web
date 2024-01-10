import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImage } from "../styles/loginScreen.styles";

const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <BackgroundImage src="./background.png"/>
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png"/>
                    <Input title="Usuário" type="text"/>
                    <Input title="Senha" type="password"/>
                </LimitedContainer>
            </ContainerLogin>
        </ContainerLoginScreen>
    )
}

export default LoginScreen;
