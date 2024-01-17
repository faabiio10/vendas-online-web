import { useEffect } from "react";
import { useDataContext } from "../../../shared/hooks/useDataContext";
import { useRequests } from "../../../shared/hooks/useRequests";
import { MethodsEnum } from "../../../shared/enums/methods.enums";
import { ProductType } from "../types/ProductType";
import { URL_PRODUCT } from "../../../shared/constants/urls";

const Product = () => {
    const { products, setProducts } = useDataContext();
    const { request } = useRequests();

    useEffect( () => {
        request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts)
    }, []);

    return <div>{`Produtos ${products.length}`}</div>
}

export default Product;
