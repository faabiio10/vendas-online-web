import axios from "axios";

import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";

export const useRequests = () => {
    const [ loading, setLoading ] = useState(false);
    const { setNotification } = useGlobalContext();

    const getRequest = async ( url: string) => {
        setLoading(true);
        return await axios({
            method: 'get',
            url: url,
        }).then( (result) => {
            return result.data
        }).catch(() => {
            alert("Erro");
        });
    };

    const postRequest = async ( url: string, body: any) => {
        setLoading(true);
        const returnData = await axios({
            method: 'post',
            url: url,
            data: body,
        }).then( (result) => {
            setNotification('Login efetuado com sucesso!', 'success', 'Aguarde ..');
            return result.data
        }).catch(() => {
            setNotification('Login inválido', 'error', 'Verifique seu login e senha.');
        });

        setLoading(false);
        return returnData;
    };

    return {
        loading,
        getRequest,
        postRequest
    };
};
