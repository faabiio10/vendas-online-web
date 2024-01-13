import { Result } from "antd";
import Button from "../../../shared/components/buttons/button/Button";
import { ContainerPageNotFound } from "../styles/pageNotFound.styles";
import { useNavigate } from "react-router-dom";
import { LoginRoutesEnum } from "../../login/routes";

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleOnClickButton = () => {
        navigate(LoginRoutesEnum.LOGIN);
    };

    return (
        <ContainerPageNotFound>
            <Result status="404" title="Página não encontrada" subTitle="A página que está tentando acessar não existe." extra={ <Button type="primary" onClick={handleOnClickButton}>Voltar para o Início</Button> } />
        </ContainerPageNotFound>
    );
};

export default PageNotFound;
