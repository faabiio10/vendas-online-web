import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductRoutesEnum } from '../../product/routes';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';

const FirstScreen = () => {
    const navigate = useNavigate();

    useEffect( () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { user } = useGlobalContext();

        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect( () => {
            if ( user )
                navigate(ProductRoutesEnum.PRODUCT);
        }, [user])
    });

    return <Spin />
};

export default FirstScreen;
