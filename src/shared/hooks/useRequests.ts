import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import ConnectionAPI, { connectionAPIPost, MethodType } from "../functions/connection/conectionAPI";
import { URL_AUTH } from "../constants/urls";
import { ERROR_INVALID_PASSWORD } from "../constants/errorStatus";
import { ProductRoutesEnum } from "../../modules/product/routes";
import { useNavigate } from "react-router-dom";
import { setAuthorizationToken } from "../functions/connection/auth";
import { AuthType } from "../../modules/login/types/AuthType";

export const useRequests = () => {
    const [ loading, setLoading ] = useState(false);
    const { setNotification, setUser } = useGlobalContext();

    const request = async <T>( url: string, method: MethodType, saveGlobal?: (object: T) => void, body?: unknown): Promise<T | undefined> => {
        setLoading(true);

        const returnData: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
        .then( (result) => {
            if( saveGlobal )
                saveGlobal(result);
            return result
        }).catch(( error: Error ) => {
            setNotification(error.message, 'error');
            return undefined;
        });

        setLoading(false);
        return returnData;
    };
    const AuthRequest = async ( body: unknown): Promise<void> => {
        const Navigate = useNavigate();

        setLoading(true);

        await connectionAPIPost<AuthType>( URL_AUTH, body)
        .then( (result) => {
            setUser(result.user);
            setAuthorizationToken(result.accessToken);
            setNotification('Login efetuado com sucesso!', 'success', 'Aguarde ..');
            Navigate(ProductRoutesEnum.PRODUCT);
        }).catch(() => {
            setNotification(ERROR_INVALID_PASSWORD, 'error');
        });

        setLoading(false);
    };

    return {
        loading,
        AuthRequest,
        request,
    };
};
