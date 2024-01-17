import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { ProductRoutesEnum } from '../../product/routes';
import { LoginRoutesEnum } from '../../login/routes';

const FirstScreen = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(ProductRoutesEnum.PRODUCT);
    } else {
        navigate(LoginRoutesEnum.LOGIN);
    }
  }, [user]);

  return <Spin />;
};

export default FirstScreen;
