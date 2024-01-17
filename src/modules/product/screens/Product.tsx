import { useEffect } from 'react';

import { URL_PRODUCT } from '../../../shared/constants/urls';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductType } from '../types/ProductType';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { ColumnsType } from 'antd/es/table';
import Table from '../../../shared/components/table/Table';

const columns: ColumnsType<ProductType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

const Product = () => {
  const { products, setProducts } = useDataContext();
  const { request } = useRequests();

  useEffect(() => {
    request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET , setProducts);
  }, []);

  return <Table columns={columns} dataSource={products} />;
};

export default Product;
